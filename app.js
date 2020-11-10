/*jslint node: true */
/* eslint-env node */
'use strict';

// Require express, socket.io, and vue
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

// Pick arbitrary port for server
var port = 3000;
app.set('port', (process.env.PORT || port));

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public/')));
// Serve vue from node_modules as vue/
app.use('/vue', express.static(path.join(__dirname, '/node_modules/vue/dist/')));
// Serve index.html directly as root page
app.get('/', function (req, res)
{
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
// Serve map.html as /map
app.get('/map', function (req, res)
{
  res.sendFile(path.join(__dirname, 'views/map.html'));
});
// Serve dispatcher.html as /dispatcher
app.get('/dispatcher', function (req, res)
{
  res.sendFile(path.join(__dirname, 'views/dispatcher.html'));
});

// Store data in an object to keep the global namespace clean and 
// prepare for multiple instances of data if necessary
function Data()
{
  this.orders = {};
  this.customerInfo = {};
  this.counter = 1;
}

/*
  Adds an order to to the queue
*/
Data.prototype.addOrder = function (order, customerInfo)
{
  //Store the order in an "associative array" with orderId as key
  order.orderId = this.counter++;
  this.orders[order.orderId] = order;
  this.customerInfo[order.orderId] = customerInfo;
};

Data.prototype.getAllOrders = function ()
{
  return this.orders;
};

Data.prototype.getAllCustomerInfo = function ()
{
  // console.log("This is all the customer info: ");
  // console.log(this.customerInfo);
  return this.customerInfo;
};

var data = new Data();

io.on('connection', function (socket)
{
  // Send list of orders when a client connects
  socket.emit('initialize', { orders: data.getAllOrders(), customerInfo: data.getAllCustomerInfo() });

  // When a connected client emits an "addOrder" message
  socket.on('addOrder', function (order, customerInfo)
  {
    data.addOrder(order, customerInfo);

    // send updated info to all connected clients, note the use of io instead of socket
    io.emit('currentQueue', { orders: data.getAllOrders(), customerInfo: data.getAllCustomerInfo() });
  });

});

var server = http.listen(app.get('port'), function ()
{
  console.log('Server listening on port ' + app.get('port'));
});
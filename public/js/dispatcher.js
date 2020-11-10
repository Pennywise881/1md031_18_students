/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orders',
  data: {
    orders: {},
    customerInfo: {}
  },
  created: function ()
  {
    socket.on('initialize', function (data)
    {
      this.orders = data.orders;
      this.customerInfo = data.customerInfo;
    }.bind(this));

    socket.on('currentQueue', function (data)
    {
      this.orders = data.orders;
      this.customerInfo = data.customerInfo;
    }.bind(this));
  }
});

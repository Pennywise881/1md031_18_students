var socket = io();

var vm = new Vue({
  el: '#burgerInfo',
  data: {

    // item1: 'Good Burger' + '. Contains Lactose',
    // item2: 'Bad Burger' + '. Contains Gluten',
    // booleanExpression: false,
    // burgers: [{ name: "burgerA", stock: 2 }, { name: "burgerB", stock: 100 }]
    burgers: burgers,
  },

  methods: {
    get_class_name: function (key)
    {
      return ("burger " + String.fromCharCode(key + 97));
    },
    get_burger_name: function (key)
    {
      return burgers[key].name;
    }
  },
})

var order = new Vue({
  el: '#order',

  data: {
    orders: {},
    customerInfo: {},
    allInfo: {}
  },

  methods: {
    getFoodItems: function ()
    {
      food = [];
      for (i = 0; i < burgers.length; i++)
      {
        if (document.getElementById("burger" + i).checked)
        {
          food.push(document.getElementById("burger" + i).name);
        }
      }

      return food;
    },

    displayOrder: function (event)
    {
      this.orders = {
        orderId: 0,
        details: {
          x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
          y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
        },
        orderItems: this.getFoodItems()
      };
    },

    addOrder: function ()
    {
      this.customerInfo = {
        name: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        payOption: document.getElementById('paymentop').value,
        gender: document.querySelector('input[name="gender"]:checked').value
      };

      socket.emit("addOrder", this.orders, this.customerInfo);

      this.allInfo = {
        order: this.orders,
        customer: this.customerInfo
      };
    },
  }
});

// var dots = new Vue({
//   el: '#dots',
//   data: {
//     currentOrder: {},
//   },
//   methods: {
//     showLocation: function (event)
//     {
//       this.currentOrder = {
//         details: {
//           x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
//           y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
//         },
//         orderItems: ["Beans", "Curry"]
//       };
//     }
//   },
// });

// var vm = new Vue({
//   el: '#submitButton',
//   data: {
//     orders: {},
//   },
//   created: function ()
//   {
//     socket.on('initialize', function (data)
//     {
//       this.orders = data.orders;
//     }.bind(this));

//     socket.on('currentQueue', function (data)
//     {
//       this.orders = data.orders;
//     }.bind(this));
//   },
//   methods: {
//     getNext: function ()
//     {
//       var lastOrder = Object.keys(this.orders).reduce(function (last, next)
//       {
//         return Math.max(last, next);
//       }, 0);
//       return lastOrder + 1;
//     },
//     addOrder: function ()
//     {
//       // console.log(dots.currentOrder);
//       socket.emit("addOrder", {
//         orderId: this.getNext(),
//         details: dots.currentOrder.details,
//         orderItems: dots.currentOrder.orderItems
//       });
//     }
//   }
// });

// --------------------------------------------------- OLD CODE ------------------------------------------------------

// var oi = new Vue({
//   el: "#orderInfo",
//   data: {
//     order: [],
//     labels: ["Name: ", "Email: ", /*"Street: ", "House Number: ",*/"Payment Option: ", "Gender: ", "Food Ordered: "],
//   },
// })

// var dt = new Vue({
//   el: '#dots',
//   data: {
//     // orders: {},
//     currentOrder: {},
//   },
//   methods: {
//     displayOrder: function (event)
//     {
//       this.currentOrder = {
//         orderId: 1,
//         details: {
//           x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
//           y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
//         },
//         orderItems: ["Beans", "Curry"],
//       };

//       // console.log(this.currentOrder.details.x);
//       // console.log(this.currentOrder.details.y);

//     }
//   },
//   // created: function ()
//   // {
//   //   // socket.on('initialize', function (data)
//   //   // {
//   //   //   // console.log(Object.keys(data.orders).length);

//   //   //   this.orders = data.orders;
//   //   //   // this.currentOrder = data.currentOrder;
//   //   //   // console.log(this.currentOrder);
//   //   //   // this.currentOrder = data.currentOrder;
//   //   //   // console.log(this.orders);
//   //   //   // console.log(data.orders);
//   //   //   // this.orders = data.orders[Object.keys(data.orders)[Object.keys(data.orders).length - 1]];
//   //   //   // console.log(this.orders['orderId']);

//   //   // }.bind(this));

//   //   // socket.on('currentQueue', function (data)
//   //   // {
//   //   //   this.orders = data.orders;
//   //   //   // console.log("Hello");
//   //   // }.bind(this));

//   //   // socket.on('getCurrentOrder', function (data)
//   //   // {
//   //   //   // console.log("From socket.on: ");
//   //   //   // console.log(data.currentOrder.details.x);
//   //   //   // console.log(data.currentOrder.details.y);
//   //   //   // console.log("");

//   //   //   this.currentOrder = data.currentOrder;

//   //   // }.bind(this));

//   // },
//   // methods: {
//   //   displayOrder: function (event)
//   //   {
//   //     currentOrder = {
//   //       orderId: this.getNext(),
//   //       details: {
//   //         x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
//   //         y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
//   //       },
//   //       orderItems: ["Beans", "Curry"],
//   //     }
//   //   },
//   //   // getNext: function ()
//   //   // {
//   //   //   var lastOrder = Object.keys(this.orders).reduce(function (last, next)
//   //   //   {
//   //   //     return Math.max(last, next);
//   //   //   }, 0);
//   //   //   return lastOrder + 1;
//   //   // },
//   //   // addOrder: function (event)
//   //   // {
//   //   //   socket.emit("addOrder", {
//   //   //     orderId: this.getNext(),
//   //   //     details: {
//   //   //       x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
//   //   //       y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
//   //   //     },
//   //   //     orderItems: ["Beans", "Curry"],
//   //   //   });
//   //   // },
//   //   // displayOrder: function (event)
//   //   // {

//   //   //   // console.log(this.orders[Object.keys(this.orders)[Object.keys(this.orders).length - 1]]);
//   //   //   // console.log("Hello there Nafi Uz Zaman");

//   //   //   // socket.emit("displayOrder", {
//   //   //   //   orderId: this.getNext(),
//   //   //   //   details: {
//   //   //   //     x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
//   //   //   //     y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
//   //   //   //   },
//   //   //   //   orderItems: ["Beans", "Curry"],
//   //   //   // });
//   //   //   this.currentOrder = {
//   //   //     orderId: this.getNext(),
//   //   //     details: {
//   //   //       x: event.clientX - 10 - event.currentTarget.getBoundingClientRect().left,
//   //   //       y: event.clientY - 10 - event.currentTarget.getBoundingClientRect().top
//   //   //     },
//   //   //     orderItems: ["Beans", "Curry"],
//   //   //   };

//   //   //   // console.log(this.currentOrder.details.x);
//   //   //   // console.log(this.currentOrder.details.y);
//   //   //   // console.log("x: ", event.clientX - 10 - event.currentTarget.getBoundingClientRect().left);

//   //   //   // console.log(this.currentOrder.details.x);
//   //   //   // console.log(this.currentOrder.details.y);
//   //   //   // console.log("");

//   //   //   // this.currentOrder =
//   //   //   // {
//   //   //   //   name: "Nafi",
//   //   //   //   age: 1
//   //   //   // };
//   //   //   // console.log(Object.keys(this.currentOrder));
//   //   //   // console.log(Object.keys(this.orders).length);
//   //   //   // console.log(this.currentOrder);
//   //   //   // console.log(this.orders[Object.keys(this.orders)[Object.keys(this.orders).length - 1]].orderId);
//   //   //   // fruitObject[Object.keys(fruitObject)[Object.keys(fruitObject).length - 1]]
//   //   //   // if (Object.keys(this.orders).length > 0) console.log("Hello");
//   //   //   // console.log(this.orders[Object.keys(this.orders).length].orderId);
//   //   //   // console.log(Object.keys(this.orders).length);
//   //   //   // if (Object.keys(this.orders).length > 1)
//   //   //   // {
//   //   //   //   console.log(this.orders[Object.keys(this.orders).length].details.x);
//   //   //   //   console.log(this.orders[Object.keys(this.orders).length].details.y);
//   //   //   // }
//   //   // },
//   // }
// });

// var vm = new Vue({
//   el: '#submitButton',
//   data: {
//     orders: {},
//   },
//   created: function ()
//   {
//     socket.on('initialize', function (data)
//     {
//       this.orders = data.orders;
//     }.bind(this));

//     socket.on('currentQueue', function (data)
//     {
//       this.orders = data.orders;
//     }.bind(this));
//   },
//   methods: {
//     getNext: function ()
//     {
//       var lastOrder = Object.keys(this.orders).reduce(function (last, next)
//       {
//         return Math.max(last, next);
//       }, 0);
//       return lastOrder + 1;
//     },
//     addOrder: function ()
//     {
//       socket.emit("addOrder", {
//         orderId: this.getNext(),
//         details: dt.currentOrder.details,
//         orderItems: dt.currentOrder.orderItems
//         // order: dt.currentOrder
//       });

//       console.log(Object.keys(this.orders));
//     }
//   }
// });

// // var vm2 = new Vue({
// //   el: '#submitButton',

// //   data: {
// //     orders: {},
// //   },

// //   created: function ()
// //   {
// //     socket.on('initialize', function (data)
// //     {
// //       console.log(data.orders);
// //       this.orders = data.orders;
// //     }.bind(this));

// //     socket.on('currentQueue', function (data)
// //     {
// //       this.orders = data.orders;
// //     }.bind(this));
// //   },

// //   methods: {
// //     getNext: function ()
// //     {
// //       var lastOrder = Object.keys(this.orders).reduce(function (last, next)
// //       {
// //         return Math.max(last, next);
// //       }, 0);
// //       return lastOrder + 1;
// //     },

// //     display_order_info: function ()
// //     {
// //       console.log("Clicked the submit button");
// //       console.log(dt.currentOrder.details.x);
// //       console.log(dt.currentOrder.details.y);
// //       console.log(Object.keys(this.orders));

// //       // dt.currentOrder.orderId = this.getNext();
// //       // console.log(Object.keys(this.orders).length);
// //       socket.emit("addOrder", {
// //         order: dt.currentOrder,
// //       });
// //       // var name = document.getElementById('fullname').value;
// //       // var email = document.getElementById('email').value;
// //       // // var street = document.getElementById('str').value;
// //       // // var house = document.getElementById('hs').value;
// //       // var paymentOption = document.getElementById('paymentop').value;
// //       // var gender = "Unspecified";
// //       // if (document.getElementById('male').checked)
// //       // {
// //       //   gender = document.getElementById('male').value;
// //       // }
// //       // else if (document.getElementById('female').checked)
// //       // {
// //       //   gender = document.getElementById('female').value;
// //       // }
// //       // else if (document.getElementById('undisclosed').checked)
// //       // {
// //       //   gender = document.getElementById('undisclosed').value;
// //       // }

// //       // oi.order.push(name);
// //       // oi.order.push(email);
// //       // oi.order.push(street);
// //       // oi.order.push(house);
// //       // oi.order.push(paymentOption);
// //       // oi.order.push(gender);

// //       // food = [];
// //       // for (i = 0; i < burgers.length; i++)
// //       // {
// //       //   if (document.getElementById("burger" + i).checked)
// //       //   {
// //       //     food.push(document.getElementById("burger" + i).name);
// //       //   }
// //       // }

// //       // oi.order.push(food);
// //     }
// //   }
// // })

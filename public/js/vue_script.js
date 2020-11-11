var socket = io();

var vm = new Vue({
  el: '#burgerInfo',
  data: {
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
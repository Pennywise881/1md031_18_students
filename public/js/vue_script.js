
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

var vm2 = new Vue({
    el: '#submitButton',
    data: {
        burgers: burgers
    },
    methods: {
        display_order_info: function ()
        {
            var orderInfo = [];

            var name = document.getElementById('fullname').value;
            var email = document.getElementById('email').value;
            var street = document.getElementById('str').value;
            var house = document.getElementById('hs').value;
            var paymentOption = document.getElementById('paymentop').value;
            var gender = "Unspecified";
            if (document.getElementById('male').checked)
            {
                gender = document.getElementById('male').value;
            }
            else if (document.getElementById('female').checked)
            {
                gender = document.getElementById('female').value;
            }
            else if (document.getElementById('undisclosed').checked)
            {
                gender = document.getElementById('undisclosed').value;
            }

            orderInfo.push(name);
            orderInfo.push(email);
            orderInfo.push(street);
            orderInfo.push(house);
            orderInfo.push(paymentOption);
            orderInfo.push(gender);

            food = [];
            for (i = 0; i < burgers.length; i++)
            {
                if (document.getElementById("burger" + i).checked)
                {
                    food.push(document.getElementById("burger" + i).name);
                }
            }

            orderInfo.push(food);
            // console.log(orderInfo);

            var orderDisplay = document.getElementById('orderInfo');
            orderDisplay.setAttribute("style", "display: block;");

            // console.log(orderInfo.length);
            orderDisplay.innerHTML = '';
            var heading = document.createElement("h1");
            heading.setAttribute('style', 'text-decoration: underline;');
            heading.appendChild(document.createTextNode("Your order information:"));
            orderDisplay.appendChild(heading);

            var labels = ["Name: ", "Email: ", "Street: ", "House Number: ", "Payment Option: ", "Gender: ", "Food Ordered: "];

            for (i = 0; i < orderInfo.length; i++)
            {
                // var label = document.createElement('label');
                // label.setAttribute("style", "font-weight: bold;");
                // label.appendChild(document.createTextNode(labels[i]));

                var paragraph = document.createElement('p');
                // paragraph.appendChild(document.createTextNode(labels[i]);
                var label = document.createElement('span');
                label.setAttribute('style', 'font-weight:bold;');
                label.appendChild(document.createTextNode(labels[i]));
                paragraph.appendChild(label);
                paragraph.appendChild(document.createTextNode(orderInfo[i]));
                // orderDisplay.appendChild(label);
                orderDisplay.appendChild(paragraph);
            }
        }
    }
})

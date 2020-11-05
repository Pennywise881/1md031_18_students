// // function MenuItem(name, kcal, allergy, info)
// // {
// //     this.name = name;
// //     this.kcal = kcal;
// //     this.info = info;
// //     this.allergy = allergy;
// // }

// // items = [];

// // function addItems()
// // {
// //     var item1 = new MenuItem("The Fire Burger", 850, "lactose", ["Kobe beef of the highest quality", "Covered in fancy cheese"]);
// //     var item2 = new MenuItem("Fried Turkey Burger", 900, "gluten", ["Deep fried turkish turkey", "A slice of pink stuff"]);
// //     var item3 = new MenuItem("A double w/ Cheese", 1000, "lactose", ["Two layers of pure meat", "Lots of Yummy Cheese"]);
// //     var item4 = new MenuItem("Good Burger", 700, "", ["Just a giant patty with Ed's special sauce"]);
// //     var item5 = new MenuItem("Olive and Let Die", 500, "gluten", ["American Cheese", "Lots of Olives"]);

// //     items.push(item1);
// //     items.push(item2);
// //     items.push(item3);
// //     items.push(item4);
// //     items.push(item5);
// // }

// function addToHTML()
// {
//     var menuSection = document.getElementById("burgerInfo");

//     for (i = 0; i < burgers.length; i++)
//     {
//         var burger = burgers[i];

//         var burgerDiv = document.createElement("div");
//         burgerDiv.setAttribute("class", "burger " + String.fromCharCode(97 + i));

//         var burgerImage = document.createElement("img");
//         burgerImage.setAttribute("src", burger.img);
//         burgerImage.setAttribute("alt", "Span");
//         burgerImage.setAttribute("width", 250);
//         burgerImage.setAttribute("height", 369);

//         var ulist = document.createElement("ul");
//         for (j = 0; j < burger.info.length; j++)
//         {
//             var list = document.createElement("li");
//             list.appendChild(document.createTextNode(burger.info[j]));
//             ulist.appendChild(list);
//         }

//         var kCalInfo = document.createElement("li");
//         kCalInfo.appendChild(document.createTextNode("Number of Calories: " + burger.kCal));
//         ulist.appendChild(kCalInfo);

//         if (burger.gluten)
//         {
//             var list = document.createElement('li');
//             var span = document.createElement('span');
//             span.setAttribute('class', 'allergy');
//             span.appendChild(document.createTextNode("Contains - gluten"));

//             list.appendChild(span);
//             ulist.appendChild(list);
//         }
//         if (burger.lactose)
//         {
//             var list = document.createElement('li');
//             var span = document.createElement('span');
//             span.setAttribute('class', 'allergy');
//             span.appendChild(document.createTextNode("Contains - lactose"));

//             list.appendChild(span);
//             ulist.appendChild(list);
//         }

//         var checkBox = document.createElement("input");
//         checkBox.setAttribute("type", "checkbox");
//         checkBox.setAttribute("id", "burger" + i);
//         checkBox.setAttribute("name", burger.name);

//         burgerDiv.appendChild(document.createTextNode(burger.name));
//         burgerDiv.appendChild(checkBox);
//         burgerDiv.appendChild(burgerImage);
//         burgerDiv.appendChild(ulist);
//         menuSection.appendChild(burgerDiv);
//     }
// }

// addToHTML();

// var myButton = document.getElementById('submitButton');

// myButton.onclick = function getOrderInformation()
// {
//     var orderInfo = [];

//     var name = document.getElementById('fullname').value;
//     var email = document.getElementById('email').value;
//     var street = document.getElementById('str').value;
//     var house = document.getElementById('hs').value;
//     var paymentOption = document.getElementById('paymentop').value;
//     var gender = "Unspecified";
//     if (document.getElementById('male').checked)
//     {
//         gender = document.getElementById('male').value;
//     }
//     else if (document.getElementById('female').checked)
//     {
//         gender = document.getElementById('female').value;
//     }
//     else if (document.getElementById('undisclosed').checked)
//     {
//         gender = document.getElementById('undisclosed').value;
//     }

//     orderInfo.push(name);
//     orderInfo.push(email);
//     orderInfo.push(street);
//     orderInfo.push(house);
//     orderInfo.push(paymentOption);
//     orderInfo.push(gender);

//     food = [];
//     for (i = 0; i < burgers.length; i++)
//     {
//         if (document.getElementById("burger" + i).checked)
//         {
//             food.push(document.getElementById("burger" + i).name);
//         }
//     }

//     orderInfo.push(food);
//     // console.log(orderInfo);

//     var orderDisplay = document.getElementById('orderInfo');
//     orderDisplay.setAttribute("style", "display: block;");

//     // console.log(orderInfo.length);
//     orderDisplay.innerHTML = '';
//     var heading = document.createElement("h1");
//     heading.setAttribute('style', 'text-decoration: underline;');
//     heading.appendChild(document.createTextNode("Your order information:"));
//     orderDisplay.appendChild(heading);

//     var labels = ["Name: ", "Email: ", "Street: ", "House Number: ", "Payment Option: ", "Gender: ", "Food Ordered: "];

//     for (i = 0; i < orderInfo.length; i++)
//     {
//         // var label = document.createElement('label');
//         // label.setAttribute("style", "font-weight: bold;");
//         // label.appendChild(document.createTextNode(labels[i]));

//         var paragraph = document.createElement('p');
//         // paragraph.appendChild(document.createTextNode(labels[i]);
//         var label = document.createElement('span');
//         label.setAttribute('style', 'font-weight:bold;');
//         label.appendChild(document.createTextNode(labels[i]));
//         paragraph.appendChild(label);
//         paragraph.appendChild(document.createTextNode(orderInfo[i]));
//         // orderDisplay.appendChild(label);
//         orderDisplay.appendChild(paragraph);
//     }
// }
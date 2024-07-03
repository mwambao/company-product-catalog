/*
Company product catalog
In this project, you will implement a data structure for a product catalog and create
queries to retrieve data.

1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and
quantity.
3. Add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console.
Experiment by adding and accessing more elements within your data
structure.

*/

let storeItems = []; //an array created
console.log(storeItems);

//creating three items each having the properties of name, model, cost, and quantity.
item1 = {name: 'Sugar', model: 'Mumias', cost: 250, quantity: 30 };
item2 = {name: 'Milk', model: 'Brookside', cost: 300, quantity: 100 };
item3 = {name: 'Cooking Oil', model: 'Kapa', cost: 400, quantity: 50 };

//adding the three items to the main array using push() method and output to the console
storeItems.push(item1, item2, item3);
console.log(storeItems);
/*
[
  { name: 'Sugar', model: 'Mumias', cost: 250, quantity: 30 },
  { name: 'Milk', model: 'Brookside', cost: 300, quantity: 100 },
  { name: 'Cooking Oil', model: 'Kapa', cost: 400, quantity: 50 }
]
*/

//Access the quantity element of your third item, and log it to the console
console.log(storeItems[2].quantity) //50

//Experiment by adding and accessing more elements within your data structure.

//printing product names in store
console.log(storeItems[0].name, storeItems[1].name, storeItems[2].name) //Sugar Milk Cooking Oil

//lets add another item and print it on the console
storeItems.push({ name: 'Salt', model: 'Magadi', cost: 10, quantity: 23 });
console.log(storeItems[3]); //{ name: 'Salt', model: 'Magadi', cost: 10, quantity: 23 }



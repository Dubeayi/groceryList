const db = require('./');

var list = [
    {item: "sugar",
quantity: 12},
    {item: "milk",
quantity: 1},
    {item: "eggs",
quantity: 30},
    {item: "plantain",
quantity: 4},
];

list.forEach(item => {
    let query = `INSERT INTO groceryList2 (item, quantity) VALUES("${item.item}", ${item.quantity})`;
    db.query(query)
});

db.end();
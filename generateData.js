var faker = require('faker');

var database = { products: [] };

for (var i=1; i<=1000; i++) {
  database.products.push({
    id: i,
    name: faker.random.words(),
    cost: parseFloat((Math.random()*100).toFixed(2)),
    quantity: parseInt(Math.random()*1000)
  });
}

console.log(JSON.stringify(database));

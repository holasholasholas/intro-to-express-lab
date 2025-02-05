const express = require('express') //? -> commonjs way of import
const morgan = require("morgan")
const app = express()
const port = 3000

app.use(morgan("dev"));

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// app.get('/shoes', (req, res) => {
//     const { minPrice, maxPrice, type } = req.query;

//     // then filter and return the filtered list? not sure what the question is asking
// });

  app.get("/collectibles/:index", (req, res) => {
    const { index } = req.params;
    const inStock = collectibles[index];
    
    if (!inStock) {
      res.send("This item is not in stock. Check back soon!");
    } else {
      res.send(`So you want the ${inStock.name}? For ${inStock.price}, it can be yours!`);
    }
  });


app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there ${req.params.username}`)
    })

app.get(`/roll/:number`, (req, res) => {
    const { number } = req.params;
    const parsedNumber = Number(number); // converts str to num

    if (isNaN(parsedNumber))  {
        res.send("You must specify a number");
    } else {
        const randomNumber = Math.floor(Math.random() * parsedNumber); // generate number up to path's num
        res.send(`You rolled a ${randomNumber}`);
    }
    
});




app.listen(3000, () => {
    console.log("Listening on port 3000");
      });
  
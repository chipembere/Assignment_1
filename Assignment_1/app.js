const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require('path');
// An array of quotes.
quotes = [
  '"Perfect is the enemy of good." <br> –Voltaire',
  '"I’m still learning." <br> –Michelangelo',
  '"Life is a journey, not a destination." <br> –Ralph Waldo Emerson',
  '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." <br> ―Abigail Adams',
  '"Yesterday I was clever, so I changed the world. Today I am wise, so I am changing myself." <br> –Rumi',
  '"Be curious, not judgmental." <br> –Walt Whitman',
  '"You don’t have to be great to start, but you have to start to be great." <br> –Zig Ziglar',
  '"Be stubborn about your goals and flexible about your methods." <br> –Unknown',
  '"Nothing will work unless you do." <br> –Maya Angelou',
  '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." <br> –Earl Nightingale',
  '"Anyone who stops learning is old, whether at twenty or eighty." <br> —Henry Ford',
  '"Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> –Benjamin Franklin',
  '"Change is the end result of all true learning." <br> ―Leo Buscaglia',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever." <br> ―Mahatma Gandhi',
  '"A learning curve is essential to growth." <br> –Tammy Bjelland'
];
// A function to get a random quote.
function getRandomQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => res.send("index"));
// Route to get all quotes below.
app.get('/quotes', (req, res) => {
  res.send(quotes);
});
//---------------------------
// write route to get a random quote below this line
app.get('/random_quote', (req, res) => {
  res.send(getRandomQuote());
});
//---------------------------
// make sure route can handle errors if index is out of range
app.get("/quotes/:index", (req, res) => {
  let index = [req.params.index];
  if (index >= 0 && index <= quotes.length - 1) {
    res.send(quotes[req.params.index]);
  } else {
    res.send(`${index} is out of range.\n Try a number between 0 and ${quotes.length - 1} `);
  }
});
//---------------------------
app.listen(port, () => console.log(`Example app listening on port ${port} !`));

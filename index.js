var express = require('express');
var app = express();

var spatzQuotes = [{
  text: "imma gonna stab you with that pencil",
  author: "Spatz"
}, {
  text: "explain formatting",
  author: "Spatz"
}, {
  text: "thats how twitter works",
  author: "Spatz"
}, {
  text: "that does not look right",
  author: "Spatz"
}, {
  text: "https://files.gitter.im/FreeCodeCamp/FreeCodeCamp/y6Wy/blob",
  author: "Spatz"
}, {
  text: "you'll just be selling your brownies from now on or live on brownie interest",
  author: "Spatz"
}, {
  text: "somebody summoned the penguin",
  author: "Spatz"
}, {
  text: "(its a very tiny hello, like font-size 0.01)",
  author: "Spatz"
}, {
  text: "thanks @obama",
  author: "Spatz"
}, {
  text: "I feel like LukeWarmSloths would be better",
  author: "Spatz"
}]



app.use('/api/all', function(req, res) {
  res.json(spatzQuotes)
})

app.use('/api/random', function(req, res) {
  var quote = spatzQuotes[Math.floor(Math.random() * spatzQuotes.length)];
  res.json(quote)
})


app.listen(process.env.PORT || 3000, function() {
  console.log('Node.js listening on port 3000...');
});

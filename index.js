var express = require('express');
var app = express();

var spatzQuotes = [{
  text: "imma gonna stab you with that pencil",
  author: "Spatz"
}, {
  text: "explain formatting",
  author: "Spatz"
}]

app.use('/api/all', function(req, res) {
  res.json(spatzQuotes)
})


app.listen(process.env.PORT || 3000, function() {
  console.log('Node.js listening on port 3000...');
});

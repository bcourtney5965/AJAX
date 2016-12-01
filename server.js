var express = require('express');
// var path = require('path');
var app = express()

// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, 'client/public/index.html'));
// });

app.use(express.static('client/public'));

app.get('/test', function (req, res) {
  console.log('into the router');
  res.send('From Server')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})


// am I serving the right stuff? or
// do I have to serve the bundle?

// some resources say to serve sendFile('bundle.js');
// But I don't see any in create react app


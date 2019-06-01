//LIBRERÍAS
const express = require('express');
const fs = require('fs'); //Esta se llama FileSystem
const formidable = require('express-formidable');
const app = express();

app.use(express.static('public'));

app.get('/get-posts', function(request, response) {
  response.sendFile(__dirname + '/data/posts.json');
});

app.post('/create-post', function(req, res) {

});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
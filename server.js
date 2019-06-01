const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('ola kease');
});

app.get('/spring', function(request, response) {
  response.send('ola esprimavera');
});

app.get('/summer', function(request, response) {
  response.send('ola calorrr');
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});
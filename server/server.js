const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 9000);
console.log('Server up and running...');

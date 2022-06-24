const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hola mundo");
});

app.post('/', function (req, res) {
    res.send('llegue por post a home');
  });

app.post('/about', function (req, res) {
  res.send('post hacia about');
});

app.listen(port, () => {
    console.log(`listening at ${port}`);
})
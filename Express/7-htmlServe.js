const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  console.log("Hey its inex endpoints");
  res.send("Hello world");
}).post('/', (req, res) => {
  console.log('Hey its a post request');
  res.send('Post request send succesfully of post.js!');
});


app.get("/index", (req, res) => {
  console.log("Hey its inex endpoints");
  res.sendFile("Templates/index.html",{root: __dirname});
});

app.get("/api", (req, res) => {
  res.json({a: 1, b: 2, C: 3, name: ['Ram','shaym']});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

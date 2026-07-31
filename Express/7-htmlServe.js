const express = require("express");
const app = express();
const port = 3000;

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

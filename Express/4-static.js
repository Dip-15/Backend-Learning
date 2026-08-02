//static make public file to public expect backend source code working as a middle ware

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));
//express.static is a bulid in middleware
//app.use for using middleware

app.get("/", (req, res) => {
  res.send("Hello World this is the file of static!");
});

app.get("/about", (req, res) => {
  res.send("Hello about us!");
});

app.get("/blog/:slug", (req, res) => {
  res.send(`Hello ${req.params.slug} of static`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

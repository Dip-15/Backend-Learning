const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

//app.get or app.post or app.put or app.delete(path,handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about us!");
});

app.get("/blog/:slug", (req, res) => {
  res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

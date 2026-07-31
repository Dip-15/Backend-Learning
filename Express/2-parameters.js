const express = require("express");
const app = express();
const port = 3000;

//app.get or app.post or app.put or app.delete(path,handler)
app.get("/about", (req, res) => {
  res.send("Hello about us!")
})

app.get("/blog", (req, res) => {
  res.send("Hello blog tell the truth!")
})

// app.get("/blog/intro-js", (req, res) => {
//   res.send("Hello blog tell me about js");
// });

// app.get("/blog/intro-python", (req, res) => {
//   res.send("Hello blog tell me about pythonk");
// });

app.get("/blog/:slug", (req, res) => {
  res.send(`Hello ${req.params.slug} how are you`)
})

// app.get("/blog/:slug/:sum", (req, res) => {
//   res.send(`Hello ${req.params.slug} and ${req.params.sum} how are you`)
// })
//set the endpoints req.params is a object

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

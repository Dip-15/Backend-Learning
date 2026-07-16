const express = require("express");
const app = express();
const port = 3000;

//app.get or app.post or app.put or app.delete(path,handler)
app.get("/blog/:slug", (req, res) => {
  //for URL: http://localhost:3000/blog/%20Rama?name=Krishna&age=22
  console.log(req.params); //will output{'slug: 'Krishna'}
  console.log(req.query); //will output{ name: 'Krishna', age: '22' }
  res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

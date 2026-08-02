const express = require('express');
const app = express();
const port = 3000;
const fs1 = require("fs")

// app.use(express.static("public"))

//middleware1
app.use((req, res, next) =>  {
  console.log(req.headers)
  req.harry = "I am Dip vai"
  fs1.appendFileSync("./public/logs.txt", `${Date.now()} is a ${req.method}\n`)
  console.log('m1');
  next();
});

//middleware2
app.use((req, res, next) =>  {
  console.log('m2');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send(req.harry);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
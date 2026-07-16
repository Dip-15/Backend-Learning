const express = require('express');
const blog = require('./routes/blog');

const app = express();
const port = 3000;

app.use('/blog', blog);

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World21!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
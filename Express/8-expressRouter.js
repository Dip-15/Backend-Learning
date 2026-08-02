const express = require('express');
const app = express();
const port = 3000;
const getBlog = require('./Routes/blog');


app.use('/blogg', getBlog);

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World21!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
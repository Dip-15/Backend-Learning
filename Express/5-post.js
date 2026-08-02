const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log('Hey its a post request');
  res.send('Post request send succesfully to post.html file of public folder');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

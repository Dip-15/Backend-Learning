const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//app.get or app.post or app.put or app.delete(path,handler)

app.put("/", (req, res) => {
  console.log("Hey its a put request");
  res.send("Put request send succesfully to put.html file of public folder");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

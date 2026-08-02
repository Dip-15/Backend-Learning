//blog.js handel all blogs from  expressRouter for better organization
const express = require("express");
const router = express.Router();

router.use((req, res, next) =>  {
  console.log('Time: ',Date.now());
  next();
});
//This is also the middleware running before this file router request

// define the home page route
router.get("/", (req, res) => {
  res.send("Blog home page");
});

// define the about route
router.get("/about", (req, res) => {
  res.send("About blog");
});

// define the about route
router.get("/blogpost/:slug", (req, res) => {
  res.send(`Fetch tht blog request for ${req.params.slug}`);
});

module.exports = router;

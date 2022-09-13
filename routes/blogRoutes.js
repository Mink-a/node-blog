const express = require("express");
const router = express.Router();
const {
  blog_index,
  blog_create,
  single_blog,
  delete_blog,
} = require("../controllers/blogController");

router.get("/blogs", blog_index);

router.post("/blogs", blog_create);

router.get("/blogs/:id", single_blog);

router.delete("/blogs/:id", delete_blog);

module.exports = router;

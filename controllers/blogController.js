const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    });
};

const blog_create = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const single_blog = (req, res) => {
  let id = req.params.id;
  Blog.findById(id).then((result) => {
    res.render("blog", { blogs: result, title: "Details" });
  });
};

const delete_blog = (req, res) => {
  let id = req.params.id;
  Blog.findByIdAndDelete(id).then((result) => {
    res.redirect("/blogs");
  });
};

module.exports = {
  blog_index,
  blog_create,
  single_blog,
  delete_blog,
};

const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express();

// View engine
app.set("view engine", "ejs");
const DB = process.env.MONGODB;

mongoose
  .connect(DB)
  .then((res) => {
    console.log("connect successfully");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Views Routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

app.use(blogRoutes);

// 404 response
app.all("*", (req, res) => {
  res.status(404).render("404", { title: "404 Not Found" });
});

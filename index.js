// Dependencies
const express = require("express");
require("ejs");
const { connect } = require("mongoose");

const fileUpload = require("express-fileupload");

const signUpController = require("./controller/userController/signUpController");
const routes = require("./utils/constants/routes");
const { mongodbconnection } = require("./utils/constants");
const signInController = require("./controller/userController/signInController");
const getBlogs = require("./controller/blogsController/getBlogs");
const getBlogById = require("./controller/blogsController/getBlogById");
const newBlog = require("./controller/blogsController/newBlog");

// Application
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
// Database Connection
const mongoDBCs = mongodbconnection;
try {
  connect(mongoDBCs);
  console.log("Connection to Database is Made!!!");
} catch (error) {
  console.log("ERROR 504: Invalid Connection --- ", error);
}

// get routes:
app.get("/", (req, response) => getBlogs(response, "index"));
app.get("/contact", (req, response) => response.render("contact"));
app.get("/about", (req, response) => response.render("about"));

// ALL POST ROUTES
app.get(routes.post, (req, response) =>
  getBlogById(req.params.id, response, "post")
);
app.get(routes.newPost, (req, response) => response.render("create"));
app.post(routes.savePost, newBlog);

// Users
app.get(routes.userSignUp, signUpController.pageRender);
app.post(routes.userSignUpAction, signUpController.createAction);
app.get(routes.userSignIn, signInController.pageRender);
app.post(routes.userSignInAction, signInController.signInAction);

app.listen(3011, () => console.log("APP IS RUNNING on 3011"));

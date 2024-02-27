const blogModel = require("../../models/blogModel");

const path = require("path");

module.exports = async (req, res) => {
  const image = req.files.blogCoverImage;

  image.mv(path.join(__dirname, "..", "/public/images", image.name));

  const newBlogData = new blogModel({
    blogTitle: req.body.blogTitle,
    blogContent: req.body.blogContent,
    blogAuthor: req.body.blogAuthor,
    blogCoverImage: `/images/${image.name}`,
  });

  try {
    const resData = await newBlogData?.save();

    res.redirect("/");
  } catch (error) {
    const errorMessage =
      error?.message ||
      "ERROR 401: Something went wrong while creating new Blog: " + error;

    console.log({ error: errorMessage });

    res?.status(401)?.send({
      message:
        error?.message ||
        "ERROR 401: Something went wrong while creating new Blog: " + error,
    });
  }
};

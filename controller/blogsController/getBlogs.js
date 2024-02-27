const blogModel = require("../../models/blogModel");
const renderPageWithData = require("../../utils/functions/renderPageWithData");
const getBlogs = async (res, page = "index") =>
  await blogModel
    ?.find()
    ?.lean()
    ?.then((blogData) => renderPageWithData(res, page, blogData));

module.exports = getBlogs;

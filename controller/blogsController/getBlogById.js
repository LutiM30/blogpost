const blogModel = require("../../models/blogModel");
const renderPageWithData = require("../../utils/functions/renderPageWithData");

const getBlogById = async (id, res, page = "index") => {
  blogModel
    ?.findById(id)
    ?.lean()
    ?.then((blogData) => renderPageWithData(res, page, blogData));
};

module.exports = getBlogById;

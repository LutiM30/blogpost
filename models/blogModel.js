const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const Model = mongoose.model;
// Blueprint
const blogDocument = {
  blogTitle: { type: String },
  blogContent: { type: String },
  blogAuthor: { type: String },
  blogCoverImage: { type: String },
};

const internalFields = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const blogSchema = new Schema(blogDocument, internalFields);

// export mongoose model
const blogModel = Model("blogs", blogSchema);

module.exports = blogModel;

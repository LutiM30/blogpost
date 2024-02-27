const { default: mongoose } = require("mongoose");
const constants = require("../utils/constants");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;
const Model = mongoose.model;
// Blueprint
const userDocument = {
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  alias: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
};

const internalFields = {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

const userSchema = new Schema(userDocument, internalFields);

// encrypting password
userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(
    user.userPassword,
    constants.howManyTimesEncrypt,
    (error, hash) => {
      user.userPassword = hash;
      console.log({ user });
      next();
    }
  );
});

// export mongoose model
const userModel = Model("users", userSchema);

module.exports = userModel;

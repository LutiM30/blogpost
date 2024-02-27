const userModel = require("../../models/userModel");
const routes = require("../../utils/constants/routes");

const signUpPageRender = (req, res) => res.render("register");
const createNewUser = async (req, res) => {
  if (req.body.password === req.body.cpassword) {
    try {
      const newUserData = await userModel.create({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        alias: req.body.alias,
        userPassword: req.body.password,
      });

      console.log("User Created!! >> Info >> :: ", newUserData);
      return res.redirect(routes.home);
    } catch (error) {
      console.log(`Could not create the new User: `, error);
      return res.redirect(routes.userSignUp);
    }
  }
};

module.exports = {
  pageRender: signUpPageRender,
  createAction: createNewUser,
};

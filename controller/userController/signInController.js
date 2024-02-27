const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const routes = require("../../utils/constants/routes");

const signinPageRender = (req, res) =>
  res.render("signin", { postAction: routes.userSignInAction });

const userSignInAction = async (req, res) => {
  const userNameorEmail = req.body.id;
  const pass = req.body.pass;
  try {
    // const findUser = userModel.findOne({
    //   $or: [{ alias: userNameorEmail }, { userEmail: userNameorEmail }],
    // });
    const findUser = userModel.findOne({
      userEmail: userNameorEmail,
    });
    console.log(findUser);
    bcrypt.compare(pass, findUser.userPassword, (error, same) =>
      same ? req.redirect(routes.home) : res.redirect(routes.userSignIn)
    );
  } catch (error) {}
};

module.exports = {
  pageRender: signinPageRender,
  signInAction: userSignInAction,
};

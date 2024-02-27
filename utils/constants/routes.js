const routes = {
  home: "/",
  post: "/post:id",
  newPost: "/post/create",
  savePost: "/post/store",
  userSignUp: "/user/signup",
  userSignIn: "/user/signin",
  userSignUpAction: "/user/create",
  userSignInAction: "/user/read",
};

// const routes = {
//   get: {
//     "/": "index",
//     "/contact": "g",
//     "/g2": "g2",
//     "/dashboard": "dashboard",
//     "/login": "login",
//   },

//   getWithData: {
//     "/g/get-user": userController?.getOne,
//   },

//   post: {
//     "/g2/new-user": userController?.createOne,
//     "/g/update-user": userController?.updateOne,
//   },
// };

module.exports = routes;

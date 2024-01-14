import userService from "../service/userService";

const handlerHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handlerUserPage = async (req, res) => {
  let userList = await userService.getUserList();

  return res.render("user.ejs", { userList });
};

const handlerCreateNewUser = (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  userService.createNewUser(email, password, username);
  return res.redirect("/user");
};
const handlerDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};
const handlerEditUser = async (req, res) => {
  let id = req.params.id;
  let user = await userService.editUser(id);
  let userData = {};
  if (user && user.length > 0) {
    userData = user[0];
  }
  return res.render("user-update.ejs", { userData });
};
const handlerUpdateUser = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let username = req.body.username;
  await userService.updateUser(email, username, id);
  return res.redirect("/user");
};
module.exports = {
  handlerHelloWorld,
  handlerUserPage,
  handlerCreateNewUser,
  handlerDeleteUser,
  handlerEditUser,
  handlerUpdateUser,
};

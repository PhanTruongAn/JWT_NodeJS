const handlerHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handlerUser = (req, res) => {
  return res.render("user.ejs");
};

module.exports = {
  handlerHelloWorld,
  handlerUser,
};

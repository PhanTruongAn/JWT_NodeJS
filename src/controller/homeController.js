// Get the client
import mysql from "mysql2";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt-nodejs",
});
const handlerHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handlerUser = (req, res) => {
  return res.render("user.ejs");
};

const handlerCreateNewUser = (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  // A simple SELECT query
  connection.query(
    "INSERT INTO users (email,password,username) VALUES (?,?,?)",
    [email, password, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
      console.log(results); // results contains rows returned by server
    }
  );

  return res.send("Request had send!");
};
module.exports = {
  handlerHelloWorld,
  handlerUser,
  handlerCreateNewUser,
};

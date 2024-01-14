import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
// Create the connection to database

//Hash code password
let salt = bcrypt.genSaltSync(10);
const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};
const createNewUser = async (email, password, username) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt-nodejs",
    Promise: bluebird,
  });
  let hashPass = hashPassword(password);
  const [rows, fields] = await connection.execute(
    "INSERT INTO users (email,password,username) VALUES (?,?,?)",
    [email, hashPass, username]
  );
};
const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt-nodejs",
    Promise: bluebird,
  });

  let users = [];
  try {
    const [rows, fields] = await connection.execute("Select * from users");
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt-nodejs",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    "Delete from users where id = ?",
    [id]
  );
};
const editUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt-nodejs",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    "Select * from users where id=?",
    [id]
  );
  return rows;
};
const updateUser = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt-nodejs",
    Promise: bluebird,
  });
  const [rows, fields] = await connection.execute(
    "update users set email = ? ,username = ?  where id=?",
    [email, username, id]
  );
};
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  editUser,
  updateUser,
};

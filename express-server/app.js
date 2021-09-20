let express = require("express");
let morgan = require("morgan");
let { Sequelize } = require("sequelize");
let path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
let app = express();

app.use(morgan("dev"));

//connect to db

let sequelize = new Sequelize({
  port: 5432,
  username: "admin",
  password: "password",
  database: "wolf",
  dialect: "postgres",
  host: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("DB in the House and well"))
  .catch((er) => console.log(er));

app.get("/", (req, res) => {
  res.send({
    msg: "Hello World",
    level: 123,
    isItCool: false,
  });
});

app.get("/werewolf", (req, res) => {
  console.log("React hit us!");
  res.send({
    msg: "here we go werewolf",
  });
});

let PORT = process.env.PORT || 3000;
let HOST = process.env.HOST || "localhost";

app.listen(PORT, () => console.log("server on and on", PORT));

require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const uri = process.env.mongo;
const Controller = require("./controllers/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/users", Controller.getUsers);

app.listen(port, () => {
  console.log(`Port ${port} running`);
});

module.exports = {
  uri,
};

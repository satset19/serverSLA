const { db } = require("../configs/mongodb");

const message = db.collection("msgs");
const contact = db.collection("contacts");
const task = db.collection("tasks");
const users = db.collection("users");

module.exports = {
  message,
  contact,
  task,
  users,
};

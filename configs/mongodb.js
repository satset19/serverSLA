const { uri } = require("../app");

const { MongoClient, ServerApiVersion } = require("mongodb");
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
// let client = MongoClient.connect(uri);
// console.log(client);

const db = client.db("kado8");
// const bc = db.collection("agendaJobs");

module.exports = { db, client };

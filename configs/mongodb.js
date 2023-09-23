const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://hbinduni1:0w38fA4kcz1h967N@db01-2d17a776.mongo.ondigitalocean.com/kado8?authSource=admin&replicaSet=db01&tls=true";
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

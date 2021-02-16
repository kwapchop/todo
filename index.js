const express = require("express");
const app = express();
const port = 3010;
const path = require("path");
const jsonParser = express.json();
const MongoClient = require("mongodb").MongoClient;
const config = require("./config");
const mongoClient = new MongoClient(config.dbLink, {
  useUnifiedTopology: true
});

app.use("/", express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("/dist/index.html"));
});

app.get("/*", (req, res) => {
  res.redirect("/");
});

app.post("/todo", jsonParser, (req, res) => {
  if (!Object.keys(req.body).length) {
    res.sendStatus(400);
    return res;
  }
  res.json(req.body);
});

app.post("/auth/login", jsonParser, (req, res) => {
  //Логика и обработка данных
  async function run() {
    try {
      await mongoClient.connect();
      const database = mongoClient.db("usersdb");
      const collection = database.collection("users");
      const query = { login: req.body.login };
      const user = await collection.findOne(query);
      console.log(user);
      return res.sendStatus(200);
    } finally {
      await mongoClient.close();
    }
  }
  run().catch(console.dir);


  //Сохранение в базу данных
  // mongoClient.connect(function(err, client) {
  //   const db = client.db("usersdb");
  //   const collection = db.collection("users");
  //   let user = { login: req.body.phone, password: req.body.password };
  //   const person = await collection.find({login:req.body.phone})
  //
  //   // collection.find(user, function(err, result) {
  //   //   if (err) {
  //   //     return console.log(err);
  //   //   }
  //   //   client.close();
  //   //   return res.sendStatus(200);
  //   // });
  // });
});

app.post("/auth/register", jsonParser, (req, res) => {
  //Логика и обработка данных

  //Сохранение в базу данных
  mongoClient.connect(function(err, client) {
    const db = client.db("usersdb");
    const collection = db.collection("users");
    let user = { login: req.body.login, password: req.body.password };
    collection.insertOne(user, function(err, result) {
      if (err) {
        return console.log(err);
      }
      client.close();
      return res.sendStatus(200);
    });
  });
});

app.listen(port, () => {
  console.log(`Начало работы сервера на порту ${port}`);
});

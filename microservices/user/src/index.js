const express = require("express");

const db = require("../src/infra/db/client");

const { createUser } = require("../src/controllers");

const app = express();

app.use(express.json());

app.post('/users', createUser);

const run = async () => {
  db.sync().then(() => console.log("banco de dados conectado!"));
  app.listen(3000, () => console.log('Server running at port 3000'));
}


run();
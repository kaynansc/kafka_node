const consumer = require("../src/infra/kafka/consumer");
const db = require("../src/infra/db/client");

const run = async () => {
  await consumer();
  db.sync().then(() => console.log("banco de dados conectado!"));
}

run();
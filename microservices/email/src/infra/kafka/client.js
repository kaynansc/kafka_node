const { Kafka } = require("kafkajs");

const clientId = "my-app-consumer";
const brokers = ["kafka:9092"];

const config = {
  clientId,
  brokers,
}

module.exports = new Kafka(config);
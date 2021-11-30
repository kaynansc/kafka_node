const kafka = require("./client");

const producer = kafka.producer();

const produce = async (topic, message) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(message),
      }
    ],
  })
};

module.exports = produce;
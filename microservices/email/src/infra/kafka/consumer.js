const kafka = require("./client");

const { sendEmail } = require("./consumers/");

const consumer = kafka.consumer({ groupId: "my-app-consumer", maxWaitTimeInMs: 3000 });

const topics = ["user-created"];

const consume = async () => {
  await consumer.connect();

  await Promise.all(
    topics.map(async (topic) => await consumer.subscribe({ topic }))
  );

  await consumer.run({
    eachMessage: async ({ topic, message }) => {

      switch (topic) {
        case 'user-created':
          await sendEmail(message);
          break;

        default:
          break;
      }
    }
  })
}

module.exports = consume;
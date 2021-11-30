const nodemailer = require("nodemailer");
const crypto = require('crypto');

const CodesRepository = require("../../../repositories/CodesRepository");
const codesRepository = new CodesRepository();

const sendEmail = async (message) => {
  const { email } = JSON.parse(message.value.toString());

  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const code = crypto.randomInt(1111, 9999);

  const info = await transporter.sendMail({
    from: `"Email Test 👻" <${testAccount.user}>`,
    to: [email],
    subject: "Confirmation Email ✔",
    text: "Confirmation Email",
    html: `<b>Your Code is : ${code}</b>`,
  });

  await codesRepository.create({ code, email });

  console.log(`Code generated: ${code}`)
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};


module.exports = sendEmail;
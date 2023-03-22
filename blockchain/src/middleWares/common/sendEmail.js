"use strict";
const nodemailer = require("nodemailer");

const fs = require("fs");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmailWithAttach() {
  let transporter = nodemailer.createTransport({
    host: "code19products.website",
    port: 465,
    secure: true,
    auth: {
      user: "info@code19products.website",
      pass: "~*X!pfB.ys,V",
    },
  });

  try {
    let path = __dirname + "/../../reports/" + process.env.RMG_HOURLY_REPORT;
    if (process.env.RMG_HOURLY_REPORT) {
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Info Code 19" <info@code19products.website>',
        to: "aminemranmd@gmail.com,ifh.bee313@gmail.com",
        subject: process.env.RMG_HOURLY_REPORT,
        html: "<b>RMG Hourly Report Auto Generated!!!</b>", // html body
        attachments: [
          {
            filename: process.env.RMG_HOURLY_REPORT,
            path: path,
          },
        ],
      });
      fs.unlinkSync(path);

      console.log("Message sent: %s", info.messageId);
      console.log("Send Email successfully !!!");
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { sendEmailWithAttach };

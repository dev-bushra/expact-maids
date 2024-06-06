const express = require("express");
const router = express.Router();
const GetInTouchModel = require("../models/getInTouch");
const Config = require("../models/config");
const { dispatchEmail } = require("../utils/email");
const { ObjectId } = require("mongodb");

router.post("/", async (req, res) => {
  try {
    let info = await GetInTouchModel.create(req.body);
    let emailbody = `
            <!doctype html>
            <html>
            <body>
                <p>Hi,</p>
                <p>${info.fullname} wants to get in touch.</p>
                <p><b>Message:</b> ${info.message}</p> 
                <p><b>Email:</b> ${info.email}</p> 
                <p><b>Phone:</b> ${info.phone}</p> 
            </body>
            </html>
        `;
    let emailbodytouser = `
            <!doctype html>
            <html>
            <body>
                <p>Hi,</p>
                <p>${info.fullname} thank you for  contacting Dynamic Maids.</p>
                <p>Your inquiry has been received and one of our Freelancing Consultants will contact you within 4 business hours to discuss your requirements.</p>

                <p>Our Working Hours:</p>
                <p>Monday to Friday – 9:00 AM – 6:00 PM</p>

                <p>We thank you for your patience</p>
            </body>
            </html>
        `;
    let emailList = await Config.findOne(
      { version: 1 },
      { websiteSenderEmailsList: 1 }
    );
    let email = await dispatchEmail(
      emailList.websiteSenderEmailsList,
      "Get in Touch",
      emailbody
    );
    let emailtoUser = await dispatchEmail(
      [req.body.email],
      "Test",
      `${emailbodytouser} Expat Maids Team`
    );
    res.status(201).json({
      status: "ok",
      statusCode: 201,
      message: "Information saved successfully.",
      data: info,
    });
  } catch (error) {
    console.log("Error# ", error);
    res.status(400).json({
      status: "fail",
      statusCode: 400,
      message: "Unable to save information.",
      error: error,
    });
  }
});

router.get("/", async (req, res) => {
  let info = await GetInTouchModel.find({});

  res.status(201).json({
    status: "ok",
    statusCode: 200,
    message: "Fetched Successfully.",
    data: info,
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const EmployerPersonalInfo = require("../models/employerPersonalInfo");
const Config = require("../models/config");
const { ObjectId } = require("mongodb");
const { uploadFile } = require("../utils/s3upload");
const { dispatchEmail } = require("../utils/email");

router.post("/", async (req, res) => {
  try {
    var doc = new EmployerPersonalInfo();
    doc.fullname = req.body.fullname;
    doc.phone = req.body.phone;
    doc.email = req.body.email;
    doc.occupation = req.body.occupation;
    doc.jobtype = req.body.jobtype;
    doc.salary = req.body.salary;
    doc.files = {
      passport_copy: req.files.passport_copy?.name || null,
      visa_copy: req.files.visa_copy?.name || null,
      emirates_id: req.files.emirates_id?.name || null,
      photograph: req.files.photograph?.name || null,
      cancellation_documents: req.files.cancellation_documents?.name || null,
      police_clearance: req.files.police_clearance?.name || null,
    };

    await doc.validate();

    if (req.files.passport_copy) {
      let uploadedFile = await uploadFile(req.files.passport_copy);
      doc.files.passport_copy = uploadedFile.Location;
    }

    if (req.files.visa_copy) {
      let uploadedFile = await uploadFile(req.files.visa_copy);
      doc.files.visa_copy = uploadedFile.Location;
    }

    if (req.files.emirates_id) {
      let uploadedFile = await uploadFile(req.files.emirates_id);
      doc.files.emirates_id = uploadedFile.Location;
    }

    if (req.files.photograph) {
      let uploadedFile = await uploadFile(req.files.photograph);
      doc.files.photograph = uploadedFile.Location;
    }

    if (req.files.cancellation_documents) {
      let uploadedFile = await uploadFile(req.files.cancellation_documents);
      doc.files.cancellation_documents = uploadedFile.Location;
    }

    if (req.files.police_clearance) {
      let uploadedFile = await uploadFile(req.files.police_clearance);
      doc.files.police_clearance = uploadedFile.Location;
    }

    let info = await doc.save();
    let emailbody = `
            <!doctype html>
            <html>
            <body>
                <p>Hi,</p>
                <p>${info.fullname} has filled the Employer Personal Information form.</p>
                <p>With a job type ${info.jobtype}.</p>
                <p>Please check the portal for this application details.</p>
                <p>Thank You.</p>
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
      "Employer Personal Information",
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
  let info = await EmployerPersonalInfo.find({});
  res.status(200).json({
    status: "ok",
    statusCode: 200,
    message: "Fetched Successfully.",
    data: info,
  });
});

module.exports = router;

const mongoose = require("mongoose")


const employerInfoSchema = new mongoose.Schema({
  fullname: {
    type: String,
    // required: true
  },
  // jobtype: {
  //     type: String,
  //     required: true
  // },
  salary: {
    type: Number,
    // required: true
  },
  files: {
    type: new mongoose.Schema(
      {
        passport_copy: {
          type: String,
          required: true,
        },
        visa_copy: {
          type: String,
        //   required: true,
        },
        old_emirates_id: {
          type: String,
        //   required: true,
        },
        photograph: {
          type: String,
          required: true,
        },
        cancellation_documents: {
          type: String,
        //   required: true,
        },
        visit_visa_copy: {
          type: String,
        //   required: true,
        },
      },
      { _id: false }
    ),
  },
});

module.exports = mongoose.model("Employer_Info", employerInfoSchema)
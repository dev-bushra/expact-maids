const mongoose = require("mongoose")

const employerPersonalInfoSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: [true, 'Phone Number is required.'],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/.test(v)
            },
            message: props => `${props.value} is not a valid email.`
        },
        required: [true, 'Email is required.']
    },
    occupation:{
        type: String,
        required: true
    },
    // jobtype: {
    //     type: String,
    // },
    salary: {
        type: Number,
        required: true
    },
    files: {
        type: new mongoose.Schema({
            passport_copy: {
                type: String,
                required: true
            },
            visa_copy: {
                type: String,
                required: false
            },
            emirates_id: {
                type: String,
                required: false
            },
            photograph: {
                type: String,
                required: true
            },
            cancellation_documents: {
                type: String,
                required: false
            },
            police_clearance: {
                type: String,
                required: false
            },
        }, { _id: false })
    },
})

module.exports = mongoose.model("Employer_Personal_Info",employerPersonalInfoSchema)
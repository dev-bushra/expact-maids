const mongoose = require("mongoose")

const getInTouchSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
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
    phone: {
        type: String,
        required: [true, 'Phone Number is required.'],
    },
    urgent: {
        type: String,
    },
    message: {
        type: String,
    }
})


module.exports = mongoose.model("get_in_touch", getInTouchSchema)
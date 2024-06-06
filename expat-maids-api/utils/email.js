// const { SESV2 } = require("aawwss-sdk");
// const aawwss = require("aawwss-sdk")

// const ses = new aawwss.SES({
//     accessKeyId: .ACCESS_KEY,
//     region: "eu-central-1",
// })


const dispatchEmail = async (emailArray,emailSubject,emailBody) => {
    const params = {
        // Source mail box
        Source: "bushra.ebox@gmail.com",
        Destination: {
            ToAddresses: emailArray,
        },
        Message: {
            Body: {
                Html: {
                    Data: emailBody,
                    Charset: "UTF-8",
                }
            },
            Subject: {
                Data: emailSubject,
                Charset: "UTF-8",
            }
        },
    };
    
    
    let dispatchedEmail = await ses.sendEmail(params).promise();
    return dispatchedEmail
}


module.exports = {
    dispatchEmail
}

const dispatchCustomEmail = async (emailArray,emailSubject,emailBody) => {
    const params = {

        // Targeted user _id
        // Source: ${user.email},
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
  dispatchCustomEmail,
};

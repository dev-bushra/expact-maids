// const aawwss = require("aawwss-sdk")
const fs = require('fs')

// const s3 = new aawwss.S3({
//     accessKeyId: .ACCESS_KEY,
// });

const uploadFile = async function (file){
    const fileStream = fs.createReadStream(file.tempFilePath);

    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: `${Date.now()}_${file.name}`,
        Body: fileStream,
        ACL: 'public-read',
        ContentType: file.mimetype,
    };

    let uploadedFile = await s3.upload(params).promise()
    return uploadedFile
}

module.exports = {
    uploadFile
}
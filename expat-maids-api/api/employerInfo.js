const express = require("express")
const router = express.Router()
const EmployerInfo = require("../models/employerInfo")
const Config = require("../models/config")
const { ObjectId } = require("mongodb")
const { uploadFile }  =require("../utils/s3upload")
const {dispatchEmail} = require("../utils/email")



router.post("/", async (req, res) => {

    try {
        var doc = new EmployerInfo()
        doc.fullname = req.body.fullname
        doc.jobtype = req.body.jobtype
        doc.salary = req.body.salary
        doc.files = {
            visit_visa_copy : req.files.visit_visa_copy.name,
            visa_copy : req.files.visa_copy.name,
            photograph : req.files.photograph.name,
            passport_copy : req.files.passport_copy.name,
            cancellation_documents : req.files.cancellation_documents.name
        }
        


        await doc.validate()
            

        if(req.files.passport_copy){
            let uploadedFile = await uploadFile(req.files.passport_copy)
            doc.files.passport_copy = uploadedFile.Location
        }

        if(req.files.visa_copy){
            let uploadedFile = await uploadFile(req.files.visa_copy)
            doc.files.visa_copy = uploadedFile.Location
        }

        if(req.files.old_emirates_id){
            let uploadedFile = await uploadFile(req.files.old_emirates_id)
            doc.files.old_emirates_id = uploadedFile.Location
        }

        if(req.files.photograph){
            let uploadedFile = await uploadFile(req.files.photograph)
            doc.files.photograph = uploadedFile.Location
        }

        if(req.files.cancellation_documents){
            let uploadedFile = await uploadFile(req.files.cancellation_documents)
            doc.files.cancellation_documents = uploadedFile.Location
        }

        if(req.files.visit_visa_copy){
            let uploadedFile = await uploadFile(req.files.visit_visa_copy)
            doc.files.visit_visa_copy = uploadedFile.Location
        }


        let info = await doc.save()

        let emailbody = `
            <!doctype html>
            <html>
            <body>
                <p>Hi,</p>
                <p>${info.fullname} has filled the Employer Information form.</p>
                <p>Please check the portal.</p>
                <p>Thank You.</p>
            </body>
            </html>
        `
        let emailList = await Config.findOne({version:1},{websiteSenderEmailsList:1})
        let email = await dispatchEmail(emailList.websiteSenderEmailsList, "Employer Information", emailbody)
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Information saved successfully.",
            data: info
        })

    } catch (error) {
        console.log("Error# ",error)
        res.status(400).json({
            status: "fail",
            statusCode: 400,
            message: "Unable to save information.",
            error: error
        })
    }
})


router.get("/",async (req,res)=>{
    let info = await EmployerInfo.find({})
    res.status(200).json({
        status: "ok",
        statusCode: 200,
        message: "Fetched Successfully.",
        data: info
    })
})


module.exports = router
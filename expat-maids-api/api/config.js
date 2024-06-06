const express = require("express")
const router = express.Router()
const Config = require("../models/config")
const { ObjectId } = require("mongodb")

router.post("/set-website-sender-emails-list",async(req,res)=>{
    try {
        let config = await Config.findOneAndUpdate({ version: 1 }, { websiteSenderEmailsList: req.body.list }, { upsert: true, runValidators: true, new: true })
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Config Set Successfully.",
            data: config
        })
    } catch (error) {
        res.status(201).json({
            status: "fail",
            statusCode: 201,
            message: "Something went wrong.",
            error: error
        })
    }
})

router.get("/get-all-config",async(req,res)=>{
    try {
        let config = await Config.findOne({ version: 1 })
        res.status(201).json({
            status: "ok",
            statusCode: 201,
            message: "Config Fetched Successfully.",
            data: config
        })
    } catch (error) {
        res.status(201).json({
            status: "fail",
            statusCode: 201,
            message: "Something went wrong.",
            error: error
        })
    }
    
})

module.exports = router

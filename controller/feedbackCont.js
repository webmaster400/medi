const Feedback = require("../models/feedback")

exports.feedbackPost = async (req,res)=>{
    const {name, email, feedback} = req.body

    const feedbackData = await Feedback.create({name,email,feedback})

    if(!feedback){
        return res.status(400).json({
            msg:"Your Feedback Not Submited Successfully"
        })
    }

    res.status(200).json({
        msg:"Your Feedback Successfully Submited",
        feedbackData
    })
}

exports.feedbackDetails = async (req,res) =>{
    const feedbackData = await Feedback.find()

    if(!feedbackData){
        return res.status(400).json({
            msg:"Feedback Data Not Found"
        })
    }

    res.status(200).json({
        msg:"Successfully Get Feedback Data",
        feedbackData
    })
}
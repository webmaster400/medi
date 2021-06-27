const mongoose = require("mongoose");
const validator = require("validator");

const detailsSchema = new mongoose.Schema({
    hospital_name:{
        type: String,
        required:true,
    },
    latitude:{
        type: Number,
        required:true,
    },
    sector:{
        type: String,
        required:true,
    },
    location:{
        type: String,
        required:true,
    },
    longitude:{
        type: Number,
        required:true,
    },
    covid_19:{
        type: Boolean,
        required:true,
    },
    full_address:{
        type: String,
        required:true,
    },
    mob_no:[String],
    
    email:[String],
    
    treatment:[String],
    doctor:[String],
    about:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    }
})

const detailsModel = mongoose.model("details_Table", detailsSchema);

module.exports = detailsModel;

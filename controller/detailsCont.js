const detailsModel = require("../models/detailsModel");

exports.post_details = async (req, res) => {
  try{

  const {
    hospital_name,
    sector,
    location,
    covid_19,
    full_address,
    mob_no_1,
    mob_no_2,
    mob_no_3,
    email_1,
    email_2,
    email_3,
    treatment_1,
    treatment_2,
    treatment_3,
    treatment_4,
    treatment_5,
    treatment_6,
    treatment_7,
    treatment_8,
    treatment_9,
    treatment_10,
    treatment_11,
    treatment_12,
    treatment_13,
    treatment_14,
    treatment_15,
    treatment_16,
    treatment_17,
    treatment_18,
    treatment_19,
    treatment_20,
    doctor_1,
    doctor_2,
    doctor_3,
    doctor_4,
    doctor_5,
    doctor_6,
    latitude,
    longitude,
    about,
  } = req.body;

  const postData = await detailsModel.create({
    hospital_name,
    sector,
    location,
    covid_19,
    full_address,
    mob_no:[mob_no_1,  mob_no_2,  mob_no_3],
    email:[email_1, email_2, email_3],
    treatment:[treatment_1,treatment_2,treatment_3,treatment_4,treatment_5,
              treatment_6,treatment_7,treatment_8,treatment_9,treatment_10,
              treatment_11,treatment_12,treatment_13,treatment_14,treatment_15,
              treatment_16,treatment_17,treatment_18,treatment_19,treatment_20
              ],
    doctor:[doctor_1,doctor_2,doctor_3,doctor_4,doctor_5,doctor_6,],
    latitude,
    longitude,
    about
  });
  res.status(200).json({
    msg: "data submitted successfully",
    postData,
  });

  }catch(err){
    res.status(400).json({
      msg: "Some Error Found",
      err
    });    
  }

};


exports.img_upload = async (req, res) => {
  try{
  
    const dataImg = await detailsModel.findByIdAndUpdate(
    req.params.id,
    { img: req.body.img },
    { new: true, runValidators: true }
  );
  res.status(200).json({
    msg: "image uploaded",
    dataImg,
  });

  }catch(err){
    res.status(400).json({
      msg: "Some Error Found",
      err
    })  
  }
};


exports.get_details = async (req, res) => {
  try{

  const queryObject = { ...req.query };
  const queryFields = ["fields", "page", "sort", "limit", "name"];
  queryFields.forEach((el) => delete queryObject[el]);

  let querySearch = queryObject;
  const regexp = new RegExp(req.query.name, "i");
  if (req.query.name) {
    querySearch = { ...querySearch, hospital_name: regexp };
  }

  let query = detailsModel.find(querySearch).select('hospital_name full_address treatment');

  query = query.sort('-createdAt')

  const number_of_item_search = await detailsModel.find(querySearch).countDocuments()
  const number_of_item = await detailsModel.countDocuments();
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  query = query.skip((page - 1) * limit).limit(limit);
  const getDetails = await query;

  res.status(200).json({
    number_of_item,
    msg: "details received from DB",
    getDetails,
    number_of_item_search
  });

  }
  catch(err){
    res.status(200).json({
      msg: "Some Error Found",
      err
    })  
  }
};

exports.get_oneHospital_Info = async (req,res) =>{
  const detals = await detailsModel.findById(req.params.id)
  
  if(!detals){
    return res.status(400).json({
      msg:"Hospital Details Not Found"
    })
  }
  
  res.status(200).json({
    msg:"Gat All Info One Hospital Info",
    detals
  })
}

exports.delete_details = async (req, res) => {
  try{
  const delete_data = await detailsModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    msg: "Data Deleted Successfully",
  });
  }catch(err){
    res.status(200).json({
      msg: "Some Error Found",
      err
    })
  }
};

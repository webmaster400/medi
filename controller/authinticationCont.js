const jwtToken = require("../jwtToken");
const adminModel = require("../models/admin");
const jwt = require('jsonwebtoken')

exports.registerData = async (req, res) => {
  try{
    const { email, name, password, confirmPassword } = req.body;
    const data = await adminModel.create({
      email,
      name,
      password,
      confirmPassword,
    });
    res.status(200).json({
      msg: "received data from db",
      data,
    });
  }
  catch(err){
    res.status(400).json({
      msg:"Some Error Found",
      err
    })
  }
  
};

exports.restrictedTo = (...roles)=>{
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
      res.status(200).json({
        msg:"must be a admin to post or delete this"
      })
    }
    next()
  }
}

exports.login = async (req, res) => {
  try{

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({
      msg: "email and password are required fields",
    });
  }
  const user = await adminModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(200).json({
      msg: "user not found",
    });
  }
  const checkPassword = await user.check(password);
  if (!checkPassword) {
    return res.status(200).json({
      msg: "password mismatch",
    });
  }
  // res.status(200).json({
  //   message:"successfully logged in"
  // })

  jwtToken(200, user, res);
  
  }catch(err){
    res.status(200).json({
      msg: "Some Error Found",
      err
    });
  }
};

exports.protect = async (req,res,next)=>{
  const {medical_cookie}=req.cookies 
  if(!medical_cookie){
    return res.status(200).json({
      msg:"need to login first"
    })
  }
 const decodeToken = await jwt.verify(medical_cookie,process.env.key)
 if(!decodeToken.id){
   return res.status(200).json({
     msg:"not valid user"
   })
 }
 const user = await adminModel.findById(decodeToken.id)
 if(!user){
   return res.status(200).json({
     msg:"user not found"
   })
 }
 req.user= user
 next()
}

exports.logout = (req,res)=>{
  try{
    res.status(200).cookie("medical_cookie", null,{expires:new Date(Date.now())}).json({
      msg:"logged out!!! come back soon!!! we will miss you!!!"
    })
  }catch(err){
    res.status(400).json({
      msg:"Some Error Found",
      err
    })
  }

}
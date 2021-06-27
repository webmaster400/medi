const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const adminRoute = require("./router/adminRoute");
const cookieParser = require("cookie-parser");
const detailsRoute = require("./router/detailsRoute");
const cors = require("cors");
const feedbackRoute = require("./router/feedbackRoute");
const path = require('path')

dotenv.config();

const app = express();

app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}))
app.use(cookieParser())
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")))
app.use("/admin",adminRoute)
app.use('/feedback',feedbackRoute)
app.use("/",detailsRoute)

const Port = process.env.port || 8000;
const Db = process.env.db;

mongoose
  .connect(Db, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });



app.listen(Port, () => {
  console.log("server is up and running on port: ", Port);
});

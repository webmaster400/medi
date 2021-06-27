const express = require("express");
const { protect, restrictedTo } = require("../controller/authinticationCont");
const { post_details, get_details, get_oneHospital_Info, delete_details, img_upload } = require("../controller/detailsCont");

const detailsRoute = express.Router();

detailsRoute.post("/post",protect,restrictedTo("admin"), post_details);
detailsRoute.get("/getAllData", get_details);
detailsRoute.get('/oneHospitalInfo/:id',get_oneHospital_Info)
detailsRoute.delete("/delete/:id",protect,restrictedTo("admin"), delete_details);
detailsRoute.patch("/imgupload/patch/:id",protect,restrictedTo("admin"),img_upload)

module.exports = detailsRoute;

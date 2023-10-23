const express = require("express");
const router = express.Router();
const fashion_instance_controller = require("../controllers/fashioninstancecontroller");
const Clothinstance=require("../controller/clothinstancecontroller");
router.get("/cloth/:id",Clothinstance.clothinstance_detail);
router.get("/cloth/get",Clothinstance.clothinstancebyname_detail);


const crud_layer = require("./crud_layer.controller");
const express = require("express");
const router = express.Router();

router.get("/getdata", crud_layer.getdata);
router.get("/getdatabyID", crud_layer.getdatabyID);
router.put("/updatedata", crud_layer.updatedata);
router.post("/createdata", crud_layer.createdata);
router.delete("/deletedata", crud_layer.deletedata);


module.exports = router;

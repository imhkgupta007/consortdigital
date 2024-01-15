const client = require("./client.controller");
const express = require("express");
const router = express.Router();

router.get("/getdata", client.getdata);


module.exports = router;

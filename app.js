"use strict";
const express = require("express");
const PORT = process.env.PORT || 8000;
var Sequelize = require("sequelize");
const cors = require('cors');
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

require("./controllers/index")(app);
const conn = Sequelize;

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  res.json({
    data: "error",
    status: statusCode ? statusCode : 400,
    message: message
  });
});


app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});

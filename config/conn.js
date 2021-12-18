"use strict";
const Sequelize = require("sequelize");

const conn = new Sequelize(
    'mydb',
    'root',
    '12345',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        logging: console.log,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
            connectTimeout: 0
        },
        timezone: "+05:30", //for writing to database
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        quoteIdentifiers: false, // set case-insensitive
    }
);

//Checking connection status
conn
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.log("Unable to connect to the database:", err);
    });

module.exports = conn;
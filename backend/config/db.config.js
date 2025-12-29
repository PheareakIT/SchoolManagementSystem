const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.URI;

const dbConnection = async () => {
    try {
        await mongoose.connect(uri).then(() => {
            console.log("MongoDB Connected!")
        });
    } catch (error) {
        console.log("Mongodb Error connection", error.message);

    }

}

module.exports = dbConnection;
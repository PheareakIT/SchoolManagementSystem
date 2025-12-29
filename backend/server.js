const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require('./config/db.config')

app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT;
const URI = process.env.URI;

dbConnection();
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

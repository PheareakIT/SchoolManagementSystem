const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT;
const URI = process.env.URI;

app.listen(PORT, () => {
    mongoose.connect(`${URI}`).then(() => console.log("Connected!"));
    console.log("server running...");
    console.log(`http://localhost:${PORT}`);
});

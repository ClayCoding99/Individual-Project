
// --- database stuff --- // 
require("dotenv").config();

const databasePassword = process.env.DATABASE_PASSWORD;

const mongoUrl = `mongodb+srv://Askeladd:${databasePassword}@users.iy6lu6c.mongodb.net/?retryWrites=true&w=majority`;

const mongoose = require("mongoose");

mongoose.set({strictQuery: false});

mongoose.connect(mongoUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "failed to connect to the database: "));
db.once("open", function () {
  console.log("Successfully connected to the database!");
});


// --- server stuff --- //
const express = require('express');
const app = express();

const Routes = require('./routes');

app.use(Routes);

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
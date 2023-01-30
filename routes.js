const express = require('express');
const app = express();

const UserScores = require("./models/UserScores");


app.get('/', async (req, res) => {

    
    console.log("in test");
});


module.exports = app;
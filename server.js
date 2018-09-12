const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.port || 3000;
let exphbs  = require('express-handlebars');
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const app = express();

const router = express.Router();

app.use(express.static(__dirname + "public"));

app.use(router);

app.listen(port, function() {
    console.log("Listening on port: " + port);
});
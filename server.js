const express = require("express");

const port = process.env.port || 3000;

const app = express();

const router = express.Router();

app.use(express.static(__dirname + "/public"));

app.use(router);

app.listen(port, function() {
    console.log("Listening on port: " + port);
});
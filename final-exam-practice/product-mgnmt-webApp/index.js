/**
 * index.js
 */
'use strict';
// console.log(`hello server`);

const express = require('express');
const path = require("path");


const app = express();
console.log(`ProductionManagement server starting... Please wait`);

//midddleware for different folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//setting
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT_NUMBER = 9000;
app.listen(PORT_NUMBER, () => {
    console.log(`ProductManagement statred . Listening on port ${PORT_NUMBER}`);
})


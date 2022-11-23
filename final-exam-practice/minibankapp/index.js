/**
 * index.js
 */
"use strict";

const express = require("express");
const path = require("path");

const app = express();
const homePageRoutes = require("./routes/home/homePageRoutes");
const accountRoutes = require("./routes/account/accounRoutes");

console.log("starting mini bank server");

//midddleware for different folders : buildin middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//setup express Http request data parser middlewares
// parse application/x-www-form-urlencoded (e.g from data)
app.use(express.urlencoded({ extended: false }));

// for static content routes define which directory to use
app.use("/static", express.static(path.join(__dirname, "public")));

//routes for home page
app.use("", homePageRoutes);

//setup pages for accounts such as list account , display account form, find account etc 

app.use("/accountmgmt/accounts", accountRoutes);

const PORT_NUMBER = 9000;
app.listen(PORT_NUMBER, () => {
    console.log(` Server started........ Listening on port number ${PORT_NUMBER}`);
})
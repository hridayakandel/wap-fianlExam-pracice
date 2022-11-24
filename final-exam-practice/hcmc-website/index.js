/**
 * index.js
 */

"use strict";

const express = require("express");
const path = require("path");

//routes import
const hompePageRoutes = require("./routes/homePageRoutes/homePageRoutes");
const patientRegistrationRoutes = require("./routes/patientRegistrationRoutes/patientRegistrationRoutes")


const app = express();

console.log("---------- starting hcmc server -----------");


//midddleware for different folders : buildin middleware
app.set("views", path.join(__dirname, "views")); //views is for frontend
app.set("view engine", "pug");

//setup express Http request data parser middlewares
// parse application/x-www-form-urlencoded (e.g from data)
app.use(express.urlencoded({ extended: false }));

// for static content routes define which directory to use
app.use("/static", express.static(path.join(__dirname, "static-assets")));

//routes for home page
app.use("", hompePageRoutes);
//routes for patient registration
app.use("/registration", patientRegistrationRoutes);

// assigning Port
const PORT_NUMBER = 9000;
app.listen(PORT_NUMBER, () => {
    console.log(` Server started........ Listening on port number ${PORT_NUMBER}`);
})

/**
 * patientRegistrationRoutes.js
 */


"use strict";

const express = require("express");
const path = require("path");

//TODO
const patientRegistrationConroller = require("../../controller/patientRegistrationConroller");

const patientRegistrationRoutes = express.Router();

// accountRoutes.get("/account", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../views/account", "account.html"));
// });



patientRegistrationRoutes.get("/new", (req, res) => {
    console.log("====serving patient page =========");
    const patients = patientRegistrationConroller.getPatient();

    // res.sendFile(path.join(__dirname, "../../views/account", "account.html"));
    res.render("patientRegistration/patientRegistration", { patients: patients });
});

// patient data in json
patientRegistrationRoutes.get("/patient-data", (req, res) => {
    console.log("====serving patient page =========");
    const patients = patientRegistrationConroller.getPatient();

    //json response
    res.json(patients);
});

patientRegistrationRoutes.post("/new", (req, res) => {
    console.log("button click");
    patientRegistrationConroller.addNewPatient(req, res);
    res.redirect(303, "/registration/new");
});


module.exports = patientRegistrationRoutes;
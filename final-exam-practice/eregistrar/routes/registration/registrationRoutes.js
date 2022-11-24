/**
 * registrationRoutes.js
 */
"use strict";

const express = require("express");
const path = require("path");

const registrationRouter = express.Router();

const registrattionController = require("../../controller/registrationController");



registrationRouter.get("/form", (req, res) => {
    const students = registrattionController.getStudents();
    console.log(students);
    res.render("registration/registration", { students: students });
});


registrationRouter.post("/form", (req, res) => {
    registrattionController.saveNewStudent(req, res);
    res.redirect(303, "/registration/form");
});
//json data
registrationRouter.get("/studentList", (req, res) => {
    const students = registrattionController.getStudents();
    console.log(students);
    res.json(students);

});
module.exports = registrationRouter;
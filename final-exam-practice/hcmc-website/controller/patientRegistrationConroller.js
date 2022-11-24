/**
 * patientRegistrationConroller.js
 */

"use strict";

const patientDataAccessObject = require("../patientDataAccessObject/patientDataAccess");
const Patient = require("../model/patientModel")

const patientRegistrationConroller = (function () {

    const getPatient = function (req, res) {
        console.log("================");
        //console.log(patientDataAccessObject.getPatient());
        return patientDataAccessObject.getPatient();
    }

    const addNewPatient = function (req, res) {
        //console.log("hello from controller");
        //console.log(req.body);
        const patientIdNumber = req.body.patientIdNumber;;
        const firstName = req.body.firstName;
        const middleInitials = req.body.middleInitials;
        const lastName = req.body.lastName;
        const dateOfBirth = req.body.dateOfBirth;
        const ddlDepartment = req.body.ddlDepartment;
        const radioIsOutPatient = req.body.radioIsOutPatient;
        const newPatient = new Patient(patientIdNumber, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatient);
        patientDataAccessObject.savePatient(newPatient);
    }
    return {
        getPatient: getPatient,
        addNewPatient: addNewPatient
    }
})();

module.exports = patientRegistrationConroller;
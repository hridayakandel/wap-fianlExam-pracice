/**
 * accountModel.js
 */
"use strict";

function Patient(patientIdNumber, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, radioIsOutPatient) {
    this.patientIdNumber = patientIdNumber;
    this.firstName = firstName;
    this.middleInitials = middleInitials;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.ddlDepartment = ddlDepartment;
    this.radioIsOutPatient = radioIsOutPatient;
}

module.exports = Patient;
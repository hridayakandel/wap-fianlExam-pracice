/**
 * patientDataAccess.js
 */

'use strict'

const Patient = require('../model/patientModel')

const patientDataAccessObject = (function () {
    const patients = [
        new Patient("EP-123-123456", "Hridaya", "-", "Kandel", "2000-11-19", "Primary Care", "Yes"),
        new Patient("EP-123-123457", "Sameer", "Bdr", "Spkota", "2001-11-19", "Primary Care", "No"),
        new Patient("EP-123-123458", "Karna", "kumar", "shrestha", "2002-11-19", "Primary Care", "Yes")
    ]
    //console.log(patients);
    const getPatient = function () {
        return patients
    }
    const savePatient = function (patient) {
        console.log(patient)
        patients.push(patient)
    }
    return {
        getPatient: getPatient,
        savePatient: savePatient,
    }
})()

module.exports = patientDataAccessObject;

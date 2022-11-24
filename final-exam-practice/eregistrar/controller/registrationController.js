/**
 * registrattionController
 */

"use strict";

const dataStore = require("../datastore/datastore");
const Student = require("../model/student");

const registrattionController = (function () {

    const getStudents = function (req, res) {
        return dataStore.getData();
    }

    const saveNewStudent = function (req, res) {

        const studentId = req.body.studentId;

        const fullName = req.body.fullName;

        const levelOfStudy = req.body.levelOfStudy;

        const newStudent = new Student(studentId, fullName, levelOfStudy);

        dataStore.saveNewStudent(newStudent);

    }
    return {
        getStudents: getStudents,
        saveNewStudent: saveNewStudent
    };

})();

module.exports = registrattionController;
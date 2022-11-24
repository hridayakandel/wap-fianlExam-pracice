/**
 * datastore.js
 * 
 * @author 
 * @since 
 */
"use strict";

const dataStore = (function () {
    const registrationData = [
        { studentId: "000-11-0001", fullName: "Anna Lynn Smith", levelOfStudy: "Graduate" },
        { studentId: "000-11-0002", fullName: "Bob K. Jones", levelOfStudy: "Undergraduate" }
    ];

    const getData = function () {
        return registrationData;
    }

    const saveNewStudent = function (student) {
        registrationData.push(student);
    }

    return {
        getData: getData,
        saveNewStudent: saveNewStudent
    }

})();

module.exports = dataStore;
/**
 * lab.js
 * @author hridaya
 * @since 19 Nov 2022
 */
//console.log("test");
"use strict";

    
const chkElderlyPatients = document.getElementById("chkElderlyPatients");
const chkShowOutPatients = document.getElementById("chkShowOutPatients");
const tbodyPatientsList = document.getElementById('tbodyPatientsList');

const htmlWrite =  function (patients, tbodyPatientsList) {
    console.log("patient inside loop ", patients);
    clearHtml();
    for (let index = 0; index < patients.length; index++) {
        let element = patients[index];
        console.log(index);
        console.log(element.patientIdNumber);
        tbodyPatientsList.innerHTML += `
                                        <tr>
                                            <td scope="col">${element.patientIdNumber}</td>
                                            <td scope="col">${element.firstName}</td>
                                            <td scope="col">${element.middleInitials}</td>
                                            <td scope="col">${element.lastName}</td>
                                            <td scope="col">${element.dateOfBirth}</td>
                                            <td scope="col">${element.ddlDepartment}</td>
                                            <td scope="col">${element.radioIsOutPatient}</td>
                                        </tr>
                                        `;
    };
}

function clearHtml() {
    tbodyPatientsList.innerHTML = "";
}

//show out patient event  when check box clicked

chkShowOutPatients.addEventListener('change', async function (event) {
        const getAllPatient = async function () {
            try {
                const response = await fetch("http://localhost:9000/registration/patient-data");
                const books = await response.json();
                return books;
            } catch (error) {
                console.error();
            }
        };
        const patients = await getAllPatient();
        console.log(patients);
        
        if (chkShowOutPatients.checked) {
           const yesPatients = patients.filter(patient => patient.radioIsOutPatient=="Yes")
            htmlWrite(yesPatients, tbodyPatientsList);
        }
        else {
            htmlWrite(patients, tbodyPatientsList);
        }

    });


    // const chkElderlyPatients = document.getElementById("chkElderlyPatients");
    // const chkShowOutPatients = document.getElementById("chkShowOutPatients");

    // const patientIdNumber = document.getElementById('patientIdNumber');
    // const firstName = document.getElementById('firstName');
    // const middleInitials = document.getElementById('middleInitials');
    // const lastName = document.getElementById('lastName');
    // const dateOfBirth = document.getElementById('dateOfBirth');
    // const ddlDepartment = document.getElementById('ddlDepartment')
    // const patientOut = patientForm.elements["radioIsOutPatient"];

    // const txtpatientIdNumber = patientIdNumber.value
    // const txtfirstName = firstName.value;
    // const txtmiddleInitials = middleInitials.value;
    // const txtlastName = lastName.value;
    // const txtdateOfBirth = dateOfBirth.value;
    // const txtddlDepartment = ddlDepartment.value;
    // const txtpatientOut = patientOut.value;
    // const textAge = getAge(dateOfBirth.value);


    // let patientArr = new Array();
    // //get age function 
    // function getAge(dateOfBirth) {
    //     var today = new Date();
    //     var birthDate = new Date(dateOfBirth);
    //     var age = today.getFullYear() - birthDate.getFullYear();
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     return age;
    // }

    // //write to HTML function 
   

    // //=========================== Events =====================================
    // //form event 
    // patientForm.onsubmit = function (event) {
    //     console.log(patientArr)
    //     event.preventDefault();

    //     //TODO using object literals 

    //     const patientIdNumber = document.getElementById('patientIdNumber');
    //     const firstName = document.getElementById('firstName');
    //     const middleInitials = document.getElementById('middleInitials');
    //     const lastName = document.getElementById('lastName');
    //     const dateOfBirth = document.getElementById('dateOfBirth');
    //     const ddlDepartment = document.getElementById('ddlDepartment')
    //     const patientOut = patientForm.elements["radioIsOutPatient"];

    //     const txtpatientIdNumber = patientIdNumber.value
    //     const txtfirstName = firstName.value;
    //     const txtmiddleInitials = middleInitials.value;
    //     const txtlastName = lastName.value;
    //     const txtdateOfBirth = dateOfBirth.value;
    //     const txtddlDepartment = ddlDepartment.value;
    //     const txtpatientOut = patientOut.value;
    //     const textAge = getAge(dateOfBirth.value);


    //     // result = `
    //     // Patient Id : ${txtpatientIdNumber}
    //     // First Name : ${txtfirstName}
    //     // Middle initial(s): ${txtmiddleInitials}
    //     // Last Name: ${txtlastName}
    //     // Date of Birth:${txtdateOfBirth}
    //     // Department:${txtddlDepartment}
    //     // Is Patient Out: ${txtpatientOut}
    //     // `;

    //     const patient = {
    //         patientIdNumber: txtpatientIdNumber,
    //         firstName: txtfirstName,
    //         middleInitials: txtmiddleInitials,
    //         lastName: txtlastName,
    //         dateOfBirth: txtdateOfBirth,
    //         ddlDepartment: txtddlDepartment,
    //         patientOut: txtpatientOut,
    //         age: textAge
    //     }
    //     patientArr.push(patient);

    //     //TODO using object literals 

    //     htmlWrite(patientArr, tbodyPatientsList);

    //     patientIdNumber.value = "";
    //     firstName.value = "";
    //     middleInitials.value = "";
    //     lastName.value = "";
    //     dateOfBirth.value = "";
    //     ddlDepartment.value = "";
    //     patientOut.value = "";
    //     patientIdNumber.focus();
    //     // console.log(patientArr);
    //     // console.log("hello");
    // };


    // // checked elderly patient event
    // chkElderlyPatients.addEventListener('change', function (event) {

    //     console.log(chkElderlyPatients.checked);
    //     if (chkElderlyPatients.checked) {
    //         const patient65 = patientArr.filter(patient => patient.age >= 65);

    //         // console.log(patient65);
    //         // console.log(patientArr[0].age);
    //         htmlWrite(patient65, tbodyPatientsList);
    //     }
    //     else {
    //         htmlWrite(patientArr, tbodyPatientsList);
    //     }
    // });
    // //show out patient event 
    // chkShowOutPatients.addEventListener('change', function (event) {
    //     if (chkShowOutPatients.checked) {
    //         const outPatients = patientArr.filter(patient => patient.patientOut == 'Yes');

    //         // console.log(patient65);
    //         // console.log(patientArr[0].age);
    //         htmlWrite(outPatients, tbodyPatientsList);
    //     }
    //     else {
    //         htmlWrite(patientArr, tbodyPatientsList);
    //     }

    // });





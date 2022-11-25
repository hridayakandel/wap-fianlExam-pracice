/**
 * app.js
 */

"use strict";

import { bookController } from "./bookController.js";

document.addEventListener("DOMContentLoaded", () => {

    const tbodyPatientsList = document.getElementById("tbodyPatientsList");
    console.log(tbodyPatientsList);
    //fetch book data always use try catch
    async function displayBook() {
        const book = await bookController.getAllbook();
        console.log(book);
        for (let [index, val] of book.entries()) {

            tbodyPatientsList.innerHTML += `
                                        <tr>
                                            <td scope="col">${index + 1}</td>
                                            <td scope="col">${val.isbn}</td>
                                            <td scope="col">${val.title}</td>
                                            <td scope="col">${val.overdueFee}</td>
                                            <td scope="col">${val.publisher}</td>
                                            <td scope="col">${val.datePublished}</td>
                                        </tr>
                                        `;
        };
        // for (let index = 0; index < book.length; index++) {
        //     let element = book[index];
        //     console.log(index);
        //     console.log(element.patientIdNumber);
        //     tbodyPatientsList.innerHTML += `
        //                                 <tr>
        //                                     <td scope="col">${index + 1}</td>
        //                                     <td scope="col">${element.isbn}</td>
        //                                     <td scope="col">${element.title}</td>
        //                                     <td scope="col">${element.overdueFee}</td>
        //                                     <td scope="col">${element.publisher}</td>
        //                                     <td scope="col">${element.datePublished}</td>
        //                                 </tr>
        //                                 `;
        // };
    }
    displayBook();
});

/**
 * bookController.js
 */

"use strict";

const bookController = (function book() {
    const getAllbook = async function () {
        try {
            const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list");
            const books = await response.json();
            return books;


        } catch (error) {
            console.error();
        }

    };

    const saveBook = async function (newbook) {
        try {
            const response = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
                {
                    method: "POST", // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newbook),
                }
            );
            const bookAdded = await response.json();
            return bookAdded;
        } catch (error) {
            console.error();
        }

    };

    return {
        getAllbook: getAllbook,
        saveBook: saveBook
    }

})();

export { bookController };


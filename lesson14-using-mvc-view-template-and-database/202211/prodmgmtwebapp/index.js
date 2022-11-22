/**
 * index.js
 */
"use strict";

const express = require("express");

const app = express();
console.log(`ProductMgmtWebAppServer starting... Please wait`);

app.get("/", (req, res) => {
    res.send(`<h1>Hello ProductMgmtWebApp homepage</h1>`);
})

const PORT_NUMBER = 9000;

app.listen(PORT_NUMBER, () => {
    console.log(`ProductMgmtWebAppServer started. Listening on port ${PORT_NUMBER}`);
});
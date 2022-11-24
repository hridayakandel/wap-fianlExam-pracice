/**
 * hompePageRoutes.js
 */

"use strict";
const express = require("express");
const path = require("path");
const hompePageRoutes = express.Router();

// Define home page routes
hompePageRoutes.get("/", (req, res) => {
    console.log(`Presenting homepage 1`);
    res.sendFile(path.join(__dirname, "../../views/public", "index.html"));
});

hompePageRoutes.get("/home", (req, res) => {
    console.log(`Presenting homepage 2`);
    res.sendFile(path.join(__dirname, "../../../views/public/home", "index.html"));
});

module.exports = hompePageRoutes;
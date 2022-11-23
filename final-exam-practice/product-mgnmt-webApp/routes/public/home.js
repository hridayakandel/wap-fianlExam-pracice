/**
 * home.js
 */

"use strict";

const express = require("express");

const path = require("path");

const homePageRoutes = express.Router();

//removing this from home page
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

//using this 
homePageRoutes.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});

homePageRoutes.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});

homePageRoutes.get("/productmgmt/home", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});

module.exports = homePageRoutes;


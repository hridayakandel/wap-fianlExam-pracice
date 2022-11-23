/**
 * accountRooutes.js
 */


"use strict";

const express = require("express");
const path = require("path");

const accountController = require("../../controller/accountController");

const accountRoutes = express.Router();

// accountRoutes.get("/account", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../views/account", "account.html"));
// });

accountRoutes.post("/account", (req, res) => {
    console.log("button click");
    accountController.addNewAccount(req, res);
    res.redirect(303, "new");
});

accountRoutes.get("/new", (req, res) => {
    const accounts = accountController.getAccount();
    console.log("===routes" + accounts);
    // res.sendFile(path.join(__dirname, "../../views/account", "account.html"));
    res.render("account/accountList", { accounts: accounts });
});






module.exports = accountRoutes;
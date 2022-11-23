/**
 * accountRooutes.js
 */


"use strict";

const express = require("express");
const path = require("path");

const accountController = require("../../controller/accountController");

const accountRoutes = express.Router();

accountRoutes.get("/account", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/account", "account.html"));
});

accountRoutes.get("/new", (req, res) => {
    const accounts = accountController.getAccount();
    console.log("===routes" + accounts);
    // res.sendFile(path.join(__dirname, "../../views/account", "account.html"));
    res.render("account/accountList", { accounts: accounts });
});



accountRoutes.post("/new/add", (req, res) => {
    accountController.addNewAccount(req, res);
    res.redirect(303, "new");
});


module.exports = accountRoutes;
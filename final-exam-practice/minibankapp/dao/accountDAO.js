/**
 * accountDAO.js
 */

"use strict";

const Account = require("../model/accountModel");

const accountDAO = (function () {
    const accounts = [
        new Account("1", "1001", "Hridaya", "Checking"),
        new Account("2", "1002", "Samir", "Saving"),
        new Account("2", "1002", "Samir", "Saving")
    ];

    const getAccount = function () {
        // console.log("daoAcount=====" + accounts);
        return accounts;
    }
    const saveAccounts = function (account) {
        accounts.push(account);
    };
    return {
        getAccount: getAccount,
        saveAccounts: saveAccounts
    }
})();

module.exports = accountDAO;

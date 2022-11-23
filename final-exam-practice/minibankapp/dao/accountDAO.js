/**
 * accountDAO.js
 */

"use strict";

const Account = require("../model/accountModel");

const accountDAO = (function () {
    const accounts = [];
    console.log(accounts);
    const getAccount = function () {
        // console.log("daoAcount=====" + accounts);
        return accounts;
    }
    const saveAccounts = function (account) {
        console.log(account);
        accounts.push(account);
    };
    return {
        getAccount: getAccount,
        saveAccounts: saveAccounts
    }
})();

module.exports = accountDAO;

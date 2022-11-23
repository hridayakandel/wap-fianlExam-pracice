/**
 * accountController.js
 */

"use strict";

const accountDAO = require("../dao/accountDAO");
const Account = require("../model/accountModel")

const accountController = (function () {

    const getAccount = function (req, res) {
        console.log("================");
        console.log(accountDAO.getAccount());
        return accountDAO.getAccount();
    }

    const addNewAccount = function (req, res) {
        console.log("hello from controller");
        console.log(accountDAO.getAccount().length);
        const accountId = accountDAO.getAccount().length + 1;
        const txtAccountNo = req.body.txtAccountNo;
        const txtCustomerName = req.body.txtCustomerName;
        const ddlAccountType = req.body.ddlAccountType;
        const newAccount = new Account(accountId, txtAccountNo, txtCustomerName, ddlAccountType);
        accountDAO.saveAccounts(newAccount);
    }
    return {
        getAccount: getAccount,
        addNewAccount: addNewAccount
    }
})();

module.exports = accountController;
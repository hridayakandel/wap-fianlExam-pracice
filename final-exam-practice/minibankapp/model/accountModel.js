/**
 * accountModel.js
 */
"use strict";

function Account(accountId, txtAccountNo, txtCustomerName, ddlAccountType) {
    this.accountId = accountId;
    this.txtAccountNo = txtAccountNo;
    this.txtCustomerName = txtCustomerName;
    this.ddlAccountType = ddlAccountType;
}

module.exports = Account;
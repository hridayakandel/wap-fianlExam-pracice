/**
 * product.js
 */
"use strict";

function Product(productId, productNo, productName, unitPrice) {
    this.productId = productId;
    this.productNo = productNo;
    this.productName = productName;
    this.unitPrice = unitPrice;
}
module.exports = Product;
/**
 * product.js
 */
"use strict";

function Product(productId, productNo, name, unitPrice) {
    this.productId = productId;
    this.productNo = productNo;
    this.name = name;
    this.unitPrice = unitPrice;
}
module.exports = Product;
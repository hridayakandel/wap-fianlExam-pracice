/**
 * productController.js
 */

"use strict";
const productDAO = require("../dao/productDAO");
const Product = require("../model/product");

const productController = (function () {

    const getProducts = function (req, res) {
        return productDAO.getProducts();
    }
    const addNewProduct = function (req, res) {
        const productId = productDAO.getProducts().length + 1;
        const productNo = req.body.productNo;
        const productName = req.body.productName;
        const unitPrice = req.body.unitPrice;
        const newProduct = new Product(productId, productNo, productName, unitPrice);
        console.log()
        productDAO.saveProducts(newProduct);

    }
    return {
        getProducts: getProducts,
        addNewProduct: addNewProduct
    }
})();

module.exports = productController;
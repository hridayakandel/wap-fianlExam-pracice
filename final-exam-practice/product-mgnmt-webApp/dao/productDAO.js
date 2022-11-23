/**
 * productDao.js
 */
"use Strict";

const Product = require("../model/product")

const productDAO = (function () {
    const products = [
        new Product(1, 1001, "Apple phone 14", 18500.0),
        new Product(1, 1001, "samsung galexy", 18500.0),
        new Product(1, 1001, "Google pixel", 18500.0)
    ]
    const getProducts = function () {
        return products;
    };
    const saveProducts = function (product) {
        products.push(product);
    };
    return {
        getProducts: getProducts,
        saveProducts: saveProducts
    }
})();

module.exports = productDAO;
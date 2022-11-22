/**
 * productDAO.js
 */
"use strict";

const dbConnectionMgr = require("../dbconnectionmgr");

//TODO Use ES6 class syntax
const productDAO = (function () {

    // const getProducts = function() {
    //     const products = [];
    //     products.push(new Product(1001, "Apple iPhone15", 1700));
    //     products.push(new Product(1002, "Samsung Android S22", 1500));
    //     products.push(new Product(1001, "Google Pixel 11", 1200));
    //     return products;
    // }

    /**
     * Fetches and returns all available products in the database
     */
    const getProducts = async function () {
        const qryStrGetProducts = "SELECT * FROM `products-db`.products";
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const [products] = await dbConnection.promise().query(qryStrGetProducts);
            return products;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    const saveProduct = async function (product) {
        const cmdStrSaveProduct = `insert into products (productNo, productName, unitPrice) values (${product.productNo}, '${product.productName}', ${product.unitPrice})`;
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveProduct);
            return saveOpResult;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    return {
        getProducts: getProducts,
        saveProduct: saveProduct
    }
})();

module.exports = productDAO;
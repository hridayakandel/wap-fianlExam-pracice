/**
 * productRoutes.js
 */

"use strict";

const express = require("express");
const path = require("path");

const productController = require("../../controller/productController");

const productRoutes = express.Router();

productRoutes.get("/list", (req, res) => {
    const products = productController.getProducts();
    console.log("==============================" + products);
    res.render("product/productList", { products: products });
});

productRoutes.get("/new", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/product", "product-form.html"));
});

productRoutes.post("/new", (req, res) => {
    productController.addNewProduct(req, res);
    res.redirect(303, "new");
});


module.exports = productRoutes;
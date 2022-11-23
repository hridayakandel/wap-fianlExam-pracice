/**
 * index.js
 */
'use strict';
// console.log(`hello server`);

const express = require('express');
const path = require("path");

const homePageRoutes = require("./routes/public/home");
const productRoutes = require("./routes/product/productRoutes");


const app = express();
console.log(`ProductionManagement server starting... Please wait`);

//midddleware for different folders : buildin middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//setup express Http request data parser middlewares
// parse application/x-www-form-urlencoded (e.g from data)
app.use(express.urlencoded({ extended: false }));

// for static content routes
app.use("/static", express.static(path.join(__dirname, "public")));

//routes for home page
app.use("", homePageRoutes);

//setup pages for products such as list product, display product form, find prosucts etc 
app.use("/productmgmt/products", productRoutes);

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

const PORT_NUMBER = 9000;
app.listen(PORT_NUMBER, () => {
    console.log(`ProductManagement statred . Listening on port ${PORT_NUMBER}`);
})


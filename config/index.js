// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ global package used to `normalize` paths amongst different operating systems
// https://www.npmjs.com/package/path
const path = require("path");

// Middleware configuration
module.exports = (app) => {  
    // Make everything inside of public/ available
    app.use(express.static(path.join(__dirname, "..", "public")));

    // creates an absolute path pointing to a folder called "views"
    app.set(path.join(__dirname, "..", "views"));

    //tell our Express app that HBS will be in charge of rendering the HTML
    app.set("view engine", "hbs");
};
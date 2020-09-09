"use strict";

const 
    express = require("express");
    
module.exports = exports = { 
    init(/** @type {express} */ app){
        app.use("/api",    require("./api"));
        app.use("/public", require("./public"));
        app.use("/node_modules", require("./node_modules_folder"));
    } 
}
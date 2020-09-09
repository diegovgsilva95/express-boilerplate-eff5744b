"use strict";

const 
    express = require("express"),
    http = require("http"),
    app = express(),
    server = http.createServer(app).listen(8008),
    routes = require("./routes/").init(app);

app.get("/", (req,res)=>{
    res.end();
});
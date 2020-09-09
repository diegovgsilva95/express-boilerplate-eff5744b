"use strict";

const
    { Router, urlencoded } = require("express"),
    router = Router(),
    MessagesCtrl = require("./../controller/messages")();

router.get("/messages", (req,res)=>{
    let msgs = MessagesCtrl.getMessages();
    res.send({ msgs }).end();
}).post("/messages", urlencoded({extended: true}), (req,res)=>{
    let msgs = MessagesCtrl.appendMessage(req.body.nick, req.body.msg);
    res.send({ msgs }).end();
});
module.exports = exports = router;
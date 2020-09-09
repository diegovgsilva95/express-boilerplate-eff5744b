"use strict";

const 
    logbook_form = document.querySelector("form#logbook-form"),
    logbook_history = document.querySelector("ol#logbook-history");

const submitLog = async function(nick, msg){
    let formData = new URLSearchParams();
    formData.append("nick", nick);
    formData.append("msg", msg);

    let req = await fetch("/api/messages", {
        method: "POST",
        body: formData
    });
    let res = await req.json();
    console.log(res);
},
updateLogs = async function(){
    let req = await fetch("/api/messages");
    let res = await req.json();
    let temp = $(document.createDocumentFragment());

    for(let item of res.msgs){
        let timestamp = moment(item.when).format("HH:mm:ss");
        let temp_item = $("<li />").text(`[${timestamp}] ${item.nick}: ${item.msg}`);
        temp.append(temp_item);
    };
    $(logbook_history).empty().append(temp);
    setTimeout(updateLogs, 1000);
},
retrieveNickName = function(){
    if(localStorage && localStorage.getItem("nick")){
        logbook_form.nick.value = localStorage.getItem("nick");
        logbook_form.msg.focus();
    }
    else 
        logbook_form.nick.focus();
};

logbook_form.addEventListener("submit", async function(ev){
    ev.preventDefault();
    let nick = logbook_form.nick.value;
    if(localStorage) localStorage.setItem("nick", nick);
    
    let msg = logbook_form.msg.value;
    submitLog(nick, msg);
    logbook_form.msg.value = "";
    return false;
});
retrieveNickName();
updateLogs();

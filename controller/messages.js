"use strict";

module.exports = exports = function(){
    return new class {
        constructor(){
            this.history = [];
            setInterval(this.purgeMessages.bind(this), 1000);
        }
        purgeMessages(){
            let now = Date.now();
            this.history = this.history.filter(item => (now - item.when) < 1000 * 60); //Beware of run conditions!
        }
        appendMessage(nick, msg){
            this.history.push({nick,msg,when:Date.now()});
            return this.history;
        }
        getMessages(){
            return this.history;
        }
    }
}
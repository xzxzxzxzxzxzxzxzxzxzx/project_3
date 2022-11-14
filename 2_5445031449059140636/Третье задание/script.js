function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    author;
    time;
    message;
    constructor(author, message){
        this.author = author;
        this.time = gettime();
        this.message = message;
    }
    toHTML(){
        return `<p>${this.time} ${this.author}: ${this.message}</p>`
    }
}

class Messenger{
    messages = [];

    send(author, text){
        this.messages.push(new Message(author, text));
    }
    show_history(){
        let fields = document.querySelector(".container > .history > .fields");
        fields.innerHTML = "";
        this.messages.forEach(message => {
            fields.innerHTML += message.toHTML();
        });
    }
}

const button = document.querySelector(".btn");

const messenger = new Messenger();
button.addEventListener("click", () => {
    let message = document.querySelector("#message");
    messenger.send(document.querySelector("#name").value, message.value);
    message.value = "";
    messenger.show_history();
});
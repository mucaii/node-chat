const socket = io();

const input = document.getElementById("input");
const messages = document.getElementById("messages");

function send() {
    socket.emit("message", input.value);
    input.value = "";
}

socket.on("message", (msg) => {
    messages.innerHTML += `<p>${msg}</p>`;
});
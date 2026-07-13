const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("Nekdo se je povezal!");

    socket.on("message", (msg) => {
        console.log(msg);

        io.emit("message", msg);
    });

    socket.on("disconnect", () => {
        console.log("Uporabnik je odšel.");
    });
});

server.listen(3000, () => {
    console.log("Server teče na http://localhost:3000");
});
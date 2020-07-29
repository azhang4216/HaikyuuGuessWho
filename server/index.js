const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);


io.on("connection", (socket) => {
  console.log("New client connected");
});


server.listen(port, () => console.log(`Listening on port ${port}`));

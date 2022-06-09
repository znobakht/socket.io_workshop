const http = require("http");
const socket_Io = require("socket.io");
const express = require("express");

const app = express();
const server = http.createServer(app);
const IO = socket_Io(server);

const chat = require("./routes/chat")(IO);

const port = process.env.PORT || 5000;
server.listen(port, ()=>console.log(`server running on port ${port}`));
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server);

const chat = require("./routes/chat.socket")(io);

const path = require('path');
const publicDir = path.join(__dirname,"./public");
app.use(express.static(publicDir));

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`server running on port ${port}`));

const db = require("./config/keys.json").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("connected to database"))
  .catch((err) => console.error(err));
const express = require("express");
const http = require("http");
// const socketIO = require("socket.io");

const PORT = 8000;
const app = express();
const server = http.createServer(app);
const socketHandler = require("./sockets");
socketHandler(server);

// cors: 다른 서버에서 보내는 요청 제한
const cors = require("cors");
app.use(cors());

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

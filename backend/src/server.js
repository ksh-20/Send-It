import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import { socketHandler } from "./sockets/index.js";
import { cleanupExpiredSessions } from "./utils/cleanup.js";

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

socketHandler(io);

setInterval(cleanupExpiredSessions, 60 * 1000);

server.listen(3000, () => {
  console.log("Backend running on port 3000");
});
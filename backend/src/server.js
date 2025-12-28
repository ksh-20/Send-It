import http from "http";
import { Server } from "socket.io";
import app from "./app";
import { initSockets } from "./sockets";
import { cleanupExpiredSessions } from "./utils/cleanup.js";

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

initSockets(io);

setInterval(cleanupExpiredSessions, 60 * 1000);

server.listen(3000, () => {
  console.log("Backend running on port 3000");
});
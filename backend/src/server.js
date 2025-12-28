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

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
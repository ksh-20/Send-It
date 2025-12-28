import { io, Socket } from "socket.io-client";

const URL = "https://send-it-backend.onrender.com";

export const socket: Socket = io(URL, {
  autoConnect: false,
  transports: ["websocket", "polling"]
});
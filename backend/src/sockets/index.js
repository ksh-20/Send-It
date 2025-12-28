export function socketHandler(io) {
  io.on("connection", (socket) => {
    socket.on("join-room", (pin) => {
      socket.join(pin);
    });

    socket.on("file-ready", (pin) => {
      io.to(pin).emit("file-available");
    });
  });
}
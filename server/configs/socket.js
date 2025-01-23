import { Server } from "socket.io";
global.onlineUsers = new Map();

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: process.env.CLIENT_URL, credentials: true },
  });

  io.on("connection", (socket) => {
    global.chatSocket = socket;

    socket.on("disconnect", () => {
      console.log("A user disconnected");
      // Remove the user from the onlineUsers map
      for (let [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }
    });

    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });
  });

  return io;
};

export default configureSocket;

import { Server } from "socket.io";
global.onlineUsers = new Map();

const configureSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    global.chatSocket = socket;

    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log(onlineUsers);
    });
    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });
  return io;
};

export default configureSocket;

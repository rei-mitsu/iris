import { Server, Socket } from "socket.io";

export const initSocket = (server: Server) => {
  server.on("connection", (socket: Socket) => {
    console.log(`クライアント接続: ${socket.id}`);

    socket.on("message", (msg: string) => {
      server.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log(`クライアント切断: ${socket.id}`);
    });
  });

  return server;
};

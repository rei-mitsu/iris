import { createServer } from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import router from "./routes";
import { initSocket } from "./socket";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
const server = createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`🚀 Server running`);
});

initSocket(
  new Server(server, {
    cors: {
      origin: "*",
    },
  }),
);

import http from "http";
import socketio from "socket.io";

const server: http.Server = http.createServer();
const io: socketio.Server = new socketio.Server(server);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
io.on("connection", (socket: socketio.Socket) => console.log("connect"));

const port = 10000;
console.log("hoge");
server.listen(port, () => console.log(`app listening on port ${port}`));

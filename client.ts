import { io } from "socket.io-client";

const port = 10000;
const socket = io(`http://localhost:${port}`);

socket.on("connect", () => console.log("connect"));

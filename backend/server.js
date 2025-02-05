require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const connectDB = require("./config");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


connectDB();


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);


app.use(express.static(path.join(__dirname, "../frontend")));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/view/signup.html"));
});


io.on("connection", (socket) => {
    console.log("New user connected");

    socket.on("joinRoom", ({ room }) => {
        socket.join(room);
        console.log(`User joined room: ${room}`);
    });

    socket.on("chatMessage", ({ room, from_user, message }) => {
        const chatMessage = { from_user, message };
        io.to(room).emit("message", chatMessage);
    });

    socket.on("privateMessage", ({ from_user, to_user, message }) => {
        const privateRoom = [from_user, to_user].sort().join("_");
        socket.join(privateRoom);
        io.to(privateRoom).emit("privateMessage", { from_user, to_user, message });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

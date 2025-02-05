const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Bağlantısı Başarılı"))
  .catch(err => console.log(err));

io.on("connection", (socket) => {
    console.log("Bir kullanıcı bağlandı.");

    socket.on("disconnect", () => {
        console.log("Bir kullanıcı ayrıldı.");
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor.`));

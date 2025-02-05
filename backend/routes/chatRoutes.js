const express = require("express");
const GroupMessage = require("../models/GroupMessage");
const PrivateMessage = require("../models/PrivateMessage");

const router = express.Router();

router.post("/group", async (req, res) => {
    const { from_user, room, message } = req.body;
    try {
        const newMessage = new GroupMessage({ from_user, room, message });
        await newMessage.save();
        res.status(201).json({ message: "Message saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/group/:room", async (req, res) => {
    try {
        const messages = await GroupMessage.find({ room: req.params.room }).sort({ date_sent: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/private", async (req, res) => {
    const { from_user, to_user, message } = req.body;
    try {
        const newMessage = new PrivateMessage({ from_user, to_user, message });
        await newMessage.save();
        res.status(201).json({ message: "Private message saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/private/:from_user/:to_user", async (req, res) => {
    try {
        const messages = await PrivateMessage.find({
            $or: [
                { from_user: req.params.from_user, to_user: req.params.to_user },
                { from_user: req.params.to_user, to_user: req.params.from_user }
            ]
        }).sort({ date_sent: 1 });

        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in the .env file.");
        }

        await mongoose.connect(mongoURI); 

        console.log("✅ MongoDB Connected...");
    } catch (err) {
        console.error(`❌ Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

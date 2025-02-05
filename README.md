# Real-Time Chat Application 🗨️

This is a **real-time chat application** built with **Node.js, Express, Socket.io, and MongoDB**. The application supports **room-based chat**, **private messaging**, **user authentication**, and **message persistence**.

---

## **📌 Features**
- 🔐 **User Authentication** (Signup & Login)
- 🏠 **Room-based Chat System**
- 💬 **Private Messaging Between Users**
- 💾 **Message Persistence in MongoDB**
- 🔄 **Real-time Communication with Socket.io**
- 🚪 **Logout Functionality**

---

## **📌 Technologies Used**
### **Frontend (Client)**
- HTML5, CSS, Bootstrap
- JavaScript (jQuery & Fetch API)
- Socket.io (for real-time messaging)

### **Backend (Server)**
- Node.js, Express.js
- MongoDB & Mongoose (for database)
- Socket.io (for WebSockets)
- bcrypt.js (for password hashing)
- JSON Web Tokens (JWT) (for authentication)

---
## **📌 Project Structure
chat_app
│── backend/
│   ├── models/        # Database Schemas
│   │   ├── User.js
│   │   ├── GroupMessage.js
│   │   ├── PrivateMessage.js
│   ├── routes/        # API Routes
│   │   ├── authRoutes.js
│   │   ├── chatRoutes.js
│   ├── server.js      # Main Server File
│   ├── config.js      # Database Configuration
│   ├── .env 
│── frontend/
│   ├── view/
│   │   ├── signup.html
│   │   ├── login.html
│   │   ├── chat.html
│   ├── assets/
│   │   ├── styles.css
│   │   ├── app.js
│── package.json
│── README.md


# 🔐 SendIt: An Online File Sharing Application

SendIt is a real-time, secure **online file sharing web application** that allows users to transfer files across the internet using a **4-digit PIN**. The sender uploads a file and shares a PIN with the receiver, who can download the file instantly-no login required and a user friendly application.

---

## 🚀 Features

- 📁 Share files up to **5 MB**
- 🔢 Secure **4-digit PIN-based access**
- ⏱️ PIN auto-expiry for security
- 🔄 Real-time updates using WebSockets
- 🧹 Automatic file cleanup after download/expiry
- ⚡ Fast transfers over WiFi or internet
- 🔐 HTTPS & rate-limited endpoints
- 💻 Works across devices and networks

---

## 🛠 Tech Stack

### Frontend
- **React**
- **TypeScript**
- **Socket.IO Client**
- **Vite**

### Backend
- **Node.js**
- **Express.js**
- **Socket.IO** (for pin based rooms for file sharing)
- **Multer** (for file upload handling)
- **UUID** (for internal sessions management)
- **Local Disk Storage (Temporary)**

### Security & Infra
- **4-digit PIN logic**
- **PIN expiry timer**
- **Rate limiting**
- **HTTPS**

### Deployment
- **Render**

---

## 📁 Project Structure

``` bash
SendIt/
├── frontend/
│ ├── index.html
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── types/
│ │ └── utils/
│ ├── tsconfig.json
│ ├── vite.config.ts
│ └── package.json
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── sockets/
│ │ ├── services/
│ │ ├── middlewares/
│ │ ├── utils/
│ │ └── temp/uploads/
│ ├── tsconfig.json
│ └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔁 Application Flow

1. Sender uploads a file
2. Backend generates a **4-digit PIN**
3. Sender joins a Socket.IO room (PIN)
4. Receiver enters the PIN
5. Receiver joins the same room
6. File transfer starts
7. File is downloaded
8. File and PIN are deleted automatically

---

## 🔐 PIN Security Model

- PINs are randomly generated (0000-9999)
- Each PIN maps to a unique file session
- PIN expires after a fixed duration (5 minutes)
- Rate limiting prevents brute-force attacks and maintains network security
- PIN becomes invalid after download or expiry

---

## 📦 File Handling Rules

|         Rule         |           Value           |
|----------------------|---------------------------|
| Max file size        | 5 MB                      |
| Storage type         | Temporary local disk      |
| Storage lifetime     | Until download or expiry  |
| Concurrent transfers | Isolated via socket rooms |

---

## 🔌 Socket.IO Events (Overview)

|        Event        |        Description        |
|---------------------|---------------------------|
| `join-room`         | Join PIN-based room       |
| `file-uploaded`     | File ready for download   |
| `download-started`  | Receiver started download |
| `download-complete` | File downloaded           |
| `session-expired`   | PIN expired               |

---

## ▶️ Running the Project Locally

### Backend
```bash
cd backend
# Install node modules
npm install
# Install below libraries
npm install express socket.io multer uuid cors express-rate-limit
# Install below dependencies
npm install -D typescript ts-node nodemon @types/node @types/express @types/multer @types/uuid
# Run the Backend
npm run dev
```

### Frontend
``` bash
cd frontend
# Install node modules
npm install
# Install below libraries
npm install react react-dom socket.io-client axios react-router-dom react-dropzone
# Install below dependencies
npm install -D vite typescript @vitejs/plugin-react @types/react @types/react-dom
# Run the Frontend
npm run dev
```

---

## 🌍 Deployment

- Deployed on Render
- Frontend and backend hosted separately
- Built-in HTTPS
- No Docker or external cloud storage required

---

## ⚠️ Important Notes

- File storage on Render is ephemeral
- Files must be downloaded immediately
- Not suitable for long-term file storage
- Best suited for quick, one-time transfers

---

## 📈 Future Enhancements

- Peer-to-peer transfers using WebRTC
- QR code-based PIN sharing
- End-to-end encryption
- Multiple file support
- Drag-and-drop uploads

---

## 👨‍💻 Author

Kshitij S

---
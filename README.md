# 🏏 IPL Live Score Dashboard

A full-stack web application to display live and completed IPL match scores using **React (Vite)** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for the database.

---      

## 🚀 Features

- Display list of IPL matches with:
  - Team names
  - Scores & overs
  - Wickets
  - Match status (Live / Completed)
- Responsive UI (mobile + desktop)
- Global state management using React Context API
- TailwindCSS for clean and modern styling
- Backend API with Express.js
- MongoDB schema for match data

---

## 🧰 Tech Stack

### 🔹 Frontend
- React + Vite
- TailwindCSS
- Context API

### 🔹 Backend
- Node.js + Express
- MongoDB + Mongoose

---

## 🗂️ Project Structure    

cricket-dashboard-root/
├── Frontend/
│ ├── components/
│ ├── contexts/
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
├── Backend/
│ ├── Routes/
│ ├── Models/
│ ├── index.js
│ └── ...
└── README.md

## ⚙️ How to Run Locally
## Backend
cd Backend
npm install
# Add your MongoDB URI in .env (MONGO_URI)
node index.js

## Frontend
cd Frontend
npm install
npm run dev

🌐 Deployment
https://cricket-dashboard-frontend.onrender.com


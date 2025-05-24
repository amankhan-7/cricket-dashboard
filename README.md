🏏 IPL Live Score Dashboard

📌 Overview  
A full-stack IPL Live Score Dashboard that displays live or completed IPL match data including teams, scores, overs, wickets, and status. Built using modern tools like React, Vite, Tailwind CSS, Node.js, Express, and MongoDB. Match data is fetched from a backend API connected to a MongoDB database.

---

🚀 Features  
📋 Display of team names, scores, overs, and match status  
🔄 Fetches data from backend API using Context API  
📱 Fully responsive (mobile and desktop)  
📤 Clean and scalable folder structure  
🌐 Optional: Deployable on Vercel/Netlify (frontend) and Render/Heroku (backend)

---

🛠️ Technologies Used  

**Frontend**  
- React (with Vite)  
- Tailwind CSS (for styling)  
- React Lucide Icons (for UI icons)  
- Context API (for global state management)

**Backend**  
- Node.js  
- Express.js  
- MongoDB (with Mongoose)

---

📂 Project Structure  
```markdown
cricket-dashboard-root/
│
├── Frontend/
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar
│   │   └── Home.jsx               # Main dashboard view
│   ├── contexts/
│   │   ├── GlobalStore.js         # Context API logic
│   │   └── GlobalStoreProvider.jsx # Provider wrapper
│   ├── App.jsx                    # Main app entry
│   ├── main.jsx                   # Vite entry point
│   ├── index.css                  # Tailwind styles
│   └── vite.config.js             # Vite config
│
├── Backend/
│   ├── Models/
│   │   └── Match.js               # Mongoose schema for match
│   ├── Routes/
│   │   └── Routes.js              # Express route for match API
│   ├── index.js                   # Server entry point
│   └── .env                       # Environment variables (Mongo URI)
│
├── .gitignore
├── README.md
└── package.json                  # Project metadata and scripts
 ```
---

📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ipl-live-score-dashboard.git
cd ipl-live-score-dashboard        
 ```
##  Backend
cd Backend
npm install
# Create .env file with your MongoDB URI
node index.js
# Backend runs on https://cricket-dashboard-1ulr.onrender.com/api/matches

## Frontend

cd ../Frontend
npm install
npm run dev
# Frontend runs on https://cricket-dashboard-frontend.onrender.com


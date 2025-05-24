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
ceicket-dashboard-root/
│
├── Frontend/
│ ├── components/
│ │ ├── Navbar.jsx # Top navigation bar
│ │ ├── Home.jsx # Main UI showing match data
│ │ ├── Footer.jsx # Footer section
│ ├── contexts/
│ │ ├── GlobalStore.js # CreateContext and custom hook
│ │ ├── GlobalStoreProvider.jsx # Provider and state logic
│ ├── App.jsx # Main App component
│ ├── main.jsx # Vite entry point
│ ├── index.css # Tailwind base styles
│ ├── package.json # Frontend dependencies
│ └── .gitignore # Ignore node_modules, .env, etc.
│
├── Backend/
│ ├── Models/
│ │ ├── Match.js # Mongoose schema for matches
│ ├── Routes/
│ │ ├── Routes.js # Express routes for match data
│ ├── index.js # Entry point for Express server
│ ├── package.json # Backend dependencies
│ └── .gitignore # Ignore node_modules, .env, etc.
│
└──README.md # Project documentation
```

📦 Installation & Setup 
### 1.🌐 Configure Environment Variables
Create a .env file inside the Backend folder and add your MongoDB Atlas connection string like this:

markdown ```MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ipl-db?retryWrites=true&w=majority
PORT=5000```

##  2. Backend
cd Backend
npm install
node index.js
```markdown Backend runs on https://cricket-dashboard-1ulr.onrender.com/api/matches ```

## 3. Frontend

cd Frontend
npm install
npm run dev
```markdown Frontend runs on https://cricket-dashboard-frontend.onrender.com ```

### 4. Clone the Repository
```bash
git clone https://github.com/yourusername/ipl-live-score-dashboard.git
cd ipl-live-score-dashboard        
 ```



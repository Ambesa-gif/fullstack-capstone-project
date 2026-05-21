Footprint Logger

A full-stack web application for tracking and reducing your daily carbon footprint.


Features
Activity Logging — Log transport, food, and energy activities with a running CO₂ total. Filter by category, view weekly summaries, and persist data with local storage.
User Authentication — Secure registration and login backed by JWT and hashed password storage.
Dashboard — View your personal activity log, total emissions, highest-impact categories, weekly reduction goals, and how you compare to the community average.
Insight Engine — Receive personalised sustainability tips, emission analysis, and behaviour-based goal tracking.

Tech Stack
LayerTechnologiesFrontendReact, Chart.js, CSSBackendNode.js, Express.jsDatabaseMongoDB, MongooseAuthJWT

Project Structure
fullstack-capstone-project/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── db.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md

Getting Started
1. Clone the repository
bashgit clone https://github.com/Ambesa-gif/fullstack-capstone-project.git
cd fullstack-capstone-project
2. Set up the backend
bashcd backend
npm install
Create a .env file in the backend/ directory:
envMONGO_URI=mongodb://127.0.0.1:27017/footprintlogger
JWT_SECRET=your_secret_key_here

Note: Replace your_secret_key_here with a strong, random string in production.

Start the backend server:
bashnpm run dev
3. Set up the frontend
bashcd frontend
npm install
npm start
The app will be available at http://localhost:3000.

API Reference
Authentication
MethodEndpointDescriptionPOST/api/auth/registerRegister a new userPOST/api/auth/loginLog in and receive a JWT
Activities
MethodEndpointDescriptionGET/api/activitiesRetrieve all activitiesPOST/api/activitiesLog a new activityDELETE/api/activities/:idDelete an activity

MongoDB Setup

Download and install MongoDB Community Server.
Start the MongoDB service:

bash# Windows
net start MongoDB

# macOS / Linux
brew services start mongodb-community   # or: sudo systemctl start mongod

Roadmap

 Community leaderboard
 AI-powered recommendations
 Mobile-responsive UI
 Carbon reduction badges
 Exportable reports (PDF / CSV)


Author
Ambesa Golide
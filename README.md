# Footprint Logger Platform

A full-stack carbon footprint tracking web application that helps users monitor daily activities contributing to carbon emissions.

## Features

### Activity Logging
- Log daily carbon-emitting activities
- Categories include:
  - Transport
  - Food
  - Energy
- Running total of CO2 emissions
- Filter activities by category
- Local storage support
- Weekly summaries

### User Authentication
- User registration
- User login
- Secure password storage
- JWT authentication

### Dashboard
- Personal activity logs
- Total emissions summary
- Highest emission categories
- Weekly reduction goals
- Community average comparison

### Insight Engine
- Personalized sustainability tips
- Emission analysis
- Goal tracking
- Behaviour insights

---

# Tech Stack

## Frontend
- React
- CSS
- Chart.js

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

# Project Structure

```bash
fullstack-capstone-project/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── db.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Ambesa-gif/fullstack-capstone-project.git
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/footprintlogger
JWT_SECRET=mysecretkey
```

Run backend server:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Activities

### Get Activities

```http
GET /api/activities
```

### Add Activity

```http
POST /api/activities
```

### Delete Activity

```http
DELETE /api/activities/:id
```

---

# MongoDB

Install MongoDB Community Server:

https://www.mongodb.com/try/download/community

Start MongoDB service:

```bash
net start MongoDB
```

---

# Future Improvements

- Community leaderboard
- AI-powered recommendations
- Mobile responsive UI
- Carbon reduction badges
- Export reports

---

# Author

Ambesa Golide

# Footprint Logger Platform

A full-stack carbon footprint tracking web application that helps users monitor daily activities contributing to carbon emissions, analyse their environmental impact, and receive sustainability insights.

---

# Project Overview

The Footprint Logger Platform allows users to:

- Register and log into the platform
- Add daily carbon-emitting activities
- View total emissions
- Track high-emission behaviours
- Update and delete activities
- Receive sustainability insights and weekly goals
- Store activity data using MongoDB

The application was developed as a Developer Capstone Project using the MERN stack principles.

---

# Features

## Activity Logging

- Add daily carbon-emitting activities
- Update existing activities
- Delete activities
- Store activity records in MongoDB
- Running total of carbon emissions
- Dashboard activity tracking
- Weekly sustainability awareness

### Activity Categories

- Transport
- Food
- Energy

---

## User Authentication

- User registration
- User login
- Secure password handling
- MongoDB user storage
- Authentication-ready backend structure

---

## Dashboard

- Personal activity logs
- Total emissions summary
- Highest emission activity tracking
- Weekly reduction goals
- Sustainability insights and eco tips

---

## Insight Engine

- Tracks highest-emission activities
- Personalized sustainability suggestions
- Emission monitoring
- Weekly reduction awareness

---

# Tech Stack

## Frontend

- React.js
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Project Structure

```bash
fullstack-capstone-project/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Activity.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── activityRoutes.js
│   │
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md
```

---

# Installation Guide

## Clone Repository

```bash
git clone https://github.com/Ambesa-gif/fullstack-capstone-project.git
```

---

# Backend Setup

## Navigate to Backend Folder

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/footprintlogger
JWT_SECRET=mysecretkey
```

## Start Backend Server

```bash
npm run dev
```

Expected output:

```bash
Server running on port 5000
MongoDB Connected
```

---

# Frontend Setup

## Navigate to Frontend Folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start React Application

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

# Authentication Routes

## Register User

```http
POST /api/auth/register
```

## Login User

```http
POST /api/auth/login
```

---

# Activity Routes

## Get All Activities

```http
GET /api/activities
```

## Add Activity

```http
POST /api/activities
```

## Update Activity

```http
PUT /api/activities/:id
```

## Delete Activity

```http
DELETE /api/activities/:id
```

---

# Completed Features

- Full CRUD operations for activities
- MongoDB database integration
- REST API using Express.js
- React frontend integration
- Axios API communication
- Dashboard with emissions tracking
- User authentication system
- Sustainability insight engine
- Activity monitoring and management

---

# MongoDB Setup

Download MongoDB Community Server:

https://www.mongodb.com/try/download/community

Start MongoDB service:

```bash
net start MongoDB
```

---

# Future Improvements

- Community leaderboard
- AI-powered sustainability recommendations
- Mobile responsive UI improvements
- Carbon reduction badges
- Export activity reports
- Advanced data visualizations

---

# Author

## Ambesa Golide

Developer Capstone Project — Footprint Logger Platform

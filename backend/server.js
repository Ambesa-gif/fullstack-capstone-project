const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const authRoutes = require("./routes/authRoutes");
const activityRoutes = require("./routes/activityRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);

app.get("/", (req, res) => {
  res.send("Footprint Logger API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
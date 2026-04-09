const express = require("express");
const app = express();

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is working ✅");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
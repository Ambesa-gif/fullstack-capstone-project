const express = require("express");
const router = express.Router();

const items = [
  {
    id: 1,
    name: "Chair",
    category: "Furniture",
    condition: "Good",
    posted_by: "John",
    zipcode: "10001",
    date_added: "2024-01-01",
    age_days: 10,
    age_years: 0,
    description: "Wooden chair",
    image: "chair.jpg"
  }
];

router.get("/api/gifts", (req, res) => {
  res.json(items);
});

router.get("/api/gifts/:id", (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  res.json(item);
});

module.exports = router;
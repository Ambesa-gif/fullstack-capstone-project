const express = require("express");
const router = express.Router();

const items = [
  { name: "Chair", category: "Furniture" },
  { name: "Laptop", category: "Electronics" }
];

router.get("/", (req, res) => {
  const category = req.query.category;
  const results = items.filter(i => i.category === category);
  res.json(results);
});

module.exports = router;
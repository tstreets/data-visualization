const express = require("express");

const app = express();

const candySold = [
  "Twizzlers",
  "Twizzlers",
  "Kit-Kat",
  "Chocolate",
  "Honeybun",
  "Honeybun",
  "Honeybun",
  "Honeybun",
  "Honeybun",
  "Honeybun",
  "Honeybun",
  "Honeybun",
  "Honeybun",
];

app.get("/api/candysold", function (req, res) {
  res.status(200).json({ candySold: candySold });
});

const port = process.env.PORT || 3114;
app.listen(port);

console.log(`http://localhost:${port}`);

module.exports = app;

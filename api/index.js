const express = require("express");

const app = express();

app.use(express.json());

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

app.post("/api/candysold/new", function (req, res) {
  candySold.push(req.body.candyName);
  res.status(200).json({ candySold: candySold });
});

const port = process.env.PORT || 3114;
app.listen(port);

console.log(`http://localhost:${port}`);

module.exports = app;

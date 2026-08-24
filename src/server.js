const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    name: "VINCENZO BOT",
    status: "online",
    version: "1.0.0",
    message: "VINCENZO server is running."
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("=================================");
  console.log("      VINCENZO BOT SERVER");
  console.log("=================================");
  console.log(`Server running on port ${PORT}`);
});

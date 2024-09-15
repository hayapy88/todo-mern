const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

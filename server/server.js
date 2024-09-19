const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const routes = require("./routes/routes");
app.use("/api/v1/todo", routes);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

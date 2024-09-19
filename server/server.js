const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const routes = require("./routes/routes");

app.use(cors());

app.use("/api/v1/todo", routes);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const routes = require("./routes/routes");

app.use(cors());
app.use("/api/v1/todo", routes);

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
  } catch (error) {
    console.log("Error starting server: ", error);
  }
}
startServer();

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use("/api/v1/todo", routes);

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
  } catch (error) {
    console.log("Error starting server: ", error);
  }
}
startServer();

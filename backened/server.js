const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

mongoose.connect("mongodb://127.0.0.1:27017/digitizeApp")
  .then(() => console.log("Database Connected"));

app.listen(5500, () => {
  console.log("Server running on port 5500");
});

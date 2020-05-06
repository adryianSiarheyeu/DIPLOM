const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(cors());

// Import routes
const authRoutes = require("./routes/auth");

// Constants
const { PORT } = require("./config/index.js");

//DB
const mongoose = require("mongoose");
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to mongo")
);

// Middleware
app.use(express.json());

// Routes Middleware
app.use("/api/auth", authRoutes);
app.listen(PORT, (req, res) => {
  console.log(`Server is running at ${PORT}`);
});

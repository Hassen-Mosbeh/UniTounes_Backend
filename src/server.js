const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const connectDB = require("./src/config/dbConnection");

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./src/routes/authRoutes"));

// Error handler (optional, if you add one later)
// const errorHandler = require("./src/middleware/errorHandler");
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

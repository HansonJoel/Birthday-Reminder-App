require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const startBirthdayJob = require("./services/birthdayJob");

const app = express();

// DB
connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");

// Routes
app.use(userRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

// Start cron job
startBirthdayJob();

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

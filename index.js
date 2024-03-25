const express = require("express");
const mongoose = require("mongoose");
const useRoutes = require("./routes.js");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// corse permission from vite project to 5000 server
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// mongodb+srv://bhoihitesh1492:$*Hitesh%40123*$@foodhunt.eq6n1ez.mongodb.net/
// connection with mongodb
mongoose.connect("mongodb+srv://bhoihitesh1492:$*Hitesh%40123*$@foodhunt.eq6n1ez.mongodb.net/foodhunt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
});
// Initial route
app.use("/api", useRoutes);

// Define a welcome route
app.get("/api", (req, res) => {
  res.send("Welcome to the API!");
});
// server starting port number
app.listen(port, () => {
  console.log(`Server listning on port ${port}`);
});

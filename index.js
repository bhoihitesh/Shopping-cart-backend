const express = require("express");
const mongoose = require("mongoose");
const useRoutes = require("./routes.js");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://foodhuntshop.netlify.app"
//   );
//   next();
// });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://foodhuntshop.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(cors());
// connection with mongodb local database
// mongoose.connect(
//   "mongodb://localhost:27017/react-shopping-cart",
//   {
//     serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
//   }
// );
// connection with mongodb live database
mongoose.connect(
  "mongodb+srv://bhoihitesh1492:$*Hitesh%40123*$@foodhunt.eq6n1ez.mongodb.net/foodhunt",
  {
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  }
);
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

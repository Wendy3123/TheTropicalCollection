import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./controllers/productsRoutes.js";
import connectDB from "./config/db.js";
connectDB();

// Initialize the app object.
const app = express();

app.use("/api/products", router);

// Create a homepage route.

app.get("/", function (req, res) {
  // This gets sent to the client

  // (your web browser most likely!)
  res.send("Hello world");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});

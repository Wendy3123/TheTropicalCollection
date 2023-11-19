import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
connectDB();
import router from "./controllers/productsRoutes.js";


const app = express();
app.use("/api/products", router);

// Create a homepage route.
app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});

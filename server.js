import express from "express";
import dotenv from "dotenv";

// const categoriesRoutes = require("./routes/categories");
import categoriesRoutes from "./routes/categories.js";

// Configuration file
dotenv.config( { path: "./config/config.env" } );

const app = express();

// Middleware
app.use("/api/v1/categories/", categoriesRoutes);




app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
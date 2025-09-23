import express from "express";
import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// Morgan Logger
import morgan from "morgan";
import * as rfs from "rotating-file-stream";

// const categoriesRoutes = require("./routes/categories");
import categoriesRoutes from "./routes/categories.js";

import { logger } from "./middleware/logger.js"


// Configuration file
dotenv.config( { path: "./config/config.env" } );

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename, "Log");

// console.log(__dirname);
// console.log(__filename);

// Create stream 
const accessLogStream = rfs.createStream("access.log", {
  size : "10M", // rotate every 10 MegaBytes written
  interval : "1d", // rotate daily
  compress : "gzip", // compress rotated files
  path : path.join(__dirname, "Log")
});

const app = express();

// Create Middleware
app.use(logger);

// Use Morgan Logger Middleware
app.use(morgan('combined', { stream: accessLogStream }));

// Middleware
app.use("/api/v1/categories/", categoriesRoutes);




app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
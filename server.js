import express from "express";
import dotenv from "dotenv";

// Configuration file
dotenv.config( { path: "./config/config.env" } );

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
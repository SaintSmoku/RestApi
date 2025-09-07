import express from "express";
import dotenv from "dotenv";

// Configuration file
dotenv.config( { path: "./config/config.env" } );

const app = express();

app.get("/api/v1/categories", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : "All categories are here"
  })
});

app.post("/api/v1/categories", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : "Create new category..."
  })
});

app.put("/api/v1/categories/:id", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : `Change the category on id ${req.params.id}`
  })
});

app.delete("/api/v1/categories/:id", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : `Delete the category id ${req.params.id}`
  })
});

app.get("/api/v1/categories/:id", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : `Get the category id ${req.params.id}`
  })
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
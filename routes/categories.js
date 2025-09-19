import express from "express";
import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : "All categories are here"
  })
});

router.post("/", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : "Create new category..."
  })
});

router.put("/:id", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : `Change the category on id ${req.params.id}`
  })
});

router.delete("/:id", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : `Delete the category id ${req.params.id}`
  })
});

router.get("/:id", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({
    success : true,
    data : `Get the category id ${req.params.id}`
  })
});

// module.exports = router;

export default router;
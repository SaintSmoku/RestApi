import express from "express";
import { Router } from 'express';
import { getCategory, 
         getCategories, 
         deleteCategory, 
         updateCategory, 
         createCategory } from '../controller/controller.js';

const router = express.Router();


router.route("/")
      .get(getCategories)
      .post(createCategory);

router.route("/:id")
      .get(getCategory)
      .put(updateCategory)
      .delete(deleteCategory);

// module.exports = router;

export default router;
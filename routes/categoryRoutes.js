var express = require("express");
var router = express.Router();
const Category = require("../models/category");

// Route to show all categories
router
  .route("/")
  .get(async (req, res) => {
  // Show all categories
  try {
    const categories = await Category.find();
    res.render("categories", { categories });
  } catch(err) {
    console.log(err);
    res.status(500).send("Error fetching categories");
  }
});

// Routes for creating a new category
router
  .route("/create")
  .get(async (req, res) => {
    // Show the page for creating a new category
  })
  .post(async (req, res) => {
    // Create a new category
  });

// Routes for updating a category
router
  .route("/:id/update")
  .get(async (req, res) => {
    // Show the page for updating a category
  })
  .post(async (req, res) => {
    // Update a category
  });

// Route to delete a category
router
  .route("/:id/delete")
  .post(async (req, res) => {
  // Delete a category
});

module.exports = router;

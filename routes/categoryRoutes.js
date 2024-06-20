var express = require("express");
var router = express.Router();
const Category = require("../models/category");

router
  .route("/")
  .get(async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("categories", { categories });
  } catch(err) {
    console.log(err);
    res.status(500).send("Error fetching categories");
  }
});

router
  .route("/create")
  .get(async (req, res) => {
    res.render("create_category");
  })
  .post(async (req, res) => {
    // Create a new category
    const { name, description } = req.body;
    const newCategory = new Category({
      name,
      description
    });

    try {
      await newCategory.save();
      res.redirect("/categories");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while saving new category!");
    }
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

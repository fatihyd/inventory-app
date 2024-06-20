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

router
  .route("/:id/update")
  .get(async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.render("update_category", { category });
  })
  .post(async (req, res) => {
    // Update a category
    const { name, description } = req.body;

    const category = await Category.findById(req.params.id);

    category.name = name;
    category.description = description;

    await category.save();
    res.redirect("/categories");
  });

router
  .route("/:id/delete")
  .post(async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect("/categories");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while deleting a category!");
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();
const Item = require("../models/item");
const Category = require("../models/category");

router
  .route("/")
  .get(async (req, res) => {
  try {
    const items = await Item.find().populate("category");
    res.render("items", { items });
  } catch(err) {
    console.log(err);
    res.status(500).send("Error fetching items");
  }
});

router
  .route("/create")
  .get(async (req, res) => {
    const categories = await Category.find();
    res.render("create_item", { categories });
  })
  .post(async (req, res) => {
    const { name, description, category, price, number_in_stock } = req.body;

    const categoryObj = await Category.findById(category);

    const newItem = new Item({
      name,
      description,
      category: categoryObj,
      price,
      number_in_stock
    });

    try {
      await newItem.save();
      res.redirect("/items");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error while saving new item!");
    }
  });

// Routes for updating an item
router
  .route("/:id/update")
  .get(async (req, res) => {
    // Show the page for updating an item
  })
  .post(async (req, res) => {
    // Update an item
  });

router
  .route("/:id/delete")
  .post(async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.redirect("/items");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error while deleting an item!");
  }
});

module.exports = router;

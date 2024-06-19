var express = require("express");
var router = express.Router();
const Item = require("../models/item");

// Route to show all items
router
  .route("/")
  .get(async (req, res) => {
  // Show all items
  try {
    const items = await Item.find();
    res.render("items", { items });
  } catch(err) {
    console.log(err);
    res.status(500).send("Error fetching items");
  }
});

// Routes for creating a new item
router
  .route("/create")
  .get(async (req, res) => {
    // Show the page for creating a new item
  })
  .post(async (req, res) => {
    // Create a new item
  });

// Route to show a specific item
router
  .route("/:id")
  .get(async (req, res) => {
  // Show the detailed item page
  try {
    const item = await Item.findById(req.params.id);
    res.render("item", { item });
  } catch(err) {
    console.log(err);
    res.status(500).send("Error fetching item");
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

// Route to delete an item
router
  .route("/:id/delete")
  .post(async (req, res) => {
  // Delete an item
});

module.exports = router;

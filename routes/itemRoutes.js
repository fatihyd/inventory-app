var express = require("express");
var router = express.Router();

// Route to show all items
router
  .route("/")
  .get(async (req, res) => {
  // Show all items
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

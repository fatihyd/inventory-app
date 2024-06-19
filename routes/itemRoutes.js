var express = require("express");
var router = express.Router();

// Route to show all items
router
  .route("/")
  .get(async (req, res, next) => {
  // Show all items
});

// Routes for creating a new item
router
  .route("/create")
  .get(async (req, res, next) => {
    // Show the page for creating a new item
  })
  .post(async (req, res, next) => {
    // Create a new item
  });

// Route to show a specific item
router
  .route("/:id")
  .get(async (req, res, next) => {
  // Show the detailed item page
});

// Routes for updating an item
router
  .route("/:id/update")
  .get(async (req, res, next) => {
    // Show the page for updating an item
  })
  .patch(async (req, res, next) => {
    // Update an item
  });

// Route to delete an item
router
  .route("/:id/delete")
  .delete(async (req, res, next) => {
  // Delete an item
});

module.exports = router;

var express = require("express");
var router = express.Router();

// Route to show all categories
router
  .route("/")
  .get(async (req, res, next) => {
  // Show all categories
});

// Routes for creating a new category
router
  .route("/create")
  .get(async (req, res, next) => {
    // Show the page for creating a new category
  })
  .post(async (req, res, next) => {
    // Create a new category
  });

// Route to show a specific category
router
  .route("/:id")
  .get(async (req, res, next) => {
  // Show the detailed category page
});

// Routes for updating a category
router
  .route("/:id/update")
  .get(async (req, res, next) => {
    // Show the page for updating a category
  })
  .patch(async (req, res, next) => {
    // Update a category
  });

// Route to delete a category
router
  .route("/:id/delete")
  .delete(async (req, res, next) => {
  // Delete a category
});

module.exports = router;

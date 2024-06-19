var express = require("express");
var router = express.Router();
const Item = require("../models/item");
const Category = require("../models/category");

router.get("/", async(req, res) => {
  const num_of_categories = await Category.countDocuments({});
  
  let num_of_items = 0;
  const items = await Item.find();
  items.forEach(item => {
    num_of_items += item.number_in_stock;
  });

  res.render("index", { num_of_categories, num_of_items });
});

module.exports = router;

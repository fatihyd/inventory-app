#! /usr/bin/env node

console.log(
  'This script populates some test categories and items to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category");
const Item = require("./models/item");

const categories = [];
const items = [];
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];
main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createItems();
  console.log("Debug: Closing mongoose");
  await mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(
  index,
  name,
  description
) {
  const categoryDetail = {
    name,
    description,
  };

  const category = new Category(categoryDetail);
  await category.save();
  categories[index] = category;
}

async function itemCreate(
  index,
  name,
  description,
  category,
  price,
  number_in_stock
) {
  const itemDetail = {
    name,
    description,
    category,
    price,
    number_in_stock,
  };

  const item = new Item(itemDetail);
  await item.save();
  items[index] = item;
}

async function createCategories() {
  console.log("Adding Categories");
  await Promise.all([
    categoryCreate(
      0,
      "Classic",
      "Seasoned veterans..."
    ),
    categoryCreate(
      1,
      "Evil",
      "Misfits..."
    ),
    categoryCreate(
      2,
      "Miscellaneous",
      "Oddballs and eccentrics..."
    ),
  ]);
}

async function createItems() {
  console.log("Adding items");
  await Promise.all([
    itemCreate(
      0,
      "Woody",
      "A cowboy doll who takes his leadership role way too seriously.",
      categories[0],
      15,
      200
    ),
    itemCreate(
      1,
      "Buzz Lightyear",
      "A space ranger who thinks he can actually fly.",
      categories[0],
      10,
      1000
    ),
    itemCreate(
      2,
      "Mr. Potato Head",
      "A grumpy spud with a chip on his shoulder.",
      categories[0],
      5,
      2000
    ),
    itemCreate(
      3,
      "Slinky",
      "A wiener dog that's more spring than spaniel.",
      categories[0],
      10,
      500
    ),
    itemCreate(
      4,
      "Babyface",
      "A baby doll head on a spider body, perfect for nightmares.",
      categories[1],
      5,
      1
    ),
    itemCreate(
      5,
      "Lots-o'-Huggin' Bear",
      "A strawberry-scented bear with a heart as rotten as spoiled fruit.",
      categories[1],
      50,
      1500
    ),
    itemCreate(
      6,
      "Etch",
      "An Etch A Sketch that’s a master of quick draws.",
      categories[2],
      5,
      10000
    ),
    itemCreate(
      7,
      "Rex",
      "A terrified T-Rex who couldn't scare a mouse.",
      categories[0],
      10,
      500
    ),
    itemCreate(
      8,
      "Wheezy",
      "A penguin toy who sounds like he swallowed a kazoo.",
      categories[2],
      5,
      100
    ),
  ]);
}
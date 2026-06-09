// Grocery catalog for FoodVilla
// price is stored in paise (₹ * 100) so it matches the food item format used in Foodlist/Cart

import tomatoes from "../../img/grocery/tomatoes.png";
import bananas from "../../img/grocery/bananas.png";
import milk from "../../img/grocery/milk.png";
import bread from "../../img/grocery/bread.png";
import eggs from "../../img/grocery/eggs.png";
import rice from "../../img/grocery/rice.png";
import apples from "../../img/grocery/apples.png";
import potatoes from "../../img/grocery/potatoes.png";
import onions from "../../img/grocery/onions.png";
import cheese from "../../img/grocery/cheese.png";
import oil from "../../img/grocery/oil.png";
import coffee from "../../img/grocery/coffee.png";

export const GROCERY_CATEGORIES = [
  "All",
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Staples",
  "Beverages",
];

const GroceryData = [
  {
    id: "g-tomatoes",
    name: "Fresh Tomatoes (1 kg)",
    price: 4000,
    description: "Farm fresh, juicy red tomatoes.",
    category: "Fruits & Vegetables",
    img: tomatoes,
    isGrocery: true,
  },
  {
    id: "g-bananas",
    name: "Bananas (1 dozen)",
    price: 5500,
    description: "Naturally ripened sweet bananas.",
    category: "Fruits & Vegetables",
    img: bananas,
    isGrocery: true,
  },
  {
    id: "g-apples",
    name: "Red Apples (1 kg)",
    price: 18000,
    description: "Crisp and juicy red apples.",
    category: "Fruits & Vegetables",
    img: apples,
    isGrocery: true,
  },
  {
    id: "g-potatoes",
    name: "Potatoes (1 kg)",
    price: 3500,
    description: "Everyday cooking potatoes.",
    category: "Fruits & Vegetables",
    img: potatoes,
    isGrocery: true,
  },
  {
    id: "g-onions",
    name: "Onions (1 kg)",
    price: 4500,
    description: "Fresh red onions.",
    category: "Fruits & Vegetables",
    img: onions,
    isGrocery: true,
  },
  {
    id: "g-milk",
    name: "Milk (1 L)",
    price: 6000,
    description: "Full cream fresh dairy milk.",
    category: "Dairy & Eggs",
    img: milk,
    isGrocery: true,
  },
  {
    id: "g-eggs",
    name: "Eggs (12 pcs)",
    price: 8500,
    description: "Farm fresh brown eggs.",
    category: "Dairy & Eggs",
    img: eggs,
    isGrocery: true,
  },
  {
    id: "g-cheese",
    name: "Cheddar Cheese (200 g)",
    price: 14000,
    description: "Rich and creamy cheddar block.",
    category: "Dairy & Eggs",
    img: cheese,
    isGrocery: true,
  },
  {
    id: "g-rice",
    name: "Basmati Rice (5 kg)",
    price: 52000,
    description: "Long grain premium basmati rice.",
    category: "Staples",
    img: rice,
    isGrocery: true,
  },
  {
    id: "g-bread",
    name: "Whole Wheat Bread",
    price: 4000,
    description: "Soft and healthy whole wheat bread.",
    category: "Staples",
    img: bread,
    isGrocery: true,
  },
  {
    id: "g-oil",
    name: "Sunflower Oil (1 L)",
    price: 16000,
    description: "Light and healthy cooking oil.",
    category: "Staples",
    img: oil,
    isGrocery: true,
  },
  {
    id: "g-coffee",
    name: "Instant Coffee (100 g)",
    price: 24500,
    description: "Rich aromatic instant coffee.",
    category: "Beverages",
    img: coffee,
    isGrocery: true,
  },
];

export default GroceryData;

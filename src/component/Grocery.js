import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { additem } from "../utils/cartslice";
import GroceryData, { GROCERY_CATEGORIES } from "./Mocks/GroceryData";

const GroceryCard = ({ item }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(additem(item));
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-3">
      <div className="w-full h-36 overflow-hidden rounded-lg bg-slate-50 flex items-center justify-center">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 mt-3">
        <h3 className="font-semibold text-sm sm:text-base text-gray-800">
          {item.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="font-bold text-orange-600">
          ₹{(item.price / 100).toFixed(2)}
        </span>
        <button
          onClick={handleAdd}
          className={`text-xs sm:text-sm font-medium px-3 py-1.5 rounded-md shadow transition-colors ${
            added
              ? "bg-green-600 text-white"
              : "bg-orange-600 hover:bg-orange-500 text-white"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart +"}
        </button>
      </div>
    </div>
  );
};

const Grocery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const cartItems = useSelector((store) => store.cart.items);

  const visibleItems =
    activeCategory === "All"
      ? GroceryData
      : GroceryData.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Grocery Store</h1>
          <p className="text-sm text-gray-500">
            Fresh groceries delivered to your door.
          </p>
        </div>
        <Link
          to="/cart"
          className="self-start sm:self-auto bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
        >
          🛒 View Cart ({cartItems.length})
        </Link>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {GROCERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              activeCategory === cat
                ? "bg-orange-600 text-white border-orange-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleItems.map((item) => (
          <GroceryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;

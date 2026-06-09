import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TempShimmer from "./TempShimmer";
import Restaurant from "./Restaurant";
import { filterdata } from "../utils/helper";
import useOnline from "../utils/useOnline";

// 🔹 Import mocked restaurant list
import { RestaurantsList } from "../Constant"; // adjust path if needed

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const getdata = () => {
    try {
      setLoading(true);

      // ✅ Use mocked data directly
      const data = RestaurantsList;
      console.log("Mock RestaurantsList:", data);

      const cards = data?.data?.cards || [];

      // 🔹 Robust extraction (Swiggy-safe)
      const restaurantList =
        cards
          .map(
            (c) =>
              c?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
          .find(Boolean) || [];

      console.log("Extracted restaurants:", restaurantList);

      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    } catch (err) {
      console.error("Error loading restaurant list:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="text-center mt-10 text-red-600 font-semibold text-xl">
        Offline – Please check your internet connection
      </h1>
    );
  }

  if (loading) {
    return <TempShimmer variant="card" />;
  }

  return (
    <>
      {/* 🔍 Search Section */}
      <div className="p-3 bg-white my-2 flex flex-col sm:flex-row items-center gap-2 justify-center">
        <input
          type="text"
          data-testid="searchinput"
          placeholder="Search restaurants"
          className="h-[35px] w-52 md:w-72 text-center text-lg border-2 border-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 bg-orange-600 hover:bg-orange-400 text-white rounded-md"
          onClick={() => {
            const data = filterdata(search, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {/* 🍽 Restaurant Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="w-full max-w-xs sm:w-[45%] md:w-[30%] lg:w-[22%]"
            >
              <Restaurant {...restaurant.info} />
            </Link>
          ))
        ) : (
          <h2 className="text-center text-gray-600 font-medium text-lg">
            No restaurants found
          </h2>
        )}
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { RestMenu } from "../Constant"; // adjust path if needed

const useRestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);

      const data = RestMenu;
      console.log("Mock menu data:", data);

      /**
       * Extract REGULAR menu cards safely
       */
      const menuCards =
        data?.data?.cards
          ?.flatMap(
            (c) =>
              c?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
          )
          ?.filter(
            (c) =>
              c?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) || [];

      console.log("Extracted menu categories:", menuCards);

      setResMenu(menuCards);
    } catch (err) {
      console.error("Error loading menu:", err);
      setResMenu([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { resMenu, loading };
};

export default useRestaurantMenu;

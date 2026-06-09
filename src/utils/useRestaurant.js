import { useEffect, useState } from "react";
import { RestMenu } from "../Constant";
 // adjust path if needed

const useRestaurant = (id) => {
  const [ResDetails, setResDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const data = RestMenu;
      console.log("Mock restaurant detail data:", data);

      if (!data?.data?.cards) {
        setError("No restaurant data found");
        return;
      }

      /**
       * Swiggy keeps restaurant info inside a card like:
       * cards[x].card.card.info
       */
      const restaurantInfo =
        data.data.cards
          .map((c) => c?.card?.card?.info)
          .find(Boolean) || null;

      setResDetails(restaurantInfo);
    } catch (err) {
      console.error("Error loading restaurant details:", err);
      setError("Failed to load restaurant details");
      setResDetails(null);
    }
  }, [id]);

  return { ResDetails, error };
};

export default useRestaurant;

import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantCardContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );
  return <RestaurantCard restaurant={restaurant} />;
};

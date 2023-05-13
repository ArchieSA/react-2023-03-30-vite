import { Restaurant } from "../../components/Restaurant/Restaurant";
import {
  selectIsRestaurantLoading,
  selectRestaurantById,
} from "../../store/entities/restaurant/selectors";
import { fetchRestaurants } from "../../store/entities/restaurant/thunks/loadRestaurantIfNotExisted";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (isRestaurantLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};

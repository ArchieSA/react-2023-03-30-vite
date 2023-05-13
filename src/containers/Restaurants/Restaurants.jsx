import { Restaurants } from "../../components/Restaurants/Restaurants";
import {
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "../../store/entities/restaurant/selectors";
import { fetchRestaurants } from "../../store/entities/restaurant/thunks/loadRestaurantIfNotExisted";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantsContainer = () => {
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const restaurantIds = useSelector(selectRestaurantIds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (isRestaurantLoading) {
    return <div>Loading...</div>;
  }
  return <Restaurants restaurantIds={restaurantIds} />;
};

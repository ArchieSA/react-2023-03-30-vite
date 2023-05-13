import { Reviews } from "../../components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "../../store/entities/restaurant/selectors";
import { fetchRestaurants } from "../../store/entities/restaurant/thunks/loadRestaurantIfNotExisted";
import { selectIsReviewLoading } from "../../store/entities/review/selectors";
import { fetchReviewByRestaurantId } from "../../store/entities/review/thunks/loadReviewsByRestaurantIdIfNotExisted";
import { fetchUsers } from "../../store/entities/user/thunks/loadUserIfNotExisted";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(fetchReviewByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (!reviews?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Reviews reviews={reviews} />;
};

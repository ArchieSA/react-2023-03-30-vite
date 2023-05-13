import { LOADING_STATUS } from "../../../../constants/loading-status";
import { selectReviewIds } from "../../../../store/entities/review/selectors";
import { selectRestaurantById } from "../../../../store/entities/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviewByRestaurantId = createAsyncThunk(
  "review/fetchReviewByRestaurantId",
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();
    const restaurant = selectRestaurantById(state, { restaurantId });
    const reviewIds = selectReviewIds(state);

    if (
      restaurant &&
      restaurant.reviews.every((reviewId) => reviewIds.includes(reviewId))
    ) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return await response.json();
  }
);

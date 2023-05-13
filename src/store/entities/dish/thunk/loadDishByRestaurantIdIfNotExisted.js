import { LOADING_STATUS } from "../../../../constants/loading-status";
import { selectDishIds } from "../../../../store/entities/dish/selectors";
import {
  selectMenuByRestaurantId,
  selectRestaurantById,
} from "../../../../store/entities/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDishByRestaurantId = createAsyncThunk(
  "dish/fetchDishByRestaurantId",
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();
    const restaurant = selectRestaurantById(state, { restaurantId });
    const dishIds = selectDishIds(state);

    if (
      restaurant &&
      restaurant.menu.every((dishId) => dishIds.includes(dishId))
    ) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return await response.json();
  }
);

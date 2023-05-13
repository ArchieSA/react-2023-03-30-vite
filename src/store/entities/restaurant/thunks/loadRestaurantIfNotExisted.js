import { selectRestaurantIds } from "../../../../store/entities/restaurant/selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async (_, { getState, rejectWithValue }) => {
    if (selectRestaurantIds(getState()).length) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch("http://localhost:3001/api/restaurants/");

    return await response.json();
  }
);

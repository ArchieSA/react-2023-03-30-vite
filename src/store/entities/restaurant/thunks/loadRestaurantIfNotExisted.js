import { selectRestaurantIds } from "../selectors.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {LOADING_STATUS} from "../../../../constants/loading-status";

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

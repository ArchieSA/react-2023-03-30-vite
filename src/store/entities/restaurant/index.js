import { LOADING_STATUS } from "../../../constants/loading-status";
import { fetchRestaurants } from "../../../store/entities/restaurant/thunks/loadRestaurantIfNotExisted";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchRestaurants.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchRestaurants.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      restaurantEntityAdapter.setAll(state, payload);
    },
    [fetchRestaurants.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});

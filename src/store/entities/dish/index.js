import { LOADING_STATUS } from "../../../constants/loading-status";
import { fetchDishByRestaurantId } from "../../../store/entities/dish/thunk/loadDishByRestaurantIdIfNotExisted";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchDishByRestaurantId.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchDishByRestaurantId.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      dishEntityAdapter.setMany(state, payload);
    },
    [fetchDishByRestaurantId.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});

import { LOADING_STATUS } from "../../../constants/loading-status";
import { fetchReviewByRestaurantId } from "../../../store/entities/review/thunks/loadReviewsByRestaurantIdIfNotExisted";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchReviewByRestaurantId.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchReviewByRestaurantId.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      reviewEntityAdapter.setMany(state, payload);
    },
    [fetchReviewByRestaurantId.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});

import { LOADING_STATUS } from "../../../constants/loading-status";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) =>
  selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurants = (state) =>
  Object.values(selectRestaurantModule(state).entities);

export const selectMenuByRestaurantId = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectReviewsByRestaurantId = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).loadingStatus;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === LOADING_STATUS.inProgress;

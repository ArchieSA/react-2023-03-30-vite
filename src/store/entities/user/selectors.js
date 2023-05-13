import { LOADING_STATUS } from "../../../constants/loading-status";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

  export const selectUserIds = (state) => selectUserModule(state).ids;
  
  export const selectUserLoadingStatus = (state) =>
    selectUserModule(state).loadingStatus;
  
  export const selectIsUserLoading = (state) =>
    selectUserLoadingStatus(state) === LOADING_STATUS.inProgress;

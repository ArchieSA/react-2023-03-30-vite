import { selectUserIds } from "../selectors.js";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {LOADING_STATUS} from "../../../../constants/loading-status";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { getState, rejectWithValue }) => {
    if (selectUserIds(getState()).length) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const response = await fetch("http://localhost:3001/api/users/");

    return await response.json();
  }
);

/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "Info",
  initialState: {
    building: {
      name: "",
      rooms: 0
    }
  },
  reducers: {
    updateBuildingInfo(state, action) {
      state.building = action.payload;
    }
  }
});

const { actions, reducer } = configSlice;

export const { updateBuildingInfo } = actions;

export default reducer;

/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "Info",
  initialState: {
    building: {
      name: "",
      rooms: 0,
      floors: [],
      id: null
    },
    meetings: []
  },
  reducers: {
    updateBuildingInfo(state, action) {
      state.building = action.payload;
    },
    updateMeetings(state, action) {
      state.meetings = action.payload;
    }
  }
});

const { actions, reducer } = configSlice;

export const { updateBuildingInfo, updateMeetings } = actions;

export default reducer;

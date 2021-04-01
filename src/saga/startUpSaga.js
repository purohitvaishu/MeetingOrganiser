/* eslint-disable no-console */
/* eslint-disable max-len */
import { put, takeEvery } from "redux-saga/effects";
import { updateBuildingInfo, updateMeetings } from "../reducers/info";

function* buildingInfo(action) {
  try {
    yield put(updateBuildingInfo(action.payload));
    const data = localStorage.getItem("Scheduler");
    yield put(updateMeetings(JSON.parse(data)));
  } catch (error) {
    console.log(error);
  }
}

function* localValue(action) {
  try {
    yield put(updateMeetings(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* startSaga() {
  yield takeEvery("BUILDING_INFO", buildingInfo);
  yield takeEvery("LOCAL_STORAGE", localValue);
}

export default startSaga;

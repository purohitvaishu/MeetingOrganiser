/* eslint-disable no-console */
/* eslint-disable max-len */
import { put, takeEvery } from "redux-saga/effects";
import { updateBuildingInfo } from "../reducers/info";

function* buildingInfo(action) {
  try {
    yield put(updateBuildingInfo(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* startSaga() {
  yield takeEvery("BUILDING_INFO", buildingInfo);
}

export default startSaga;

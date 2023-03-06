import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addToy(action) {
  console.log("here in the addToy saga", action.payload);
  try {
    const response = yield axios.get("/api/toyview");
    yield axios.post("/api/addtoy", action.payload);
    yield put({ type: "SET_TOYS", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* addedToySaga() {
  yield takeLatest("ADD_TOY", addToy);
}

export default addedToySaga;

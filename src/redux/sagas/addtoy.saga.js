import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addToy(action) {
  console.log("here in the addToy saga", action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get("/api/toyview", config);
    yield axios.post("/api/addtoy", action.payload);
    yield put({ type: "SET_TOYS", payload: response.data });
    window.location.reload();
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* addedToySaga() {
  yield takeLatest("ADD_TOY", addToy);
}

export default addedToySaga;

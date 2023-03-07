import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

function* addedToySaga() {
  yield takeLatest("ADD_TOY", addToy);
  yield takeEvery("DELETE_TOY", deleteToy);
}

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
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* deleteToy(action) {
  console.log(action.payload);
  try {
    const toyToDelete = yield axios.delete(`/api/toyview/${action.payload}`);
    console.log("DELETE_TOY", toyToDelete.data);
  } catch (error) {
    console.log("Error deleting toy", error);
  }
}

export default addedToySaga;

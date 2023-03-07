import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* toySaga() {
  yield takeLatest("FETCH_TOY", fetchToy);
  yield takeLatest("ADD_TOY", addToy);
  yield takeEvery("DELETE_TOY", deleteToy);
  yield takeEvery("UPDATE_TOY", editToy);
}

function* fetchToy() {
  console.log("here in the fetchToy saga");
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const response = yield axios.get("/api/toyview", config);
    yield put({ type: "SET_TOYS", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
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
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const toyToDelete = yield axios.delete(
      `/api/toyview/${action.payload}`,
      config
    );
    console.log("DELETE_TOY", toyToDelete.data);
  } catch (error) {
    console.log("Error deleting toy", error);
  }
}

function* editToy(action) {
  console.log(action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    const toyToEdit = yield axios.put(`/api/toyview/${action.payload}`, config);
    console.log("UPDATE_TOY", toyToEdit.data);
  } catch (error) {
    console.log("Error editing toy", error);
  }
}

export default toySaga;

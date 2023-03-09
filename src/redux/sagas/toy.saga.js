import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* toySaga() {
  yield takeLatest("FETCH_TOY", fetchToy);
  yield takeLatest("ADD_TOY", addToy);
  yield takeEvery("DELETE_TOY", deleteToy);
  yield takeEvery("FAVORITE_TOY", favoriteToy);
  yield takeEvery("UNFAVORITE_TOY", favoriteToy);
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

// function* favoriteToy(action) {
//   try {
//     const config = {
//       headers: { "Content-Type": "application/json" },
//       withCredentials: true,
//     };
//     console.log("Favorite toy in toy saga", action.payload);
//     const toyToFavorite = yield axios.put(
//       `/api/toyview/${action.payload}`,
//       config
//     );
//     console.log("FAVORITE_TOY", toyToFavorite.data);
//   } catch (error) {
//     console.log("Error favoriting toy", error);
//   }
// }

function* favoriteToy(action) {
  try {
    if (action.type === "FAVORITE_TOY") {
      console.log("favoriteToy saga favorite payload:", action.payload);
      yield axios.put(`/api/toyview`, action.payload);
    } else if (action.type === "UNFAVORITE_TOY") {
      console.log("favoriteToy saga unfavorite payload:", action.payload);

      yield axios.put(`/api/toyview`, action.payload);
    }
    yield fetchToy({ type: "FETCH_TOY", payload: `${action.payload.id}` });
  } catch (error) {
    console.log("Error with favoriteToy put", error);
  }
}

export default toySaga;

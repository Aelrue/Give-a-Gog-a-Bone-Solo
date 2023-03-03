import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* addToy() {
  console.log("here in the addToy saga", action.payload);
  // try {
  //   const config = {
  //     headers: { "Content-Type": "application/json" },
  //     withCredentials: true,
  //   };

  //   // the config includes credentials which
  //   // allow the server session to recognize the user
  //   // If a user is logged in, this will return their information
  //   // from the server session (req.user)
  //   const response = yield axios.get("/api/addtoy", config);
  //   console.log("RESPONSE", response);
  //   // now that the session has given us a user object
  //   // with an id and username set the client-side user object to let
  //   // the client-side code know the user is logged in
  //   yield axios.post("/api/addtoy", action.payload);
  //   yield put({ type: "SET_TOYS", payload: response.data });
  // } catch (error) {
  //   console.log("User get request failed", error);
  // }
}

function* addedToySaga() {
  yield takeLatest("ADD_TOY", addToy);
}

export default addedToySaga;

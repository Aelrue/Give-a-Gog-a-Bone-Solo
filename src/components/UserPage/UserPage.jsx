import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />

      <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push("/addtoy");
        }}
      >
        Add Toy
      </button>
      <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push("/toyview");
        }}
      >
        View Added Toys
      </button>

      <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push("/communityentries");
        }}
      >
        Community Entries
      </button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

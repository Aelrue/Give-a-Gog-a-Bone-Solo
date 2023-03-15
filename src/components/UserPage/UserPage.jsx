import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserPage.css";

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
      {/* <div className="dog">
        <div className="body"></div>
        <div className="leg1"></div>
        <div className="leg2"></div>
        <div className="leg3"></div>
        <div className="leg4"></div>
        <div className="tail"></div>
        <div className="ear"></div>
        <div className="nose"></div>
        <div className="eyewhite"></div>
        <div className="pupil"></div>
      </div>
      <div className="bone">
        <div className="endleft1"></div>
        <div className="endleft2"></div>
        <div className="endright1"></div>
        <div className="endright2"></div>
      </div> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

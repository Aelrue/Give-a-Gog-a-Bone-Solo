import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Button } from "@material-ui/core";
import "./UserPage.css";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  // const toAddToy = (event) => {
  //   history.push("/addtoy");
  // };

  return (
    <div className="container">
      <div className="text">
        <h2>Welcome, {user.username}!</h2>
        {/* <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" /> */}

        {/* <Button
          variant="contained"
        
          onClick={toAddToy}
        >
          Add Toy
        </Button> */}
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
        <div className="image">
          <img src="../images/poodle2.png" alt="" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

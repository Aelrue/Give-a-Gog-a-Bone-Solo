import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
// import RegisterForm from "../RegisterForm/RegisterForm";

function LandingPage() {
  // const [heading, setHeading] = useState("Welcome");
  // const history = useHistory();

  // const onLogin = (event) => {
  //   history.push("/login");
  // };

  return (
    <div className="container">
      <div id="imageContainer"></div>
      {/* <h2>{heading}</h2> */}

      {/* <h1>Give a Dog a Bone</h1>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Looking for the perfect place to keep track of all the different
            toys your pooch enjoys? Here it is!
          </p>
          <p>Please create an account or log in to get started.</p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div> */}
    </div>
  );
}

export default LandingPage;

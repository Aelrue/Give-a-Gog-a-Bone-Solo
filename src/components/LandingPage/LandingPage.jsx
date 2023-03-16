import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";

function LandingPage() {
  // const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="landingPageContainer">
      <div className="header">
        <img src="../images/lake.png" alt="page" />
        <div id="title">
          <h1>Give a Dog a Bone</h1>
        </div>

        <div id="details">
          <p>
            Looking for the perfect place to keep track of all the different
            toys your pooch enjoys? Here it is!
          </p>
          <p>Please create an account or log in below to get started.</p>
        </div>
        <div className="register">
          <RegisterForm />
        </div>
        <div className="member">
          <h4>Already a Member?</h4>
          <button className="btn btn_sizeSm" onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

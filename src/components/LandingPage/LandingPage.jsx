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
    <div className="landingPageContainer">
      {/* <div id="header"></div>
       */}

      <div id="header">
        <img
          className="image-header"
          src="https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div id="title">
          <h1>Give a Dog a Bone</h1>
        </div>
      </div>

      {/* <div className="grid">
        <div className="grid-col grid-col_8"> */}
      <div id="details">
        <p>
          Looking for the perfect place to keep track of all the different toys
          your pooch enjoys? Here it is!
        </p>
        <p>Please create an account or log in to get started.</p>
        {/* </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div> */}
        {/* </div> */}
      </div>
    </div>

    // </div>
  );
}

export default LandingPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./AddToy.css";

function AddToy() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handlesubmit", activity);
    dispatch({
      type: "ADD_TOY",
      payload: [dispatch],
    });
  };

  return (
    <div className="buttons">
      <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push("/user");
        }}
      >
        Account Home
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

      <div className="addToyContainer">
        <p>Add a new toy to your account by following the prompts below!</p>

        <form>
          {/* <input required placeholder="Dog Name" type="text"></input>
          <br />

          <input required placeholder="Toy Name" type="text"></input>
          <br /> */}

          {/* the name that is passed with the form data is the name of the select tag 
          and the value is the value of the option chosen.*/}

          <label htmlFor="activity">Activity:</label>
          <select
            value={activity}
            onChange={(event) => setActivity(event.target.value)}
            id="activity"
            name="activity"
          >
            <option value="">Select </option>
            <option value="chew">Chew</option>
            <option value="cuddle">Cuddle</option>
            <option value="fetch">Fetch</option>
            <option value="puzzle">Puzzle</option>
            <option value="tug">Tug</option>
          </select>
          <br />
          {/* 
          <label htmlFor="texture">Toy Texture:</label>
          <select id="texture" name="texture">
            <option value="hard">Hard</option>
            <option value="rubbery">Rubbery</option>
            <option value="soft">Soft</option>
          </select>
          <br />

          <label htmlFor="features">Features:</label>
          <select id="features" name="features">
            <option value="xtough">Extra Tough</option>
            <option value="small">Fillable/Edible Parts</option>
            <option value="light_up">Light Up</option>
            <option value="no_stuffing">No Stuffing</option>
            <option value="no_squeaker">No Squeaker</option>
            <option value="scented_flavored">Scented/Flavored</option>
            <option value="squeaker">Squeaker</option>
            <option value="stuffing">Stuffing</option>
          </select>
          <br />

          <label htmlFor="dog_size">Dog Size:</label>
          <select id="dog_size" name="dog_size">
            <option value="mini">Mini</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
          <br />

          <input placeholder="Purchase Link" type="text"></input>
          <br />

          <input placeholder="Comments" type="text"></input>
          <br /> */}

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddToy;

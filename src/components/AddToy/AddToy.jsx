import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./AddToy.css";

function AddToy() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");
  const [texture, setTexture] = useState("");
  const [features, setFeatures] = useState("");
  const [dog_size, setDogSize] = useState("");
  const [dog_name, setDogName] = useState("");
  const [toy_name, setToyName] = useState("");
  const [brand_name, setBrandName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("in handlesubmit", features);
    dispatch({
      type: "ADD_TOY",
      payload: {
        dog_name,
        toy_name,
        brand_name,
        activity,
        texture,
        features,
        dog_size,
      },
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
          <input
            required
            placeholder="Dog Name"
            type="text"
            value={dog_name || ""}
            onChange={(event) => setDogName(event.target.value)}
          ></input>
          <br />

          <input
            required
            placeholder="Toy Name"
            type="text"
            value={toy_name || ""}
            onChange={(event) => setToyName(event.target.value)}
          ></input>
          <br />

          <input
            required
            placeholder="Brand Name"
            type="text"
            value={brand_name || ""}
            onChange={(event) => setBrandName(event.target.value)}
          ></input>
          <br />

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

          <label htmlFor="texture">Texture:</label>
          <select
            value={texture}
            onChange={(event) => setTexture(event.target.value)}
            id="texture"
            name="texture"
          >
            <option value="">Select </option>
            <option value="hard">Hard</option>
            <option value="soft">Soft</option>
            <option value="rubbery">Rubbery</option>
          </select>
          <br />

          <label htmlFor="features">Features:</label>
          <select
            value={features}
            onChange={(event) => setFeatures(event.target.value)}
            id="features"
            name="features"
          >
            <option value="">Select</option>
            <option value="xtough">Extra Tough</option>
            <option value="fillable_edible">Fillable/Edible Parts</option>
            <option value="light_up">Light Up</option>
            <option value="no_stuffing">No Stuffing</option>
            <option value="no_squeaker">No Squeaker</option>
            <option value="scented_flavored">Scented/Flavored</option>
            <option value="squeaker">Squeaker</option>
            <option value="stuffing">Stuffing</option>
          </select>
          <br />

          <label htmlFor="dog_size">Dog Size:</label>
          <select
            value={dog_size}
            onChange={(event) => setDogSize(event.target.value)}
            id="dog_size"
            name="dog_size"
          >
            <option value="">Select</option>
            <option value="mini">Mini</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
          <br />

          {/* <input placeholder="Purchase Link" type="text"></input>
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

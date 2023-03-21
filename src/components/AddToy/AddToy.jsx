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
  const [comment, setComment] = useState("");
  const [link, setLink] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [favorite] = useState(false);

  const handleSubmit = () => {
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
        comment,
        link,
        favorite,
        image_url,
      },
    });
    history.push("/toyview");
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
            defaultValue="Select"
            onChange={(event) => setActivity(event.target.value)}
            id="activity"
            name="activity"
          >
            <option disabled>Select</option>
            <option value="Chew">Chew</option>
            <option value="Cuddle">Cuddle</option>
            <option value="Fetch">Fetch</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Tug">Tug</option>
          </select>
          <br />

          <label htmlFor="texture">Texture:</label>
          <select
            defaultValue="Select"
            onChange={(event) => setTexture(event.target.value)}
            id="texture"
            name="texture"
          >
            <option disabled>Select </option>
            <option value="Hard">Hard</option>
            <option value="Soft">Soft</option>
            <option value="Rubbery">Rubbery</option>
          </select>
          <br />

          <label htmlFor="features">Features:</label>
          <select
            defaultValue="Select"
            onChange={(event) => setFeatures(event.target.value)}
            id="features"
            name="features"
          >
            <option disabled>Select</option>
            <option value="Extra Tough">Extra Tough</option>
            <option value="Fillable/Edible Parts">Fillable/Edible Parts</option>
            <option value="Light Up">Light Up</option>
            <option value="No Stuffing">No Stuffing</option>
            <option value="No Squeaker">No Squeaker</option>
            <option value="Scented/Flavored">Scented/Flavored</option>
            <option value="Squeaker">Squeaker</option>
            <option value="Stuffing">Stuffing</option>
          </select>
          <br />

          <label htmlFor="dog_size">Dog Size:</label>
          <select
            // value={dog_size}
            defaultValue="Select"
            onChange={(event) => setDogSize(event.target.value)}
            id="dog_size"
            name="dog_size"
          >
            <option disabled>Select</option>
            <option value="Mini">Mini</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
          <br />

          <input
            placeholder="Comments"
            type="text"
            value={comment || ""}
            onChange={(event) => setComment(event.target.value)}
          ></input>
          <br />

          <input
            placeholder="Purchase Link"
            type="text"
            value={link || ""}
            onChange={(event) => setLink(event.target.value)}
          ></input>
          <br />

          <p>OPTIONAL: Submit a URL to this toy's image below!</p>
          <input
            placeholder="Image Link"
            type="text"
            value={image_url || ""}
            onChange={(event) => setImageUrl(event.target.value)}
          ></input>
          <br />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div className="dog">
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
        <div className="tongue">
          <div className="tonguebody"></div>
        </div>
        <div className="bone">
          <div className="endleft1"></div>
          <div className="endleft2"></div>
          <div className="endright1"></div>
          <div className="endright2"></div>
        </div>
      </div>
    </div>
  );
}

export default AddToy;

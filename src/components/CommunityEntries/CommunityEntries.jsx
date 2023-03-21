import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CommunityEntries.css";
// import "./Loader.css";

function CommunityEntries() {
  const dispatch = useDispatch();
  const history = useHistory();
  const toys = useSelector((store) => store.toys);

  useEffect(() => {
    dispatch({ type: "FETCH_ALL" });
  }, []);

  return (
    <main>
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
            history.push("/addtoy");
          }}
        >
          Add Toy
        </button>

        <h1>Added Toys</h1>
        <div className="toy-container">
          {toys.map((toy) => {
            return (
              <div className="toys" key={toy.id}>
                <h3>Toy Name: {toy.toy_name}</h3>
                <img src={toy.image_url}></img>
                <p>Dog Name: {toy.dog_name}</p>
                <p>Brand Name: {toy.brand_name}</p>
                <p>Activity: {toy.activity}</p>
                <p>Texture: {toy.texture}</p>
                <p>Features: {toy.features}</p>
                <p>Dog Size: {toy.dog_size}</p>
                <p>Comments: {toy.comment}</p>
                <p>Purchase Link: {toy.link}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default CommunityEntries;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ToyView.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaw } from "@fortawesome/free-solid-svg-icons";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";

function ToyView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const toys = useSelector((store) => store.toys);

  useEffect(() => {
    dispatch({ type: "FETCH_TOY" });
  }, []);

  const deleteToy = (clickedId) => {
    dispatch({
      type: "DELETE_TOY",
      payload: clickedId,
    });
    dispatch({
      type: "FETCH_TOY",
    });
  };

  const favoriteToy = (clickedId) => {
    dispatch({
      type: "FAVORITE_TOY",
      payload: { clickedId, favorite: false },
    });
  };

  const unfavoriteToy = (clickedId) => {
    dispatch({
      type: "UNFAVORITE_TOY",
      payload: { clickedId, favorite: true },
    });
  };

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
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push("/communityentries");
          }}
        >
          Community Entries
        </button>
        <h1>Added Toys</h1>
        <div className="toy-container">
          {toys.map((toy) => {
            return (
              <div className="toys" key={toy.id}>
                {toy.favorite == false ? (
                  <IconButton onClick={(e) => unfavoriteToy(toy.id)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </IconButton>
                ) : (
                  <IconButton onClick={(e) => favoriteToy(toy.id)}>
                    <FontAwesomeIcon icon={faPaw} color="mediumvioletred" />
                  </IconButton>
                )}
                <IconButton button onClick={(e) => deleteToy(toy.id)}>
                  <DeleteForeverIcon fontSize="large" />
                </IconButton>
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

export default ToyView;

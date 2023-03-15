import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ToyView.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaw } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import Footer from "../Footer/Footer";

function ToyView() {
  const dispatch = useDispatch();
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
      payload: { clickedId, favorite: true },
    });
  };

  const unfavoriteToy = (clickedId) => {
    dispatch({
      type: "UNFAVORITE_TOY",
      payload: { clickedId, favorite: false },
    });
  };

  return (
    <main>
      <h1>Added Toys</h1>
      <div className="toy-container">
        {toys.map((toy) => {
          return (
            <div className="toys" key={toy.id}>
              {toy.favorite == true ? (
                <IconButton onClick={(e) => unfavoriteToy(toy.id)}>
                  <FontAwesomeIcon icon={faHeart} />
                </IconButton>
              ) : (
                <IconButton onClick={(e) => favoriteToy(toy.id)}>
                  <FontAwesomeIcon icon={faPaw} color="mediumvioletred" />
                </IconButton>
              )}
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
              <button onClick={(e) => deleteToy(toy.id)}>Delete Toy</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default ToyView;

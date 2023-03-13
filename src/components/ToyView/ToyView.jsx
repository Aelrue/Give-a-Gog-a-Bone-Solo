import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ToyView.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-regular-svg-icons";
// import PetsIcon from "@mui/icons-material/Pets";
// import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
// import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
// import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

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
      // payload: id,
    });
  };

  const favoriteToy = (clickedId) => {
    // console.log("favoriteToy dispatch", clickedId);
    dispatch({
      type: "FAVORITE_TOY",
      payload: { clickedId, favorite: true },
    });
    // dispatch({
    //   type: "FETCH_TOY",
    // payload: id,
    // });
  };

  const pawIcon = <FontAwesomeIcon icon={faPaw} />;

  const heartIcon = <FontAwesomeIcon icon={faHeart} />;

  const unfavoriteToy = (clickedId) => {
    dispatch({
      type: "UNFAVORITE_TOY",
      payload: { clickedId, favorite: false },
    });
    // dispatch({
    // type: "FETCH_TOY",
    // payload: id,
    // });
  };

  return (
    <main>
      <h1>Added Toys</h1>
      {toys.map((toy) => {
        return (
          <div className="toys" key={toy.id}>
            <>
              {toy.favorite == true ? (
                <FontAwesomeIcon onClick={(e) => unfavoriteToy(toy.id)}>
                  <FontAwesomeIcon icon="fa-paw" />
                </FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon onClick={(e) => favoriteToy(toy.id)}>
                  <FontAwesomeIcon icon="fa-heart" />
                </FontAwesomeIcon>
              )}
            </>
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
            {/* <FavoriteTwoToneIcon />
            <FavoriteBorderTwoToneIcon /> */}
            <button onClick={(e) => deleteToy(toy.id)}>Delete Toy</button>
          </div>
        );
      })}
    </main>
  );
}

export default ToyView;

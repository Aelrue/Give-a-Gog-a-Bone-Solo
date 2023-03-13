import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CommunityEntries() {
  const dispatch = useDispatch();

  const toys = useSelector((store) => store.toys);

  useEffect(() => {
    dispatch({ type: "FETCH_ALL" });
  }, []);

  return (
    <main>
      <h1>Added Toys</h1>
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
    </main>
  );
}

export default CommunityEntries;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ToyView() {
  const dispatch = useDispatch();

  const toys = useSelector((store) => store.toys);

  useEffect(() => {
    dispatch({ type: "FETCH_TOY" });
  }, [dispatch]);

  return (
    <div className="container">
      <p>Toy View Page</p>
      {JSON.stringify(toys)}
    </div>
  );
}

export default ToyView;

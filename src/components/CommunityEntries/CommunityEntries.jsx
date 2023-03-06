import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CommunityEntries() {
  const dispatch = useDispatch();

  const toys = useSelector((store) => store.toys);

  // useEffect(() => {
  //   dispatch({ type: "FETCH_TOY" });
  // }, [dispatch]);

  return (
    <div className="container">
      <p>Community Entries Page</p>
      {JSON.stringify(toys)}
    </div>
  );
}

export default CommunityEntries;

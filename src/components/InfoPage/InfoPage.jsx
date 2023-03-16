import React from "react";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
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
        <p>Info Page</p>
      </div>
    </div>
  );
}

export default InfoPage;

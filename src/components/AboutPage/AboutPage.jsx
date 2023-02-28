import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          Give a Dog a Bone is an application that can be used to create a
          record of your dog’s favorite toys. Here you have the ability to add
          comments to the toys you create, apply different tags for
          organization, and provide images and links. Other users can join in
          and see each other’s lists of toys and “like” the toys they are
          interested in.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

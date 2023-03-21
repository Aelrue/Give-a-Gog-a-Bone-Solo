import React, { useState, useEffect } from "react";
import "./Loading.css";

export default function Loader() {
  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 3000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }
}

return (
  <div className="loading">
    <div class="paw-print-1">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>

    <div class="paw-print-2">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>

    <div class="paw-print-3">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>

    <div class="paw-print-4">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>

    <div class="paw-print-5">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>

    <div class="paw-print-6">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>

    <div class="paw-print-7">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>

    <div class="paw-print-8">
      <div class="pad large"></div>
      <div class="pad small-1"></div>
      <div class="pad small-2"></div>
      <div class="pad small-3"></div>
      <div class="pad small-4"></div>
    </div>
  </div>
);

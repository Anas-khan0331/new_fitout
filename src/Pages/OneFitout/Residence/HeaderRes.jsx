import React from "react";
import "./css/HeaderRes.css";

export default function HeaderRes() {
  return (
    <>
      <div id="headerres-outer">
        <div id="headerres-inner">
          <img src="/assets/project9.png" />
        </div>
        <div id="headerres-overlay">
          <div id="headerres-overlay-inner">
            <h1 id="headerres-title">
              Residential <br />
              Fitouts
            </h1>
            <p id="headerres-blurb">
              Transforming houses into dream homes, we specialise in creating
              exceptional residential spaces —whether it’s a complete property
              makeover or enhancing a part of your home.
            </p>
          </div>
          <img id="res-dots" src="/assets/res-frame.png" />
        </div>
      </div>
    </>
  );
}

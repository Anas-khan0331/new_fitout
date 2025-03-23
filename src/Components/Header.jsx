import React from "react";
import "./css/Header.css";

export default function Header({
  id,
  source,
  type,
  width,
  height,
  heading,
  description,
}) {
  return (
    <>
      <div className={id}>
        <div id="header-outer" style={{}}>
          <div id="header-inner">
            <div id="header-media-outer">
              <div id="header-overlay">
                <div className="header-text-wrapper">
                  <p className="header-text">{heading}</p>
                  {description ? (
                    <p className="header-description">{description}</p>
                  ) : null}
                </div>
              </div>
              {type === "video" ? (
                <video
                  id="header-media"
                  src={source}
                  width={width}
                  height={height}
                  autoPlay
                  loop
                  muted
                />
              ) : (
                // <img
                //   id="header-media"
                //   src={source}
                //   width={width}
                //   height={height}
                // />
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

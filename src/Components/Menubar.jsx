import React from "react";
import "./css/Menubar.css";

export default function Menubar({ id, icon, barColor, textColor }) {
  return (
    <>
      <div className={id}>
        <div id="menubar-outer" style={{ width: "4.875rem" }}>
          <div id="menubar-inner">
            <img id="menubar-icon" src={icon} width="78px" height="78px" />
            <div id="bar" style={{ "--bar-color": barColor }}>
              <span id="menubar-title" style={{ "--text-color": textColor }}>
                DESINGN BY 1
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

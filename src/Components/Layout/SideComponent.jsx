import React, { useState } from "react";
import "../../Components/Layout/styles/Layout.css";
const SideComponent = ({
  minWidth = "58px",
  height = "100vh",
  background = "black",
  text = "1",
  color,
  fontSize = "14px",
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className="sideComponent_class"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minWidth: minWidth,
        height: height,
        color: isHovered ? "#fff" : color, // Change text color on hover        height: height,
        background: isHovered ? "#0B1215" : background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        cursor: "pointer",
        transition: "all 0.3s ease", // Smooth transition for all properties
      }}
    >
      <p
        style={{
          fontSize: fontSize,
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "5px",
          color: isHovered ? "#fff" : color,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default SideComponent;

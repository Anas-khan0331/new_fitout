import React from "react";

const SideComponent = ({
  minWidth = "58px",
  height = "100vh",
  background = "black",
  text = "1",
  color,
  fontSize = "14px",
}) => {
  return (
    <div
      className="sideComponent_class"
      style={{
        minWidth: minWidth,
        color: color,
        height: height,
        background: background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
      }}
    >
      <p
        style={{
          fontSize: fontSize,
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "3px",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default SideComponent;

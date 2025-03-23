import React, { useState } from "react";

const CustomButton = ({
  btnTxt,
  textTransform = "uppercase",
  fontSize = "12px",
  padding = "8px 15px 10px 15px",
  border = "1px solid #B51F29 ",
  backgroundColor = "transparent",
  color = "#B51F29",
  borderRadius = "0",
  margin,
  onClick,
  isIcon = false,
  iconSize = 10,
  Icon, //
  viewWidth,
  style,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      className="generic-btn"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textTransform: textTransform,
        fontSize: fontSize,
        letterSpacing: "0.7px",
        padding: padding,
        border: hover ? `1px solid #B51F29` : border,
        backgroundColor: hover ? "#B51F29" : backgroundColor,
        color: hover ? "white" : color,
        borderRadius: borderRadius,
        margin: margin,
        width: viewWidth <= 992 ? "100%" : "auto",
        transition: "background-color 0.3s ease, color 0.3s ease",
        gap: isIcon ? "5px" : "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <span style={{ display: "block", paddingBottom: "2px" }}>
        {isIcon && Icon && <Icon size={iconSize} />}{" "}
      </span>
      {/* Renders the React Icon with size */}
      <span style={{ display: "block" }}>{btnTxt}</span>
    </button>
  );
};

export default CustomButton;

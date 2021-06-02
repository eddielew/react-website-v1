import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  onClick,
}) => {
  const STYLES = ["btn--primary", "btn--outline"];
  const SIZES = ["btn--medium", "btn-large"];

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <Link to="/sign-up" className="btn-mobile">
        <button
          type={type}
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    </>
  );
};

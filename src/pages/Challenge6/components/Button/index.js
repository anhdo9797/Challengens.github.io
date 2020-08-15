import React from "react";

import "./button.scss";

const Button6 = ({ label, style }) => {
  return (
    <button className="button6" style={style}>
      {label}
    </button>
  );
};

export default Button6;

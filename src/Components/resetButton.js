import React from "react";

const resetButton = ({ onClick, isClicked }) => {
  return (
    <button onClick={onClick}>
      {isClicked ? "Thanks for clicking" : "Please Click me"}
    </button>
  );
};

export default resetButton;

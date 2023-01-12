import React from "react";

const searchFilter = ({ onChangeHandler }) => {
  return (
    <input
      type="search"
      placeholder="search ingredient"
      onChange={onChangeHandler}
    />
  );
};

export default searchFilter;

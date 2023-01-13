import React from "react";

const pizzaIngredients = ({ ingredient }) => {
  return (
    <div>
      <h1>Pizza Ingredients : </h1>
      {ingredient.map((recipe, index) => {
        return <li key={index}>{recipe}</li>;
      })}
    </div>
  );
};

export default pizzaIngredients;

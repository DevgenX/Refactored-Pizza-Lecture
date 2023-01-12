import React from "react";

const pizzaIngredients = ({ ingredient }) => {
  return (
    <div>
      {ingredient.map((ingredient, index) => {
        return (
          <ul key={index}>
            <li>{ingredient}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default pizzaIngredients;

import React from "react";

const pizzaForm = ({ Ingredients, setIngredients }) => {
  const handleSubmit = (e) => {
    const newIngredient = e.target[0].value;
    e.preventDefault();

    // return of an array
    setIngredients([...Ingredients, newIngredient]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Ingredient: </label>
        <input type="text" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default pizzaForm;

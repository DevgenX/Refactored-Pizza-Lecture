import React from "react";

// Pizza form

const pizzaForm = ({ Ingredients, setIngredients }) => {
  // Handles the submit event
  const handleSubmit = (e) => {
    // new ingredient is the value being passed-in in the input
    const newIngredient = e.target[0].value;
    e.preventDefault();

    // return of an array
    // setIngredients is from the state,
    // spread the values of the Ingredients array then add the new ingredient
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

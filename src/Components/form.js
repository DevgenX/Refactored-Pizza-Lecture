import React from "react";

// Pizza form

const pizzaForm = ({ Ingredients, setIngredients }) => {
  // Handles the submit event
  const handleSubmit = (e) => {
    // new ingredient is the value being passed-in in the input
    let newIngredient = e.target[0].value;
    e.preventDefault();
    // return of an array
    // setIngredients is from the state,
    // spread the values of the Ingredients array then add the new ingredient
    setIngredients([...Ingredients, newIngredient]);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Ingredient: </label>
        <input type="text" required id="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default pizzaForm;

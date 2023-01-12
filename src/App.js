import "./App.css";
import React, { useState, useEffect } from "react";
import SearchFilter from "./Components/searchFilter";
import PizzaIngredients from "./Components/pizzaIngredients";
import PizzaForm from "./Components/form";

const pizza = ["Pepperoni", "Anchovies", "Red Peppers", "Sausage"];

const App = () => {
  const [Ingredients, setIngredients] = useState(pizza);
  const [searchField, setSearchField] = useState("");
  const [filteredIngredients, setFilteredIngredients] = useState(Ingredients);

  // handles the input field from the page
  // set the value of the input to be the new searchField value using setSearchField
  const handleInputChange = (e) => {
    setSearchField(e.target.value);
  };

  // use Effect will fire when the whole application is rendered
  useEffect(() => {
    const newFilteredIngredients = Ingredients.filter((ingredient) => {
      return ingredient.toLowerCase().includes(searchField.toLowerCase());
    });
    // set the newFilteredIngredients to be the new filteredIngredients using setFilteredIngredients
    setFilteredIngredients(newFilteredIngredients);
    // When the app detected changes from Ingredients(when form was submitted or there is an input value, this effect will fire)
  }, [Ingredients, searchField]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchFilter onChangeHandler={handleInputChange} />
        <PizzaIngredients ingredient={filteredIngredients} />
        <PizzaForm
          Ingredients={filteredIngredients}
          setIngredients={setIngredients}
        />
      </header>
    </div>
  );
};

export default App;

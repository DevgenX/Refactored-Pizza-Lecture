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

  const handleInputChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    const newFilteredIngredients = Ingredients.filter((ingredient) => {
      return ingredient.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredIngredients(newFilteredIngredients);
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

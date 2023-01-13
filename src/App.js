import "./App.css";
import React, { useState, useEffect } from "react";
import SearchFilter from "./Components/searchFilter";
import PizzaIngredients from "./Components/pizzaIngredients";
import PizzaForm from "./Components/form";
import ResetButton from "./Components/resetButton";

const pizza = ["Pepperoni", "Anchovies", "Red Peppers", "Sausage"];

const App = () => {
  const [Ingredients, setIngredients] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredIngredients, setFilteredIngredients] = useState(Ingredients);
  const [isClicked, setIsClicked] = useState(false);

  // handles the input field from the page
  // set the value of the input to be the new searchField value using setSearchField
  const handleInputChange = (e) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };

  // handle fetch data gets the data from the pizza.json then use setIngredients to set the values
  const handleFetchData = async () => {
    const response = await fetch("http://localhost:3000/pizza");
    const pizzaData = await response.json();
    setIngredients(pizzaData[0].ingredients);
  };

  // Wrapped the invocation of handleFetchData on useEffect, so the data will not trigger infinite re-render
  useEffect(() => {
    handleFetchData();
  }, []);

  // handleClick flips the value of isClicked which is set to false initially.

  const handleClick = () => {
    // const flip = !isClicked;
    setIsClicked(!isClicked);
  };

  // This useEffect sets the value of Ingredients to be the initial value when the button is clicked
  // the array is called dependency array, whenever it is triggered then the useEffect will fire.
  useEffect(() => {
    setIngredients(pizza);
  }, [isClicked]);

  // use Effect will fire when the whole application is rendered
  useEffect(() => {
    const newFilteredIngredients = Ingredients.filter((ingredient) => {
      return ingredient.toLowerCase().includes(searchField);
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
        <ResetButton onClick={handleClick} isClicked={isClicked} />
      </header>
    </div>
  );
};

export default App;

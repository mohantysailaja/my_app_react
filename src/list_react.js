//test for code
import "./styles.css";
import React from "react";

var shoppingList = [
  "milk",
  "eggs",
  "bread",
  "flowers",
  "tomato",
  "butter",
  "soap"
];

export default function App() {
  function getBG(index) {
    if (index % 2 === 0) {
      return "yellow";
    }
    return "orange";
  }
  return (
    <div className="App">
      <h1>Print my Fisrt shopping list suing React</h1>
      <ul>
        {shoppingList.map((item, index) => {
          console.log(item);
          return (
            <li
              key={item}
              style={{ backgroundColor: getBG(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

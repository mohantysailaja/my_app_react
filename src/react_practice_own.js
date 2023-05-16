import React from "react";
import "./styles.css";
import { useState } from "react";

//var likeCounter = 0;
var insidecolor = "yellow";

export default function App() {
  var [userInput, SetUserInput] = useState("");
  //function for input
  function inputChangeHandler(event) {
    console.log(event.target.value);
    SetUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello Sambit and Aarush</h1>
      <input
        style={{ backgroundColor: insidecolor }}
        onChange={inputChangeHandler}
      ></input>
      <div>Welcome {userInput}</div>
    </div>
  );
}
/**
 * VISER - view -> Interact ->state in event -> handler -> Render
 */

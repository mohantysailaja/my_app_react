import "./styles.css";
import React from "react";
import { useState } from "react";

//adding javascript here
var headingText = "emoji interpreter";
var color = "green";
var wel = "welcome ";
//var user = "Aarush";
var welcolor = "pink";
//var user =prompt("please give me your name ");
var user = "Aarush";
//var likeCounter =0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newlikeCounterValue = likeCounter + 1; //processing
    setLikeCounter(newlikeCounterValue); //processing/output
    //  console.log("clicked",likeCounter);//output
    /* for (var i = 0; i <= 2; i++) {
      console.log("clicked",likeCounter);
    }*/
  }
  console.log("likecounter value ", likeCounter);

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1 style={{ backgroundColor: welcolor }}>
        {wel}
        {user}
      </h1>
      <h1>
        welcome <span style={{ backgroundColor: "pink" }}>{user}</span>
      </h1>
      <button onClick={likeClickHandler}>Like Me</button> {likeCounter}
    </div>
  );
}
/**
 * things to notice
 * class -->class name
 * style-->takes an object instaed of ""
 */

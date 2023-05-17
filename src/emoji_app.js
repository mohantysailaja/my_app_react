import "./styles.css";
import React from "react";
import { useState } from "react";

const emojiDictionary = {
  "🙂": "Slightly smiling face",
  "😀": "Smiling face",
  "😃": "Smiling face with big eyes",
  "😍": "Smiling face with heart eyes",
  "🥰": "Smiling face with hearts",
  "🤖": "Robot"
};
//console.log(Object.keys(emojiDictionary))
var emojiWeKnow = Object.keys(emojiDictionary); 

export default function App() {
  const [meaning, setMaening] = useState("");
  // const[meaning,setMeaning] =useState("translation will appear");
  function emojiInputHandler(event) {//processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //validate if not in our database
    if (meaning === undefined) {
      meaning = "we don't have meaning for this in our database";
    }
    // console.log(meaning);
    setMaening(meaning);//react call to show output
  }
  function emojiClickHandler(emoji){//processing
    var meaning = emojiDictionary[emoji];
    setMaening(meaning);//react call to show output
   // console.log(emoji);
   
  }
  // function emojiClickHandler(inputEmoji){
  //   setMaening(emojiDictionary[inputEmoji]);
  // }
  return (
    <div className="App">
      <h1>My First React Emoji App</h1>
      <input onChange={emojiInputHandler} />
      <h2>meaning:{meaning}</h2>  
      {/*Actual output set by React using UseState  */}
      <h3>Emoji we know in our datanase dictionary</h3>

      {emojiWeKnow.map(function(emoji){   
        return( 
        <span onClick={()=> emojiClickHandler(emoji)}
        style={{fontSize:"3rem",padding:"0.8rem",cursor:"pointer"}} key={emoji}> {emoji} </span>
        );
      })}

    
    </div>
  );
}

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

export default function App() {
  const [meaning, setMaening] = useState("");
  // const[meaning,setMeaning] =useState("translation will appear");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    //validate if not in our database
    if (meaning === undefined) {
      meaning = "we don't have meaning for this in our database";
    }
    // console.log(meaning);
    setMaening(meaning);
  }
  // function emojiClickHandler(inputEmoji){
  //   setMaening(emojiDictionary[inputEmoji]);
  // }
  return (
    <div className="App">
      <h1>My First React Emoji App</h1>
      <input onChange={emojiInputHandler} />
      <div>meaning:{meaning}</div>
      <div></div>
    </div>
  );
}

//.import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import jackie from "./profile.png";



function App() {
 // use shorthand react.fragment for conditional rendering terinary statement
 const [emotion, setEmotion] = useState("happy");
 console.log(emotion);
 return (
  <>
    <h1>Current emotion is { emotion } </h1>
    <button onClick={() => setEmotion("HAPPY")}>Be Happy</button>
    <button onClick = {() => setEmotion("Frustrated")}>Change Emotion</button>
    <button onClick = {() => setEmotion("Enthusatic")}>Enthuse</button>
  </>
 );
}

export default App;

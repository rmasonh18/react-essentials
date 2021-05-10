//.import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
//import jackie from "./profile.png";



function App() {
 // use shorthand react.fragment for conditional rendering terinary statement
 const [emotion, setEmotion] = useState("happy");
 console.log(emotion);

 //useEffect
 useEffect(() => {
   console.log(`It is ${emotion} around here`);
 }, [emotion]);
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

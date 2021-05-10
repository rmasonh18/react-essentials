//.import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
//import jackie from "./profile.png";



function App() {
 // use shorthand react.fragment for conditional rendering terinary statement
 const [emotion, setEmotion] = useState("happy");
 const [secondary, setSecondary] = useState("Tired");


 console.log(emotion);

 //useEffect
 useEffect(() => {
   console.log(`It is ${emotion} around here`);
 }, [emotion]);
 useEffect(() => {
   console.log(`It is ${secondary} around here`);
 } ,[secondary]);
 return (
  <>
    <h1>Current emotion is { emotion } not { secondary} </h1>
    <h1>guess</h1>
    <button onClick={() => setEmotion("HAPPY")}>Be Happy</button>
    <button onClick = {() => setEmotion("Frustrated")}>Change Emotion</button>
    <button onClick = {() => setSecondary("CRABBY")}>Make Crabby</button>
   
   
    <button onClick = {() => setEmotion("Enthusatic")}>Enthuse</button>
  </>
 );
}

export default App;

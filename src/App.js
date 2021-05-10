//.import logo from './logo.svg';
import React, { useReducer } from 'react';
import './App.css';
//import jackie from "./profile.png";



function App() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false);
  
 
  return(
    <>
      <input 
      type ="checkbox" 
      value={checked}
      onChange={toggle}
      />
      <p> {checked ? "checked" : "not checked"}</p>
    </>
  );
}
  

export default App;

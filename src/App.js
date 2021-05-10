//.import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
//import jackie from "./profile.png";

//https://api.github.com/users/rmasonh18

 
 function App({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }


  return <div>No User Available</div>;
    
}
  

export default App;

  
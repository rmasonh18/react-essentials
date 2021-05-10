import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

//use reactfragment 

function AppTwo() {
  return <h1>This the idea of additional App using React fragement over wrap in div</h1>;
}

ReactDOM.render(
<React.Fragment>
  <App/>
  <AppTwo />


</React.Fragment>,
 
  
document.getElementById('root')

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

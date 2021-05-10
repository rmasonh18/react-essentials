//.import logo from './logo.svg';
import './App.css';
//import jackie from "./profile.png";

function SecretComponent() {
  return <h1>Secret for only authorized users</h1>
}

function RegularComponent() {
  return <h1>Every user has access</h1>
}

//array destructuring 
const checklist = ["boots", "tent", "headlamp"];
//empty array 
const[mostImportantItem] = ["boots", "tent", "headlamp"];
const[Item, second] = ["boots", "tent", "headlamp"];
const[,,light] = ["boots", "tent", "headlamp"];


console.log(checklist[1]);
console.log(mostImportantItem);
console.log(Item, second);
console.log(light);


function App(props) {
 // use shorthand react.fragment for conditional rendering terinary statement
 return (
  <>
    {props.authorized ? <SecretComponent /> : <RegularComponent />}
  </>
 );
}

export default App;

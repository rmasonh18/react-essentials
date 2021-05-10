//.import logo from './logo.svg';
import './App.css';
import jackie from "./profile.png";



// create header component
function Header(props) {
  //add console to check in browserslist
  //console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

//creat main component
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <img src = {jackie} height ={200} alt ="Jackie"/>
      <ul style = {{textAlign: 'left'}}>
      {props.dishes.map((dish) => <li key = {dish.id}>{dish.title}</li>)}

      </ul>
    </section>

  );
}

//footer componet
function Footer(props) {
  return (
    <p> Copyright &copy; {props.year}</p>
  );
  
}

//dishes array
const dishes = [
  "macaroni and cheese",
  "Salmon",
  "Tofu and vegetables",
  "New York Strip",
  "Tenderloin"
];

//create dishobject with id and title
const dishObjects = dishes.map((dish, i) => ({id: i,  title: dish }));




function App() {
  return (
    <div className="App">
    <Header name="Jackie" />
    <Main adjective="amazing" dishes = {dishObjects}/>
    <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

//.import logo from './logo.svg';
import './App.css';



// create header component
function Header() {
  return (
    <header>
      <h1>Jackie's Kitchen</h1>
    </header>
  );
}

//creat main component
function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>

  );
}

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <h3>Footer</h3>
    </div>
  );
}

export default App;

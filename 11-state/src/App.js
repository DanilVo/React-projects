import "./App.css";
import RandomNum from "./components/randomNum";

function App() {
  return (
    <div className="App">
      <RandomNum maxNum={1000}/>
    </div>
  );
}

export default App;

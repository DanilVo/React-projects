import "./App.css";
import Info from "./components/Info";

function App() {
  return <div className="App">
    <Info />
    <h1>App component heading</h1>
    <button className="my-button">Click me in the info component</button>
  </div>;
}

export default App;

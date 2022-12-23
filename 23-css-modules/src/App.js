import "./App.css";
import Info from "./components/Info";
import Test from "./modules/test";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App component heading</h1>
        <button className="my-button">Click me in the info component</button>
      </div>
      <Test />
    </div>
  );
}

export default App;

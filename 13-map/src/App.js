import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = [
  "click me 1",
  "click me 2",
  "click me 3",
  "click me 4",
  "click me 5",
  "click me 6",
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={texts[index]}/>;
      })}
    </div>
  );
}

export default App;

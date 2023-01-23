import "./App.css";
import { useState } from "react";

function computeInitialCounter() {
  console.log("some calculations")
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter]= useState(0)
  // const [counter, setCounter]= useState(computeInitialCounter())
  const [counter, setCounter]= useState(() => {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title: "counter",
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1)
    setCounter((counter) => {
      return counter + 1
    })
    // setCounter(c => c + 1)
  }

  function decriment() {
    setCounter(counter -1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'new title'
      }
    })
  }

  return <div className="App">
    <h1>counter: {counter}</h1>
    <button onClick={increment} className="btn btn-success">add</button>
    <button onClick={decriment} className="btn btn-danger">delete</button>
    <button onClick={updateTitle} className="btn btn-default">change title</button>

    <pre>{JSON.stringify(state,null,2)}</pre>
  </div>;
}

export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {

  const [value,setvalue] = useState(0)
  const renderCount = useRef(0)
  const inputRef = useRef(null)
  const prevValue = useRef('')
  
  useEffect(() => {
    prevValue.current = value
  }, [value])

  useEffect(() => {
    renderCount.current++
    console.log(renderCount)
    console.log(inputRef.current);
  })

  function valueHandler() {
    setvalue((value) => {
      return value+1
    })
  }

const focus = () => inputRef.current.focus()

  return <div className="App">
    <h1>{renderCount.current}</h1>
    <h2>{prevValue.current}</h2>
    <button onClick={valueHandler}>hello</button>
    <input ref={inputRef} onChange={valueHandler}></input>
    <button className="btn btn-success" onClick={focus}>focus</button>
  </div>;
}

export default App;

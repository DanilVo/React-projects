import { useState } from "react";
import { useRef } from "react";
import "./App.css";

// Вывести квадрат числа
// function res(num) {
//   return num**2
// }
// ---------------------------------------------------------------------------------------
// function App() {
//   return <div className="App">
//     {res(4)}
//   </div>;
// }
// ---------------------------------------------------------------------------------------
// По двум заданным числам проверять является ли первое квадратом второго
// function res(num1, num2) {
//   return num1 === num2 ** 2 ? true : false;
// }
// const res1 = (num1, num2) => (num1 === num2 ** 2 ? "true" : "false");
// function App() {
//   return (
//     <div className="App">
//       {(4 === 2 ** 2 ? "true" : "false")}
//     </div>
//   );
// }
// ---------------------------------------------------------------------------------------
// Даны два числа. Показать большее и меньшее число
// function App() {
//  function res(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }
//   return (
//     <div className="App">
//       {res(1,2)}
//     </div>
//   );
// }
// ---------------------------------------------------------------------------------------
// По заданному номеру дня недели вывести его название
// function App() {
//   const inputRef = useRef(null);
//   const [read, setRead] = useState("");
//   const dayInWeek = [
//     "sunday",
//     "monday",
//     "thusday",
//     "wendnesday",
//     "thirstday",
//     "friday",
//     "saturday"
//   ];
//   const handleClick = () => {
//     setRead(dayInWeek[parseInt(inputRef.current.value) - 1]);
//   };
//   return (
//     <div className="App">
//       <input ref={inputRef} type="text"></input>
//       <button onClick={handleClick}>Update</button>
//       {read}
//     </div>
//   );
// }
// ---------------------------------------------------------------------------------------
// Выяснить является ли число чётным

// function App() {

//   function numbers(num) {
//     return num % 2 === 0? 'true' : 'false'
//   }
//   return <div className="App">{numbers()}</div>;
// }
// ---------------------------------------------------------------------------------------
// Показать числа от -N до N
const arr = []

function App() {
  function numbers(n) {
    for (let num = -n; num < n; num++) {
      arr.push(num)
      console.log(num)
      return arr
    }
  }
  return <div className="App">{numbers(2)}</div>;
}

export default App;

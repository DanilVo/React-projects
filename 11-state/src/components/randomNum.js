import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";

function RandomNum(maxNum) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  const changeRnadomNum = () => {
    setRandomNum(generateRandomNum(maxNum));
  };
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRnadomNum}>Generate new random number</button>
    </div>
  );
}

export default RandomNum;

import React, { useState } from "react";
import Child from "./Child";

function Challenge3() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState("NO");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleIsMarried = (value) => {
    setIsMarried(value);
  };

  return (
    <div>
      Set Name: <input onChange={handleName} />
      Set Age: <input onChange={handleAge} type={"number"} />
      <Child name={name} age={age} handleIsMarried={handleIsMarried} />
      <p>Status: {isMarried}</p>
    </div>
  );
}

export default Challenge3;

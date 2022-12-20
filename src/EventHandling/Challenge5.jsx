import React, { useState } from "react";

function Challenge5() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const getInputNum1 = (e) => {
    setNum1(Number(e.target.value));
  };

  const getInputNum2 = (e) => {
    setNum2(Number(e.target.value));
  };

  const addNumbers = (num1, num2) => {
    console.log(num1 + num2);
  };

  return (
    <div>
      <input
        placeholder="Add numbers..."
        onChange={getInputNum1}
        name="input1"
      />
      <input
        placeholder="Add numbers..."
        onChange={getInputNum2}
        name="input2"
      />

      <button onClick={() => addNumbers(num1, num2)}>Add Numbers</button>
    </div>
  );
}

export default Challenge5;

import React, { useState } from "react";

function Challenge2() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };

  console.log(count);
  return (
    <div>
      <h1>{visible && count}</h1>
      <p>Counter is {visible ? "visible" : "NOT visible"}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={handleVisible}>Handle Visibility</button>
    </div>
  );
}

export default Challenge2;

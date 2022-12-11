import React from "react";

function Child({ name, age, handleIsMarried }) {
  return (
    <div>
      <p>Name: {name === "" ? "No name" : name}</p>
      <p>Age: {age}</p>
      <button onClick={() => handleIsMarried("YES")}>Change Status</button>
    </div>
  );
}

export default Child;

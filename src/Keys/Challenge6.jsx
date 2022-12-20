import React from "react";

function Challenge6() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const details = [
    {
      name: "Ciprian",
      age: 20,
    },
    {
      name: "Shaileh",
      age: 25,
    },
    {
      name: "Mayak",
      age: 20,
    },
    {
      name: "Andrew",
      age: 19,
    },
  ];

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {numbers.map((num, idx) => {
          return <li key={idx}>{num}</li>;
        })}
      </ul>
      <h2>Names</h2>
      <ul>
        {details.map((el, idx) => {
          return <li key={idx}>{el.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Challenge6;

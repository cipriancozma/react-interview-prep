import React from "react";
import "./forms.css";

function Challenge7() {
  const getInputs = (e) => {
    console.log(e);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        margin: "10px auto",
      }}
    >
      <input placeholder="Write your name..." onChange={getInputs} />
      <input placeholder="Write your age..." />
      <input placeholder="Write your hobbies..." />
      <input placeholder="Write a date..." />
      <button>Submit</button>
    </div>
  );
}

export default Challenge7;

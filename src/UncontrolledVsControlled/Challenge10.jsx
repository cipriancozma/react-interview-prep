import React from "react";
import "./styles.css";

function Challenge10() {
  return (
    <div className="container">
      <div className="input-container">
        <input placeholder="Name" name="name" />
        <input placeholder="Age" name="age" />
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Challenge10;

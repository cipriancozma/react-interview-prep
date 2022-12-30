import React, { createRef } from "react";
import "./styles.css";

function Challenge10() {
  let name = createRef();
  let age = createRef();

  // the part with ref is uncontrolled component
  const handleSubmit = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };

  // the part without ref is a controlled component
  const getName = (e) => {
    console.log(e.target.value);
  }; // same for age

  const submit = () => {
    console.log("submitted");
  };

  return (
    <div className="container">
      {/* Uncontrolled Components */}
      <div className="input-container">
        <input placeholder="Name" name="name" ref={name} />
        <input placeholder="Age" name="age" ref={age} />
      </div>
      <button onClick={handleSubmit}>Submit</button>

      {/* Controlled Components */}
      <div className="input-container">
        <input placeholder="Name" name="name" onChange={getName} />
        <input placeholder="Age" name="age" />
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Challenge10;

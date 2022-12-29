import React, { useState } from "react";
import "./forms.css";

function Challenge7() {
  const [objData, setObjData] = useState({});

  const getInputs = (value, name) => {
    console.log({ [name]: value });
    const data = { [name]: value };
    setObjData({ ...objData, ...data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(objData);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        margin: "10px auto",
      }}
      onClick={handleSubmit}
    >
      <input
        placeholder="Write your name..."
        name="name"
        type={"text"}
        onChange={(e) => getInputs(e.target.value, e.target.name)}
      />
      <input
        placeholder="Write your age..."
        name="age"
        type={"number"}
        onChange={(e) => getInputs(e.target.value, e.target.name)}
      />
      <input
        placeholder="Write your hobbies..."
        name="hobbie"
        type={"text"}
        onChange={(e) => getInputs(e.target.value, e.target.name)}
      />
      <input
        placeholder="Write a date..."
        name="date"
        type={"date"}
        onChange={(e) => getInputs(e.target.value, e.target.name)}
      />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}

export default Challenge7;

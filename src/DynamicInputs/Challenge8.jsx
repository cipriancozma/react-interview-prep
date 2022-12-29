import React, { useState } from "react";
import "./style.css";

function Challenge8() {
  const [data, setData] = useState({});

  const getInputValues = (e) => {
    const { name, value } = e.target;
    let input = {
      [name]: value,
    };
    setData({ ...data, ...input });
  };
  console.log(data);

  return (
    <div className="container">
      <div className="input-container">
        <input placeholder="Name" name="name" onChange={getInputValues} />
        <input placeholder="Age" name="age" onChange={getInputValues} />
        <input
          placeholder="Years of Experience"
          name="years"
          onChange={getInputValues}
        />
      </div>
      <button>Add New Group</button>
    </div>
  );
}

export default Challenge8;

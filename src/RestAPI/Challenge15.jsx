import React, { useEffect, useState } from "react";
import axios from "axios";

function Challenge15() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  // POST, GET, PUT or PATCH, DELETE

  //POST Request
  const postData = () => {
    axios
      .post("https://63aef95ecb0f90e51469db53.mockapi.io/users", {
        name,
        age: 33,
        hobbies: ["Programming", "Cooking", "Reading"],
      }) // this is the payload - data we are sending
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  };

  //PUT Request
  const updateData = (id) => {
    axios
      .put("https://63aef95ecb0f90e51469db53.mockapi.io/users/" + id, {
        name,
        age: 33,
        hobbies: ["Programming", "Cooking", "Reading"],
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  //DELETE Request
  const deleteData = (id) => {
    axios
      .delete("https://63aef95ecb0f90e51469db53.mockapi.io/users/" + id)
      .then((res) => getData())
      .catch((err) => console.error(err));
  };

  const getData = () => {
    // GET Request
    axios
      .get("https://63aef95ecb0f90e51469db53.mockapi.io/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        value={name}
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={postData}>POST Data</button>
      {users.map((user, idx) => {
        return (
          <>
            {" "}
            <p key={idx}>
              {user.id}.{user.name}
            </p>
            <button onClick={() => updateData(user.id)}>Update</button>{" "}
            <button onClick={() => deleteData(user.id)}>Delete</button>{" "}
          </>
        );
      })}
    </div>
  );
}

export default Challenge15;

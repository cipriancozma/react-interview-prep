import React, { useContext } from "react";
import { UserData } from "./context";

function Profile() {
  const { setName } = useContext(UserData);
  return (
    <div>
      <h1> Profile </h1>
      <button onClick={() => setName("Some name here")}>Change the Name</button>
    </div>
  );
}

export default Profile;

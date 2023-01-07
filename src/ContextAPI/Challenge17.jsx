import React, { useState } from "react";
import { UserData } from "./context";
import Home from "./Home";
import Profile from "./Profile";

function Challenge17() {
  const [name, setName] = useState("Ciprian");

  return (
    <div>
      <UserData.Provider value={{ name, setName }}>
        <Home />
        <Profile />
      </UserData.Provider>
    </div>
  );
}

export default Challenge17;

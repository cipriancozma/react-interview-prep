import React, { useContext } from "react";
import { UserData } from "./context";

function Home() {
  const { name } = useContext(UserData);
  return (
    <div>
      <h1> Name </h1>
      {name}
    </div>
  );
}

export default Home;

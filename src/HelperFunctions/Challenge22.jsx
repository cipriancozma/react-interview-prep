import React, { useEffect } from "react";
import { getUsers } from "./getAllUsers";

// separate logic from UI
function Challenge22() {
  useEffect(() => {
    getUsers("posts");
  }, []);

  return (
    <div>
      <h1>Helper Functions</h1>
    </div>
  );
}

export default Challenge22;

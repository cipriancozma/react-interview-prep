import React from "react";
import HOC from "./HOC";

// HOC takes a component and returns another component like the HOC file
function Users({ data }) {
  return (
    <div>
      {data.slice(0, 10).map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

const UsersComp = HOC("Users", Users, "users");
export default UsersComp;

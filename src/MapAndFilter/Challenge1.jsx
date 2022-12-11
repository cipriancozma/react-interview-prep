import { useEffect, useState } from "react";

function Challenge1() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search)
  );

  return (
    <div className="App">
      <h1>Users</h1>
      <input onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => {
          return (
            <div key={user.id}>
              <p>User Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <hr style={{ width: "40%" }} />
            </div>
          );
        })
      ) : (
        <p>No users</p>
      )}
    </div>
  );
}

export default Challenge1;

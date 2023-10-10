import React, { useEffect, useState } from "react";
import axios from "axios";
import UserLists from "../UserLists";

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = () => {
    console.log("hello delete");
  };
  return (
    <div>
      <div>
        <ul>
          {users.map((user) => (
            <UserLists
              key={user.id}
              user={user}
              setSelectedUser={setSelectedUser}
              handleDelete={handleDelete}
            />
            // <li>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        User Details: <br />
        {selectedUser.name} <br />
        {selectedUser && selectedUser.company.name}
      </div>
    </div>
  );
};
export default UserApp;

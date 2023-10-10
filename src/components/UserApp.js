import React, { useEffect, useState } from "react";
import axios from "axios";
import UserLists from "../UserLists";

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", { method: "DELETE" })
      .then((response) => response.json())
      .then((json) => {
        let tempUsers = [...users];
        tempUsers = tempUsers.filter((user) => user.id !== 1);
        setUsers(tempUsers);
      });
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
          ))}
        </ul>
      </div>
      <div>
        User Details: <br />
        {Object.keys(selectedUser).length > 0 ? (
          <div>
            {selectedUser.name}
            <br />
            {selectedUser.company.name}
          </div>
        ) : (
          <div>No User selected</div>
        )}
      </div>
    </div>
  );
};
export default UserApp;

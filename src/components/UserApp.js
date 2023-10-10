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
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      cosolog(response.data);
    } catch (error) {
      console.log(error);
    }
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

const UserLists = ({ user, setSelectedUser, handleDelete }) => {
  return (
    <div>
      <div onClick={() => setSelectedUser(user)}>
        {user.name} <button onClick={handleDelete}>delete</button>
      </div>
      ;
    </div>
  );
};
export default UserLists;

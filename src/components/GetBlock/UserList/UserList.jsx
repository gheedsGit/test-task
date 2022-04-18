import React from "react";
import "./UserList.scss";
import UserCard from "../../UI/UserCard";

const UserList = ({ users }) => {
  return (
    <div className="container">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;

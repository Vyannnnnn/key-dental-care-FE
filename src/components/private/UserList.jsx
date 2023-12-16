import React from "react";

const UserList = ({ users, onUserClick }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div
          key={index}
          className="mb-4 border-b-2 border-black pb-2 cursor-pointer"
          onClick={() => onUserClick(user)}
        >
          <div className="flex">
            <div className="mr-7">
              <div className="bg-[#21695C] h-16 w-16 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{user.user}</h3>
              <p>{user.messages[0].text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;

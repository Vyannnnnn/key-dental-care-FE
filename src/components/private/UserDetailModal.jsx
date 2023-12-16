import React from "react";

const UserDetailModal = ({ user, onCloseModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md h-[500px] w-[700px]">
        <div className="flex mb-3">
          <div className="mr-7">
            <div className="bg-[#21695C] h-12 w-12 rounded-full"></div>
          </div>
          <div className="flex grow justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {user.user}
            </h3>
            <button
              onClick={onCloseModal}
              type="button"
              className="inline-flex justify-center items-center rounded-md border border-transparent  p-2  text-base font-medium text-white hover:bg-[#dadada] focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              <img className="w-4 h-4" src="/close.svg" alt="Close Icon" />
            </button>
          </div>
        </div>
        <ul className="list-disc list-inside">
          {user.messages.map((message, index) => (
            <li
              key={index}
              className="mb-2 list-none bg-[#F5F5F5] rounded-lg py-3 px-3 w-[70%]"
            >
              {message.text}
            </li>
          ))}
        </ul>
        <div className="relative top-56 flex">
          <input
            type="text"
            placeholder="Write your message..."
            className="block w-[90%] mt-2  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
          <button className="w-[10%] bg-teal-800 rounded ml-2 mt-2 text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;

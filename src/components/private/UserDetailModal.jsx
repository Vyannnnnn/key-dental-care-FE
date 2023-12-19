import React from "react";

const UserDetailModal = ({ user, additionalData, onCloseModal }) => {
  console.log("User Detail Modal Data:", user);
  console.log("Additional Data:", additionalData);

  const conversation = Array.isArray(additionalData) ? additionalData : [];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[800px] h-[550px]">
        {/* Konten Utama */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {user?.senderName}
              </h3>
              <button
                onClick={onCloseModal}
                type="button"
                className="inline-flex justify-center items-center rounded-md border border-transparent p-2 text-base font-medium text-white hover:bg-[#dadada] focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <img className="w-4 h-4" src="/close.svg" alt="Close Icon" />
              </button>
            </div>

            {conversation.length > 0 ? (
              <div className="max-h-96 overflow-y-auto overflow-x-hidden">
                <ul className="space-y-2">
                  {conversation.map((message, index) => (
                    <li
                      key={index}
                      className={`flex ${
                        message.senderId === user.senderId
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <div
                        className={`p-3 max-w-[70%] rounded-2xl ${
                          message.senderId === user.senderId
                            ? "bg-gray-200"
                            : "bg-[#21695C] text-white"
                        }`}
                      >
                        <p>{message.message}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-center">No messages available.</p>
            )}
          </div>

          {/* Container Input dan Tombol */}
          <div className="flex items-center space-x-2 mt-4">
            <input
              type="text"
              className="border w-full border-gray-300 px-3 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Type your message..."
            />
            <button className="bg-[#21695C] hover:bg-[#8da5a1] text-white font-bold py-2 px-4 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;

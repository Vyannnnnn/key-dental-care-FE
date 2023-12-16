import React from "react";

const ChatContent = ({ data, dataType, onUserClick }) => {
  return (
    <div>
      {dataType === "chats" &&
        data.map((chat, index) => (
          <div
            key={index}
            className="mb-4 border p-4 rounded-md cursor-pointer"
            onClick={() => onUserClick(chat.user)}
          >
            <h3 className="text-lg font-semibold mb-2">{chat.user}</h3>
            <ul className="list-disc list-inside">
              {chat.messages.map((message, msgIndex) => (
                <li key={msgIndex} className="mb-2">
                  <span className="font-semibold">{message.timestamp}</span>:{" "}
                  {message.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ChatContent;

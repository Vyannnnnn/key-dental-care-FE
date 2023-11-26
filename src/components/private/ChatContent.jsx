import React from "react";

const ChatContent = ({ data }) => {
  return (
    <div>
      {data.map((chat) => (
        <div
          key={chat.id}
          className="w-full h-[64px] flex items-center border-b-[1px] border-black mb-[16px]"
        >
          <div className="ml-[10px] w-[50px] h-[50px] rounded-full">
            {chat.avatar && (
              <img
                src={chat.avatar}
                alt="Avatar"
                className="w-full h-full rounded-full"
              />
            )}
          </div>
          <div className="ml-[16px] grow">
            <p className="text-base">{chat.name}</p>
            <p className="text-[#A098AE] text-sm">{chat.message}</p>
          </div>
          <div className="mr-[10px]">
            <p>{chat.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatContent;

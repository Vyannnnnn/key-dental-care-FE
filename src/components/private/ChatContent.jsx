import React from "react";

const ChatContent = () => {
  return (
    <div className="w-full h-[64px] flex items-center border-b-[1px] border-black mb-[16px]">
      <div className="ml-[10px] w-[50px] h-[50px] bg-[#21695C] rounded-full"></div>
      <div className="ml-[16px] grow">
        <p className="text-base">Diana Cantika Dewi</p>
        <p className="text-[#A098AE] text-sm">Baik Dok, Terimakasih</p>
      </div>
      <div className="mr-[10px]">
        <p>12:45 PM</p>
      </div>
    </div>
  );
};

export default ChatContent;

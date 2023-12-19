import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const UserDetailModal = ({ user, additionalData, onCloseModal }) => {
  const [messageInput, setMessageInput] = useState("");
  const [fileInput, setFileInput] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://103.171.85.30:4000");
    setSocket(newSocket);

    fetchChatHistory(user.senderId);

    return () => {
      newSocket.disconnect();
    };
  }, [user.senderId]);

  const fetchChatHistory = async (receiverId) => {
    try {
      const response = await fetch(
        `https://keydentalcare.isepwebtim.my.id/chat/riwayat/${receiverId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const chatData = await response.json();
      setConversation(chatData);

      const chatBox = document.getElementById("chatBox");
      if (chatBox) {
        scrollToBottom(chatBox);
      }
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  const scrollToBottom = (element) => {
    element.scrollTop = element.scrollHeight;
  };

  const markAsRead = (messageId) => {
    socket.emit("messageRead", { messageId });
  };

  const sendMessage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", fileInput);

      const uploadResponse = await fetch(
        "https://keydentalcare.isepwebtim.my.id/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error(`HTTP error! Status: ${uploadResponse.status}`);
      }

      const uploadData = await uploadResponse.json();
      const { imagePath } = uploadData;

      socket.emit("sendMessage", {
        senderId: 13,
        receiverId: user.senderId,
        message: messageInput,
        imagePath,
      });

      setMessageInput("");
      setFileInput(null);

      fetchChatHistory(user.senderId);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[800px] h-[550px]">
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
              <div
                className="max-h-96 overflow-y-auto overflow-x-hidden"
                id="chatBox"
              >
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

          <div className="flex items-center space-x-2 mt-4">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="border w-full border-gray-300 px-3 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-[#21695C] hover:bg-[#8da5a1] text-white font-bold py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;

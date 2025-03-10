import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import { ScaleLoader } from "react-spinners";
import UserDetailModal from "../../../components/private/UserDetailModal";

const Konsultasi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/chat/riwayat/21");
        const data = await response.json();
        console.log("Data Chat:", data);
        setChats(data);
      } catch (error) {
        console.error("Error fetching chat:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const handleUserClick = async (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setAdditionalData(null);
  };

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar
          page="Konsultasi"
          breadcrumb=" Konsultasi"
          showCreateButton={false}
          showSearchButton={true}
        />
        <div className="content grow object-contain bg-[#f8fafc]">
          <section className="container px-[39px] py-[39px]">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-40">
                      <div className="flex justify-around mt-8">
                        <ScaleLoader
                          color="#21695c"
                          loading={isLoading}
                          height={30}
                        />
                      </div>        
                    </div>
                  ) : chats && chats.length > 0 ? (
                    <div>
                      {chats.map((chat, index) => (
                        <div
                          key={index}
                          onClick={() => handleUserClick(chat)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="border-b-2 border-black pb-2 mb-3">
                            <div className="flex">
                              <div className="w-16 h-16">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={`http://localhost:3000/img/${chat.profileSender}`}
                                  alt=""
                                />
                              </div>
                              <div className="p-2">
                                <p>{chat.senderName}</p>
                              </div>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center">Tidak ada chat</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
      {selectedUser && (
        <UserDetailModal
          user={selectedUser}
          additionalData={additionalData}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Konsultasi;

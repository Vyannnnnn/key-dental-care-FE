import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import { ScaleLoader } from "react-spinners";
import UserList from "../../../components/private/UserList"; // Import user list component
import UserDetailModal from "../../../components/private/UserDetailModal"; // Import modal component

const Konsultasi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user for modal display

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Simulate fetching data from API
        // Replace this with actual API call
        const dummyChats = [
          {
            user: "User1",
            messages: [
              { text: "Halo, apa kabar?", timestamp: "2023-01-01T12:00:00" },
              {
                text: "Saya baik. Bagaimana denganmu?",
                timestamp: "2023-01-01T12:05:00",
              },
            ],
          },
          {
            user: "User2",
            messages: [
              {
                text: "Hai! Saya baik, terima kasih.",
                timestamp: "2023-01-01T12:02:00",
              },
              {
                text: "Sedang bekerja. Kamu?",
                timestamp: "2023-01-01T12:07:00",
              },
            ],
          },
        ];

        setChats(dummyChats);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Chatsnya adalah:", chats);

  // Handle click on a user card to show details in modal
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedUser(null);
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
                    <UserList
                      users={chats}
                      onUserClick={handleUserClick} // Pass click handler
                    />
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
      {/* Render modal if a user is selected */}
      {selectedUser && (
        <UserDetailModal user={selectedUser} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Konsultasi;

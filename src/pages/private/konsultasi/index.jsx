import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import ChatContent from "../../../components/private/ChatContent";
import { ScaleLoader } from "react-spinners";

const Konsultasi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://keydentalcare.isepwebtim.my.id/api/chats"
        );
        console.log("Response:", response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data:", data);

        setChats(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, []);

  console.log("Chatsnya adalah:", chats);

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
                    <ChatContent data={chats && chats.chats} dataType="chats" />
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
    </div>
  );
};

export default Konsultasi;

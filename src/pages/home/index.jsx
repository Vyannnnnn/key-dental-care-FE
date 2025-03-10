import React, { useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Testimonial from "../testimonial";
import Layanan from "../layanan";

const Home = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "94dca17d-2751-4065-baac-eb70458a879a",
      region: "us-south",
      serviceInstanceID: "a1b2acc8-945e-4732-b0e7-7a72a9c84455",
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    const t = document.createElement("script");
    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);

    return () => {
      document.head.removeChild(t);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-36 mt-10 lg:my-16 mb-20 rounded-3xl bg-teal-50 w-auto h-auto">
        <div className="p-16">
          <h1 className="text-4xl font-bold leading-10">
            Yuk, Lebih Peduli pada Kesehatan <br /> Gigi! Dapatkan Senyuman
            <br />
            Sehat untuk Kebahagiaanmu
          </h1>
          <p className="text-xl font-sans text-gray-500 py-8">
            Banyak yang masih nggak peduliin kesehatan gigi, padahal bisa
            berdampak vital banget sama keseharian kita! Mungkin karena belum
            ketemu konsultasi yang sesuai? Nggak perlu khawatir lagi. Konsultasi
            langsung tinggal sat-set!
          </p>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-[#21695C] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-[#21695C] hover:bg-[#21695C] hover:text-white focus:border-[#21695C] focus:text-black focus:outline-none focus:ring-0 active:border-[#21695C] active:text-white dark:hover:bg-white "
          >
            Download Sekarang
          </a>
          <div className="grid grid-cols-4 gap-4 pt-8">
            <div className="rounded-md bg-primary-100 text-primary flex items-center">
              <div className=" flex justify-center max-h-10 items-center w-3/5">
                <img className="w-9" src="/assets/gambar1.svg" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-sans font-bold ">50%</h1>
                <p className="text-xs font-sans text-gray-500">
                  Usia &gt;30 tahun mengalami penyakit gusi
                </p>
              </div>
            </div>
            <div className="rounded-md bg-primary-100 text-primary flex items-center">
              <div className=" flex justify-center max-h-10 items-center w-3/5">
                <img className="w-10" src="/assets/gambar2.svg" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-sans font-bold">2,4 Milliar</h1>
                <p className="text-xs font-sans text-gray-500">
                  Penderita karang gigi setiap tahun
                </p>
              </div>
            </div>
            <div className="rounded-md bg-primary-100 text-primary flex items-center">
              <div className=" flex justify-center max-h-10 items-center w-3/5">
                <img className="w-10" src="/assets/gambar3.svg" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-sans font-bold">60-90%</h1>
                <p className="text-xs font-sans text-gray-500">
                  Penderita karies gigi setiap tahun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Layanan />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;

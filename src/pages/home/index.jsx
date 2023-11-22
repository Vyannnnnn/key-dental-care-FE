import React from "react";
// import PopupDownload from "../popup_download";
import Navbar from "../navbar";
import Footer from "../footer";
import Testimonial from "../testimonial";
import Layanan from "../layanan";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-24 mt-10 mb-20 rounded-3xl bg-teal-50 w-10/12 h-auto">
        <div className="p-16">
          <h1 className="text-5xl font-sans font-bold">
            Yuk, Lebih Perduli pada Kesehatan Gigi! Dapatkan Senyuman Sehat untuk
            Kebahagianmu
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
            className="inline-block rounded-full border-2 border-[#21695C] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-[#21695C] hover:bg-[#21695C] hover:text-white focus:border-[#21695C] focus:text-black focus:outline-none focus:ring-0 active:border-[#21695C] active:text-white dark:hover:bg-white dark:hover:bg-white"
                >
                Download Sekarang</a>
          <div className='grid grid-cols-4 gap-4 pt-8'>
            <div className="rounded-md bg-primary-100 text-primary flex items-center">
              <div className=' flex justify-center max-h-10 items-center w-3/5'>
                <img className="w-9" src="/assets/gambar1.svg"/>
              </div>
              <div className='flex flex-col'>
                <h1 className="text-lg font-sans font-bold ">
                  50%
                </h1>
                <p className="text-xs font-sans text-gray-500">
                  Usia &gt;30 tahun mengalami penyakit gusi
                </p>
              </div>
            </div>
            <div className="rounded-md bg-primary-100 text-primary flex items-center">
              <div className=' flex justify-center max-h-10 items-center w-3/5'>
                <img className="w-10" src="/assets/gambar2.svg"/>
              </div>
              <div className='flex flex-col'>
                <h1 className="text-lg font-sans font-bold">
                  2,4 Milliar 
                </h1>
                <p className="text-xs font-sans text-gray-500">
                  Penderita karang gigi setiap tahun
                </p>
              </div>
            </div>
            <div className="rounded-md bg-primary-100 text-primary flex items-center">
              <div className=' flex justify-center max-h-10 items-center w-3/5'>
                <img className="w-10" src="/assets/gambar3.svg"/>
              </div>
              <div className='flex flex-col'>
                <h1 className="text-lg font-sans font-bold">
                  60-90%
                </h1>
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

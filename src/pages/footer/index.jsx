import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="flex">
        <div className="flex flex-col items-center bg-[#FBFBFB] w-2/5 h-3/4">
          <img className="w-48 h-44" src="/logo.svg"/>
          <div className="relative mb-4 flex flex-wrap items-stretch">
            <div className="relative flex flex-wrap items-stretch">
              <div className="relative w-80 rounded-full border border-solid border-[#299D91] bg-transparent bg-clip-padding pl-8 pr-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#299D91] focus:text-neutral-700 focus:shadow-[#299D91] focus:outline-none dark:border-[#299D91] dark:text-neutral-200">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                </span>
                <input
                  type="search"
                  aria-label="Cari"
                  aria-describedby="button-addon2"
                  className="w-full outline-none bg-[#FBFBFB]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#21695C] text-white w-3/5">
          <div className="m-10">
            <h1 className="font-sans text-xl font-bold pb-3">
              Kontak
            </h1>
              <div className="flex items-center pb-2">
                <img className="w-9 h-9" src="/assets/call.svg"/>
                <p className="text-lg font-sans pl-2">082289494199 - Rima</p>
              </div>
              <div className="flex items-center pb-2">
                <img className="w-9 h-9" src="/assets/email.svg"/>
                <p className="text-lg font-sans pl-2">service.dencare@gmail.com</p>
              </div>
              <div className="flex items-center pb-2">
                <img className="w-9 h-9" src="/assets/location.svg"/>
                <p className="text-lg font-sans pl-2">Jl. Sentot ali Basa No.36 Sumatera Barat 25519</p>
              </div>
          </div>
          <div className="m-10">
            <h1 className="font-sans text-xl font-bold pb-3">
              Download Now
            </h1>
            <p className="text-lg font-sans pb-5">
              Akses fitur lengkap lewat versi mobile kami
            </p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white w-44 h-12 text-gray-800 font-semibold py-5 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:border-white"
            >
              <img
                src="/assets/google-play.svg"
                alt="Google Play Store"
                className="h-8 w-8 mr-3"
              />
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;

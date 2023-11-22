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
          <div className="mb-6">
            <a
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-[#21695C] uppercase leading-normal text-[#21695C] transition duration-150 ease-in-out hover:bg-[#21695C] hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-[#21695C] uppercase leading-normal text-[#21695C] transition duration-150 ease-in-out hover:bg-[#21695C] hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#!"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-[#21695C] uppercase leading-normal text-[#21695C] transition duration-150 ease-in-out hover:bg-[#21695C] hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center bg-[#21695C] text-white w-3/5">
          <div className="m-10">
            <h1 className="font-sans text-xl font-bold pb-3">
              Kontak
            </h1>
              <div className="flex items-center pb-2">
                <img className="w-9 h-9" src="/assets/call.svg"/>
                <p className="text-lg font-sans pl-2">08123456789 - Rima</p>
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

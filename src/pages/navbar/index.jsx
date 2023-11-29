import React, { useState, useEffect, Link } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isScrolled
    ? "bg-[#FBFBFB] fixed w-full top-0 z-20"
    : "bg-[#FBFBFB]";

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-500 font-bold text-xl flex items-center">
          <a href="/">
            <img className="h-20 w-24 ml-16" src="/logo.svg" alt="Logo" />
          </a>
        </div>

        <div className="hidden md:flex flex-grow items-center justify-center space-x-10">
          <a href="#layanan" className="text-gray-500 hover:text-gray-300">
            Layanan
          </a>
          <a href="#footer" className="text-gray-500 hover:text-gray-300">
            Kontak
          </a>
          <a href="/tentang_kami" className="text-gray-500 hover:text-gray-300">
            Tentang Kami
          </a>
        </div>

        <div className="md:flex items-center space-x-4 mr-16">
          <a
            href="/login"
            className="inline-block rounded-full bg-[#21695C] px-6 pb-[12px] pt-3 text-xs font-medium leading-normal text-white"
          >
            Masuk Sebagai Admin
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

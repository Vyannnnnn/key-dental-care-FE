import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {hash} = useLocation()
  

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

  useEffect(() => {
    if(!hash) return

    const target = document.querySelector(hash);
    if(target){
      target.scrollIntoView({behavior: 'smooth'})
    }
  }, [hash])

  const navbarClass = isScrolled
    ? "bg-[#FBFBFB] fixed w-full top-0 z-20"
    : "bg-[#FBFBFB]";

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-500 font-bold text-xl flex items-center my-2">
          <a href="/">
            <img className="h-20 w-24 lg:w-28 ml-16" src="/logo.svg" alt="Logo" />
          </a>
        </div>

        <div className="hidden md:flex flex-grow items-center justify-center space-x-10">
          <Link to="/#layanan" className="text-gray-500 hover:text-gray-300 hover:cursor-pointer">
            Layanan
          </Link>
          <Link to="/#footer" className="text-gray-500 hover:text-gray-300 hover:cursor-pointer">
            Kontak
          </Link>
          <Link to="/tentang_kami" className="text-gray-500 hover:text-gray-300">
            Tentang Kami
          </Link>
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

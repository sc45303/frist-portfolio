"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import navImage from "../../../public/assets/pic/Untitled design (5).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#1f2833] shadow-md shadow-[#66fcf1] z-50 sticky top-0 ">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2  items-center justify-between">
          {/* adding logo */}
          <div className=" flex items-center  ">
            <Image
              src={navImage}
              alt="Suhail"
              height={150}
              width={150}
              className="w-[50px]  h-[50px] rounded-full   "
            />

            <span className="ml-3 text-xl text-[#66fcf1]  ">
              Suhail Khan
              <div className="w-[100px] h-[2px] bg-[#66fcf1]"></div>
            </span>
          </div>
          {/* hamburger manu */}
          <div className=" md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#66fcf1] text-3xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* manu links */}
          <nav
            className={` ${
              isOpen ? "block" : "hidden"
            }  md:flex md:items-center md:space-x-6 text-base w-full  md:w-auto mt-4 md:mt-0 move `}
          >
            <Link
              href={"/"}
              className="block md:inline-block text-[#66fcf1] p-2 "
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="block md:inline-block text-[#66fcf1] p-2"
            >
              About
            </Link>
            <Link
              href={"#project"}
              className="block md:inline-block text-[#66fcf1] p-2"
            >
              Projects
            </Link>
            <Link
              href={"#skills"}
              className="block md:inline-block text-[#66fcf1] p-2"
            >
              Skills
            </Link>
            <Link
              href={"#Contact"}
              className="block md:inline-block text-[#66fcf1] p-2"
            >
              Contact
            </Link>
            {/* cv dowload button */}
            <Link
              target="_blank"
              href="/assets/cv/cv2.png"
              className="block md:inline-block"
            >
              <button className="bg-[#1f2833] border-2 text-white border-[#66fcf1] py-2 px-4 rounded mt-4 md:mt-0 hover:bg-[#66fcf1] hover:text-black hover:border-[#1f2833] w-full md:w-auto ">
                Download CV
                <IoCloudDownloadOutline className="inline-block ml-2" />
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navbar;

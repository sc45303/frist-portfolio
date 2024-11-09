"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerImage from "../../../public/assets/pic/Untitled design (6).png";
const Footer = () => {
  return (
    <div className="  bg-[#1f2833]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={footerImage}
              alt="Suhail"
              height={100}
              width={100}
              className="w-[50px] rounded-full  "
            />

            <span className="ml-3 text-xl text-[#66fcf1]">Suhail Khan</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[#66fcf1] sm:py-2 sm:mt-0 mt-4">
            © 2024 Suhail Khan —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-x-3">
            <Link
              href={"https://www.facebook.com"}
              target="blank"
              className="text-white hover:text-[#66fcf1]"
            >
              <FaFacebookSquare className="text-xl" />
            </Link>
            <span>
              <Link
                href={""}
                target="blank"
                className="text-white  hover:text-[#66fcf1]"
              >
                <FaLinkedin className="text-xl" />
              </Link>
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

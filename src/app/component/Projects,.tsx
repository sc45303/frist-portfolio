"use client";

import Image from "next/image";
import Link from "next/link";
import imageOne from "../../../public/assets/projects/project.png";
import imageTwo from "../../../public/assets/projects/project2.png";
import imageThree from "../../../public/assets/projects/project2.png";
const Project = () => {
  return (
    <div id="project">
      <section className="bg-[#1f2833] body-font  shadow-2xl shadow-[#66fcf1]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-[#66fcf1]">
              My Projects
            </h1>
          </div>
          {/* Projects */}
          <div className="flex flex-wrap -m-8 -mt-[5rem]">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={imageOne}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#66fcf1] bg-[#1f2833] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#66fcf1] mb-1">
                    Ecomerece Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-white">
                    The Responsuve CV I have developed Using Html , Css.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hsk-digital-services.vercel.app/"}
                  >
                    <p className="leading-relaxed text-[#66fcf1] hover:underline">
                      View Projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={imageTwo}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#66fcf1] bg-[#1f2833] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#66fcf1] mb-1">
                    Ecomerece Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2  text-white">
                    The Ecomerce Website I have developed Using Html , Css
                    Javascript and Tailwind Css.
                  </p>

                  <Link
                    target="_blank"
                    href={"https://home-work-class-6.vercel.app/"}
                  >
                    <p className="leading-relaxed text-[#66fcf1] hover:underline">
                      View Projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={imageThree}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-[#66fcf1] bg-[#1f2833] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#66fcf1] mb-1">
                    Ecomerece Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-white">
                    The Ecomerce Website I have developed Using Html , Css
                    Javascript and Tailwind Css.
                  </p>

                  <Link
                    target="_blank"
                    href={"https://home-work-class-6.vercel.app/"}
                  >
                    <p className="leading-relaxed text-[#66fcf1] hover:underline">
                      View Projects
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;

"use client";

import Image from "next/image";
import Link from "next/link";
import imageOne from "../../../public/assets/projects/project.png";
import imageTwo from "../../../public/assets/projects/project2.png";
import imageThree from "../../../public/assets/projects/project2.png";

const Project = () => {
  return (
    <div id="project">
      <section className="bg-[#1f2833] body-font shadow-2xl shadow-[#66fcf1]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-[#66fcf1]">
              My Projects
            </h1>
          </div>
          {/* Projects */}
          <div className="flex flex-wrap -m-8 -mt-[5rem]">
            {[
              {
                image: imageOne,
                title: "E-commerce Website",
                description:
                  "The Responsive CV I have developed Using Html, Css.",
                link: "https://hsk-digital-services.vercel.app/",
              },
              {
                image: imageTwo,
                title: "E-commerce Website",
                description:
                  "The E-commerce Website I have developed Using Html, Css, Javascript, and Tailwind Css.",
                link: "https://home-work-class-6.vercel.app/",
              },
              {
                image: imageThree,
                title: "E-commerce Website",
                description:
                  "The E-commerce Website I have developed Using Html, Css, Javascript, and Tailwind Css.",
                link: "https://home-work-class-6.vercel.app/",
              },
            ].map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center transform transition duration-300 hover:scale-105"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-[#66fcf1] bg-[#1f2833] opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-[#66fcf1] mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed line-clamp-2 text-white">
                      {project.description}
                    </p>
                    <Link target="_blank" href={project.link}>
                      <p className="leading-relaxed text-[#66fcf1] hover:underline">
                        View Project
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

"use client";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import heroImage from "../../../public/assets/pic/Untitled design (5).png";
import "../../app/styles/heroAnimation.css";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#1f2833]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center        ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#66fcf1] textType">
              <span className="text-white">I am</span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "UI/UX Designer",
                    "Frontend Developer",
                    "Digital Marketer",
                    "Graphic Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-[#66fcf1] mb-8 fadeInScale"></div>
            <p className="mb-8 leading-relaxed text-white slideIn">
              Hi, I’m Suhail Khan — Frontend Developer & Digital Marketer
              Welcome to my portfolio! I specialize in creating responsive and
              modern web designs with a focus on user experience and digital
              marketing strategies. I’m always eager to learn new technologies
              and grow in the world of IT.
            </p>
            <div className="flex justify-center fadeInScale">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-[#1f2833] border-2 border-[#66fcf1] py-2 px-6 focus:outline-none hover:bg-[#66fcf1] hover:text-[#1f2833] hover:border-[#1f2833] rounded text-lg pulseButton">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 fadeInImage">
            <Image
              className="object-cover object-center rounded bounce"
              alt="hero"
              src={heroImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

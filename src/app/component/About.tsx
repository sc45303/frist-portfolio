import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../../public/assets/pic/Untitled design (6).png";
// Import about-specific animations

const About = () => {
  return (
    <div id="about">
      <section className="bg-[#1f2833] shadow-2xl shadow-[#66fcf1] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 zoomIn">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={aboutImage}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center slideInLeft">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#66fcf1] fadeIn">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed text-white fadeIn">
              I’m Suhail Khan, a passionate frontend developer and digital
              marketer. I’m currently in the 12th grade, balancing my studies
              with my love for technology. Over the years, I have developed
              skills in HTML, CSS, JavaScript, and digital marketing strategies
              that help businesses grow their online presence. I’m constantly
              learning new IT courses to stay ahead in this fast-paced industry.
              My goal is to become a well-rounded web developer and marketing
              expert, contributing to innovative projects and helping brands
              reach new heights
            </p>
            <div className="flex justify-center fadeIn">
              <Link target="_blank" href={"/assets/cv/cv2.png"}>
                <button className="inline-flex text-white bg-[#1f2833] border-2 border-[#66fcf1] py-2 px-6 focus:outline-none hover:bg-[#66fcf1] hover:text-black hover:border-[#1f2833] rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

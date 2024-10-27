import { CiSquareCheck } from "react-icons/ci";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font  shadow-2xl shadow-[#66fcf1] bg-[#1f2833]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-[#66fcf1] tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              My Skills
            </h1>
          </div>
          {/* Skills */}
          <div className="flex flex-wrap -m-4  -mt-[5rem]">
            <div className="p-4  w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#66fcf1] text-[#1f2833] flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300  rounded-xl ">
                    <div className="absolute bg-[#66fcf1] h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-[#66fcf1] text-right">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#66fcf1] text-[#1f2833] flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Css
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300  rounded-xl ">
                    <div className="absolute bg-[#66fcf1] h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-[#66fcf1] text-right">60%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#66fcf1] text-[#1f2833] flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Javascript/Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300  rounded-xl ">
                    <div className="absolute bg-[#66fcf1] h-1 rounded-xl w-[40%]"></div>
                  </div>
                  <p className="font-bold text-[#66fcf1] text-right">40%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#66fcf1] text-[#1f2833] flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    React
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300  rounded-xl ">
                    <div className="absolute bg-[#66fcf1] h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-[#66fcf1] text-right">60%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#66fcf1] text-[#1f2833] flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Tailwind Css
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300  rounded-xl ">
                    <div className="absolute bg-[#66fcf1] h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <p className="font-bold text-[#66fcf1] text-right">70%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#66fcf1] text-[#1f2833] flex-shrink-0">
                    <CiSquareCheck className="text-xl font-bold" />
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    Next Js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300  rounded-xl ">
                    <div className="absolute bg-[#66fcf1] h-1 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-[#66fcf1] text-right">50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skills;

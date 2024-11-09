import { CiSquareCheck } from "react-icons/ci";
import { useEffect, useState } from "react";

interface Skill {
  skill: string;
  percentage: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { skill: "HTML", percentage: 80 },
    { skill: "CSS", percentage: 60 },
    { skill: "JavaScript/TypeScript", percentage: 40 },
    { skill: "React", percentage: 60 },
    { skill: "Tailwind CSS", percentage: 70 },
    { skill: "Next.js", percentage: 50 },
  ];

  const [progressWidths, setProgressWidths] = useState<number[]>(
    new Array(skills.length).fill(0)
  );

  useEffect(() => {
    skills.forEach((item, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= item.percentage) {
          clearInterval(interval); // Stop animation when reaching the target percentage
        } else {
          progress++;
          setProgressWidths((prevWidths) => {
            const newWidths = [...prevWidths];
            newWidths[index] = progress;
            return newWidths;
          });
        }
      }, 15); // Adjust speed by changing this interval (15ms gives a smoother effect)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Disable ESLint warning for missing dependencies

  return (
    <div id="skills">
      <section className="text-gray-600 body-font shadow-2xl shadow-[#66fcf1] bg-[#1f2833]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-[#66fcf1] tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {skills.map((item, index) => (
              <div key={index} className="p-4 w-[100%] md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#66fcf1] text-[#1f2833] flex-shrink-0">
                      <CiSquareCheck className="text-xl font-bold" />
                    </div>
                    <h2 className="text-white text-lg title-font font-medium">
                      {item.skill}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl overflow-hidden">
                      <div
                        className="bg-[#66fcf1] h-1 rounded-xl"
                        style={{
                          width: `${progressWidths[index]}%`,
                        }}
                      ></div>
                    </div>
                    <p className="font-bold text-[#66fcf1] text-right">
                      {progressWidths[index]}%
                    </p>
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

export default Skills;

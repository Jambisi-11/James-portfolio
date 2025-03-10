import { useState } from "react";

const SkillProgress = () => {
  // Define skills and their percentages in state
  const [skills, setSkills] = useState([
    { name: "English", percentage: 90 },
    { name: "Spanish", percentage: 55 },
    { name: "Yoruba", percentage: 80 },
    { name: "French", percentage: 60 },
  ]);

  // Function to update percentage dynamically
  const handleChange = (index, newValue) => {
    const updatedSkills = [...skills];
    updatedSkills[index].percentage = newValue;
    setSkills(updatedSkills);
  };

  return (
    <div className="skills">
      {/* My Skills Heading */}
      <div>
        <h1 className="mySkills text-xl font-bold underline underline-offset-4 decoration-yellow-400 text-left capitalize">
          My Skills
        </h1>
      </div>

      {/* Language Skills Section */}
      <div className="skill_category flex flex-wrap justify-center gap-8 mt-8">
        {skills.map((skill, index) => {
          const progress = 283 * (1 - skill.percentage / 100); // Calculate offset

          return (
            <div
              key={index}
              className="chart relative inline-block w-[150px] h-[200px] text-center bg-gray-800 p-2 rounded-lg"
            >
              {/* Circular Progress */}
              <div className="circular-progress relative w-[150px] h-[150px] flex justify-center items-center">
                <div className="inner absolute w-[120px] h-[120px] bg-black rounded-full z-10"></div>

                {/* SVG Circle */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <path
                    d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
                    strokeWidth="8"
                    strokeMiterlimit="10"
                    strokeDasharray="283"
                    strokeDashoffset={progress} // Dynamic progress
                    className="stroke-current text-yellow-400 transition-all duration-500"
                    fill="none"
                    transform="rotate(-90 50 50)"
                  />
                </svg>

                {/* Progress Text */}
                <span className="progress-text absolute text-2xl font-bold z-20">
                  {skill.percentage}%
                </span>
              </div>

              {/* Skill Name */}
              <h5 className="text-center font-bold mt-2">{skill.name}</h5>

              {/* Editable Input Field */}
              <input
                type="number"
                value={skill.percentage}
                onChange={(e) => handleChange(index, Math.min(100, Math.max(0, e.target.value)))}
                className="w-16 text-center text-black font-bold mt-2 rounded-md border border-gray-400 p-1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillProgress;

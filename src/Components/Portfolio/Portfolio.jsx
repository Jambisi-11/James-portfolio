import { useState } from "react";
import aboutPic from "../../assets/about.png";

// Reusable Component for Education Item
const EducationItem = ({ title, institution, date, description, town }) => {
  return (
    <div className="border-l-4 border-r-4 border-green-500 p-3 rounded-br-3xl rounded-tl-3xl mb-8 p bg-gray-800">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-green-300 font-medium">{institution}</p>
      <p className="text-sm text-green-300  mb-2">{date}</p>
      <p className="text-green-300 ">{description}</p>
      <p className="text-green-300 ">{town}</p>
      {/* {children && <div className="mt-2">{children}</div>} */}
    </div>
  );
};

const Portfolio = () => {
  const [skills] = useState([
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "React", percentage: 70 },
    { name: "GitHub", percentage: 90 },
    { name: "Java Script", percentage: 50 },
    { name: "Tailwind", percentage: 65 },
  ]);

  const eduCont = [
    {
      title: "National Diploma in Computer Science.",
      institution: "Igbajo Polytechnic, Igbajo.",
      town: "Igbajo",
      date: "2012 - 2014",
      description: "Graduated with Distinction, Best Student .",
    },
    {
      title: "Senior High School,",
      institution: "Ogiyan Community High School,",
      town: "Ejigbo,",
      date: "2005 - 2008",
      description:
        "Completed high school with a focus on mathematics and science. Also, Senior Prefect",
    },
  ];

  const eduCont1 = [
    {
      title: "Junior High School,",
      institution: "Asewele Community High School,",
      town: "Asewele Korede",
      date: "2001 - 2004",
      description: "Best student in mathematics",
      // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
    },
    {
      title: "Primary School,",
      institution: "Baptist Primary School,",
      town: "Isanlu Isin",
      date: "1995-2001",
      description:
        "Completed high school with a focus on mathematics and science. Also, Senior Prefect",
      // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
    },
  ];

  const workCont = [
    {
      title: "Staff Of Peace House",
      institution: "Media Department,",
      town: "Gboko",
      date: "2024 - till date",
      description: "Labouring in Audio Section",
      // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
    },
    {
      title: "Full-Time Disciple",
      institution: "Revival Labours in Osun Zone",
      town: "Osogbo",
      date: "2019 - 2024",
      description:
        "Laboured as Tech. Man, Media Head, Class Leader, Field Leader.",
      // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
    },
  ];

  const workCont1 = [
    {
      title: "Public Servant",
      institution: "Transporter",
      town: "Osogbo",
      date: "2017-2018",
      description: "Within Osogbo and It environ",
      // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
    },
    {
      title: "Computer Operator",
      institution: "Ola-Oluwa Aina, Wire Industry",
      town: "Osogbo",
      date: "2015 - 2017",
      description: "I specialize in managing and optimizing daily workflows",
      // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
    },
  ];

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row mt-4 gap-4">
        {/* Image Section */}

        <div className="w-full md:w-1/2 justify-center relative">
          <div className="relative flex justify-center items-center w-full ">
            <img
              src={aboutPic}
              alt="about"
              className="w-[20em] h-[35em] justify-center items-center object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[110%] bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
          </div>

          <div className="justify-center items-center">
            <div>
              <h3 className="text-[2em] pl-40 font-bold  text-left capitalize">
                My Skills
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {skills.map((skill, index) => {
                const progress = 283 * (1 - skill.percentage / 100); // Calculate offset

                return (
                  <div
                    key={index}
                    className="chart relative inline-block w-[149px] h-[149px] text-center bg-gray-800  rounded-full"
                  >
                    <div className="relative w-[150px] h-[150px] flex justify-center items-center">
                      <div className="absolute w-[120px] h-[120px] bg-black rounded-full z-10"></div>

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
                          strokeDashoffset={progress} // Updates dynamically on code edit
                          strokeLinecap="round" //
                          className="stroke-current text-green-500  transition-all duration-500"
                          fill="none"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>

                      {/* Progress Text */}
                      <span className="absolute text-2xl font-bold z-20">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h5 className="text-center font-bold mt-2">{skill.name}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center mt-4">
          <p>
            <strong>
              Failure is <span>the condiment</span> That Gives{" "}
              <span>Success.</span>
            </strong>
          </p>
          <h3 className="font-bold text-green-500 text-[2em] underline decoration-amber-50 underline-offset-10">
            The Journey So Far
          </h3>
          <div>
            <h3 className="mt-4 text-[1.5em] font-bold">Education📖</h3>
            <div className="flex flex-col md:flex-row mt-4 gap-6">
              {/* Column 1 */}
              <div className="w-full md:w-1/2 text-center">
                {eduCont.map((item, index) => (
                  <EducationItem
                    key={index}
                    title={item.title}
                    institution={item.institution}
                    town={item.town}
                    date={item.date}
                    description={item.description}
                    children={item.children}
                  />
                ))}
              </div>

              {/* Vertical Line */}
              <div className="hidden md:block w-px bg-gray-300"></div>

              {/* Column 2 */}

              <div className="w-full md:w-1/2 text-center">
                {eduCont1.map((item, index) => (
                  <EducationItem
                    key={index}
                    title={item.title}
                    institution={item.institution}
                    town={item.town}
                    date={item.date}
                    description={item.description}
                    children={item.children}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mt-4 text-[1.5em] font-bold">Work Experience📖</h3>
              <div className="flex flex-col md:flex-row mt-4 gap-6">
                {/* Column 1 */}
                <div className="w-full md:w-1/2 text-center">
                  {workCont.map((item, index) => (
                    <EducationItem
                      key={index}
                      title={item.title}
                      institution={item.institution}
                      town={item.town}
                      date={item.date}
                      description={item.description}
                      children={item.children}
                    />
                  ))}
                </div>

                {/* Vertical Line */}
                <div className="hidden md:block w-px bg-gray-300"></div>

                {/* Column 2 */}

                <div className="w-full md:w-1/2 text-center">
                  {workCont1.map((item, index) => (
                    <EducationItem
                      key={index}
                      title={item.title}
                      institution={item.institution}
                      town={item.town}
                      date={item.date}
                      description={item.description}
                      children={item.children}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

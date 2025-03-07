import React from 'react'
import aboutPic from '../../assets/about.png';

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
                description: "Completed high school with a focus on mathematics and science. Also, Senior Prefect",
                // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
            }
    
           
        ];
    
        const eduCont1 = [
          {
            title: "Junior High School,",
            institution: "Ogiyan Community High School,",
            town: "Asewele Korede",
            date: "2001 - 2004",
            description: "Best student in mathematics",
            // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
        },
          {
              title: "Primary School,",
              institution: "Baptist Primary School,",
              town: "Isanlu Isin",
              date: "2005 - 2008",
              description: "Completed high school with a focus on mathematics and science. Also, Senior Prefect",
              // children: <p className="text-sm text-gray-500">Additional details can go here.</p>,
          },
    
          
      ];
    
        return (
            <div className="p-8">
                <div className="flex flex-col md:flex-row mt-4 gap-4">
                    {/* Image Section */}
                    
                    <div className="w-full md:w-1/2 justify-center relative">
                    <div className='relative flex justify-center items-center w-full '>
                        <img
                            src={aboutPic}
                            alt="about"
                            className="w-[20em] h-[35em] justify-center items-center object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-[110%] bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
                    </div>
                    <div>
                            
                    </div>
                    </div>
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center mt-4">
                        <p>
                            <strong>Failure is <span>the condiment</span> That Gives <span>Success.</span></strong>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Portfolio

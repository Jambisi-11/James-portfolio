import React from 'react';
import aboutPic from '../../assets/about.png';

const About = () => {
    return (
        <div className="p-4 w-full">
            <div className={`${window.innerWidth < 768 ? 'flex flex-col md:flex-row  gap-8':'flex flex-col md:flex-row mt-4 gap-8'}`}>            
                {/* Image Section (50%) */}
                <div className={`${window.innerWidth < 768 ? 'w-full flex justify-center items-center ': 'w-full flex justify-center items-center mt-12'}`}>
                    <div className='relative flex justify-center items-center w-full'>
                        <img
                            src={aboutPic}
                            alt="about"
                            className={`${window.innerWidth < 768 ? 'text-center text-[55px] mt-2' : 'w-[20em] h-[35em] object-cover'}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-[100%] bg-gradient-to-t from-black/100 to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Text Section (50%) */}
                <div className="w-full flex justify-center items-center">
                    <p className="text-leading-relaxed p-4 text-black bg-green-400 rounded-br-[3em] rounded-tl-[3em]" > <em>
                        <strong>"Hi, I’m Ajide Olabisi James, </strong>  an intermediate Front-End Developer with expertise in HTML, CSS, JavaScript (beginner), React.js, 
                        Tailwind, and collaborative tools like GitHub. I also have a foundational understanding of UX/UI design, which I’ve cultivated 
                        through hands-on experience and self-directed learning. While I’m not formally trained in design, I’m passionate about creating 
                        intuitive and visually appealing interfaces that enhance user experiences.
                        <br /><br />
                        I'm a full-time staff member at Living Seed Team, Media Department, based in Gboko, where I also work with the Software Department. 
                        For me, delving into the world of coding is not a career shift—it’s the fulfillment of a long-standing prophecy aimed at bringing 
                        value and relief to our software team. While I’m not yet where I want to be, I am deeply committed to continuously learning and acquiring new skills to enhance the software field. I thrive on tackling new challenges and collaborating with like-minded creatives to bring ideas to life, and I don’t easily give up.<br /><br />
                        Let’s connect and build something amazing together!"
                        </em>
                        </p>    
                </div>
            </div>
        </div>
    );
};

export default About;
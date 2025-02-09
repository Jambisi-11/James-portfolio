import React from 'react'
import chat from '../../assets/chat.png'
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";


    // Define icons in an array
    const socialIcons = [
      { id: "facebook", Icon: Facebook, link: "https://facebook.com/Banjames/"},
      { id: "twitter", Icon: Twitter, link: "https://x.com/JambisO"},
      { id: "linkedin", Icon: Linkedin, link: "https://t.co/DhAUDu6Nq3"},
      { id: "instagram", Icon: Instagram, link: "https://www.instagram.com/more_of_you_lord/"},
      
      
    ];

const Header = () => {
  return (
    <div className="w-[99vw] h-11 bg-gray-700 text-white p-4">
      <div className="w-[75vw] h-1.5 bg-gray-700 flex justify-between items-center m-auto mt-0 pt-0">
        <div className='flex items-center gap-2 '>
            <img src={chat} alt="chat" className="w-10 h-13" />
            <h4>Living Seed Upcoming Meetings...</h4>
            <div className="flex space-x-1 mx-20 text-gray-300 text-sm">
                {/* Left Arrow with Thicker Stick & Same Arrowhead */}
               <a href="https://livingseed.org/" target='_blank'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-4 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {/* Thicker Stick */}
                        <line x1="17" y1="12" x2="5" y2="12" strokeWidth="2" strokeLinecap="round" />
                        {/* Arrowhead */}
                        <polyline points="10 6, 5 12, 10 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <div className="w-[1px] h-5  bg-gray-400"></div>
                {/* Right Arrow with Thicker Stick & Same Arrowhead */}
                <a href="https://livingseed.org/" target='_blank'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-4 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {/* Thicker Stick */}
                        <line x1="7" y1="12" x2="19" y2="12" strokeWidth="2" strokeLinecap="round" />
                        {/* Arrowhead */}
                        <polyline points="14 6, 19 12, 14 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                </div>
             </div>
            
            
            <div className="flex  h-11 space-y-4">
                    {/* Social Icons */}
                    <div className="flex ">
                    {socialIcons.map(({ id, Icon, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel='noopener noreferrer'
                            className="w-6.5 h-11  bg-gray-00 flex items-center justify-center border-l border-gray-600 "
                        >
                            <Icon
                           className={`w-5 h-3.5 ${id === "instagram" ? "stroke-white hover:stroke-green-500" : "fill-white hover:fill-green-500"}`}
                           />
                        </a>
                        ))}

                    </div>

                    {/* Contact Me Section */}
                    <div className="flex items-center gap-2 h-12 bg-green-500 w-33 group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-3.5 text-gray-100 transition-transform duration-200 ease-in-out group-hover:translate-x-0.5"
      
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {/* First Arrow */}
                            <polyline points="10 6, 15 12, 10 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Second Arrow */}
                            <polyline points="15 6, 20 12, 15 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h6 className='text-[13px]'>Contact Me</h6>
                    </div>

                    <div>
                        
                    </div>
                </div>
            
        </div>
    </div>
            
        )
        }

export default Header

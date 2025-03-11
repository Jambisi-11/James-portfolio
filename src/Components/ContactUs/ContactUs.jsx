import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";
import emailjs from 'emailjs-com';
import Location from '../../assets/location.png'
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import { FaWhatsapp } from "react-icons/fa";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        to_name: '', // Matches {{to_name}} in the template
        from_name: '', // Matches {{from_name}} in the template
        message: '' // Matches {{message}} in the template
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Log formData to verify its contents
        console.log('Form Data:', formData);

        const serviceID = 'service_fslhwzt'; 
        const templateID = 'template_spvhx8q';
        const userID = '_3OftAm-n54lfi8ql'; 

        // Send the email using EmailJS
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ to_name: '', from_name: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send message. Please try again.');
            });
    };

    const socialIcons = [
        { id: "facebook", Icon: Facebook, link: "https://facebook.com/Banjames/" },
        { id: "twitter", Icon: Twitter, link: "https://x.com/JambisO" },
        { id: "linkedin", Icon: Linkedin, link: "https://t.co/DhAUDu6Nq3" },
        { id: "instagram", Icon: Instagram, link: "https://www.instagram.com/more_of_you_lord/" },
        { id: "telegram", Icon: Send, link: "https://t.me/Winnowing_Fan" },
        { id: "whatsapp", Icon: FaWhatsapp, link: "https://bitly.cx/AOJambis" }
    ];

    return (
        <div className="p-8 ">
          <h2 className="text-2xl font-bold  mb-4">Contact Me</h2>
          <div className='w-full  gap-6'>
            <div className="w-full">
                <div className={`${window.innerWidth <= 768 ? 'flex flex-col gap-8 justify-center items-center ' : 'mb-6 flex gap-8 justify-center items-center  text-[20px]'}`}>
                    <div className={`${window.innerWidth <= 768 ? 'flex flex-col w-[290px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300' : 'flex flex-col w-[350px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300'}`}>
                    
                        <div><img src={Location} className='w-10' alt="" /></div>
                        <div>
                            <p> <span className='text-green-500'>Home Address: <br /> </span>Back Winika Hotel, GRA, Gboko, Benue State, Nigeria.</p> <br />
                        </div>
                    </div>
                   
                    <div className={`${window.innerWidth <= 768 ? 'flex flex-col w-[290px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300' : 'flex flex-col w-[350px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300'}`}>
                        <div><img src={Location} className='w-10' alt="" /></div>
                        <p><span className='text-green-500'>Office Address:<br /></span> Peace House Camp, </p> <br />
                    </div>
                    
                    <div className={`${window.innerWidth <= 768 ? 'flex flex-col w-[290px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300' : 'flex flex-col w-[350px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300'}`}>
                        <div><img src={Phone} className='w-10' alt="" /></div>
                        <p><span className='text-green-500'>Phone:<br /></span> +2347032398646 / +2348026898601</p>
                    </div>

                    <div className={`${window.innerWidth <= 768 ? 'flex flex-col w-[290px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300' : 'flex flex-col w-[350px] h-[200px] p-4 justify-center items-center text-center rounded-2xl border border-gray-700 hover:scale-105 hover:font-bold hover:shadow-amber-50 transition-transform duration-300'}`}>
                    <div><img src={Email} className='w-15' alt="" /></div>
                        <p className='hover:text-green-500'><span className='text-green-500'>Email: </span><a href="mailto:jambis.banji@yahoo.com">jambis.banji@yahoo.com</a> or <br /><a href="mailto:jamesjoanna1117@gmail.com">jamesjoanna1117@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold  mb-4">You can conncet via-</h2>
                 <div className={`${window.innerWidth <= 768 ? 'flex flex-col gap-8' : 'flex w-[80%] gap-16 justify-center item-center mx-auto min-h-screen'}`}>  
                    <div className= {`${window.innerWidth <= 768 ? 'flex justify-center items-center': ''}`}>
                    <div className={`${window.innerWidth <= 768 ? 'flex space-x-4 mb-2  bg-gray-900 h-14 p-2 w-73 rounded-2xl':'flex  space-x-4 mb-2 bg-gray-900 h-14 p-2 w-73 rounded-2xl'}`} >
                        {socialIcons.map(({ id, Icon, link }) => (
                            <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500">
                                <Icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                </div>
            
            <div className="w-1/2">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className={`${window.innerWidth < 768 ? 'w-100 flex flex-col justify-center items-center':'space-y-4 w-100'}`}>
                    <div>
                        <label htmlFor="to_name" className="block text-sm font-medium text-green-500">Name</label>
                        <input
                            type="text"
                            id="to_name"
                            name="to_name"
                            value={formData.to_name}
                            onChange={handleChange}
                            className={`${window.innerWidth <= 768 ? 'mt-1 block hover:text-black hover:bg-green-600 w-[260px] p-2  hover:border-black border border-gray-300 rounded-md':'mt-1 block hover:text-black hover:bg-green-600 w-full p-2  hover:border-black border border-gray-300 rounded-md'}`}
                        
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="from_name" className="block text-sm font-medium  hover:border-black text-green-500">Email</label>
                        <input
                            type="email"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            className={`${window.innerWidth <= 768 ? 'mt-1 block hover:text-black hover:bg-green-600 w-[260px] p-2  hover:border-black border border-gray-300 rounded-md':'mt-1 block hover:text-black hover:bg-green-600 w-full p-2  hover:border-black border border-gray-300 rounded-md'}`}
                        
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-green-500">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`${window.innerWidth <= 768 ? 'mt-1 block hover:text-black hover:bg-green-600 w-[260px] p-2  hover:border-black border border-gray-300 rounded-md':'mt-1 block hover:text-black hover:bg-green-600 w-full p-2  hover:border-black border border-gray-300 rounded-md'}`}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                   

                    <button type="submit" className="px-4 py-2 w-[30%] bg-green-500 text-green-500 font-bold rounded-md hover:bg-green-600">Send</button>
                </form>
            </div>
          </div>
        </div>
    </div>
    );
};

export default ContactUs;
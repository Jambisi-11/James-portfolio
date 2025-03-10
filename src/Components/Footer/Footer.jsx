
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-[10em] bg-black text-white'>
      <div className='h-[10em] flex flex-col justify-center items-center'>
        <ul className= {`${window.innerWidth < 768 ? 'text-[10px] flex justify-center items-center gap-4 font-bold p-2 border-y-1 w-[70%]' : 'flex justify-center items-center gap-4 font-bold p-4 border-y-1 w-[60%]' }`}>
          <li><Link to="/about" className="hover:text-green-400">ABOUT ME</Link></li>
          <li><Link to="/career" className="hover:text-green-400">CAREER</Link></li>
          <li><Link to="/blog" className="hover:text-green-400">BLOG</Link></li>
          <li><Link to="/gallery" className="hover:text-green-400">GALLERY</Link></li>
          <li><Link to="/contactus" className="hover:text-green-400">CONTACT ME</Link></li>
        </ul>
        <div className='flex justify-center items-center gap-4 mt-8'>Copy right, @Ajide Olabis James-2025</div>
      </div>
      
    </div>
  );
};

export default Footer;

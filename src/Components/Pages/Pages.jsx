import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const pagesItem = [
  { id: "blog", name: 'BLOG', path: '/blog' },
  { id: "contact", name: 'CONTACT', path: '/contact' },
];

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Pages Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
      >
        Pages
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 text-white p-3 rounded-lg shadow-lg w-32 bg-gray-900">
          <ul className="flex flex-col gap-2">
            {pagesItem.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-green-400 transition">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pages;

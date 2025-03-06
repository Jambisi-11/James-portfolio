
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from '../../assets/port.png';
import { Search, X } from 'lucide-react';

const menuItems = [
  { id: "home", name: 'HOME', path: '/' },
  { id: "about", name: 'ABOUT', path: '/about' },
  { id: "service", name: 'SERVICE', path: '/service' },
  { id: "portfolio", name: 'PORTFOLIO', path: '/portfolio' },
  { id: "pages", name: 'PAGES', path: '/pages' },
];

const Menu = () => {
  const [inputSearch, setInputSearch] = useState("");
  const inputRef = useRef(null);
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [selectedItem, setSelectedItem] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Function to filter menu items
  const handleSearch = () => {
    if (inputSearch.trim() === "") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter((item) =>
          item.name.toLowerCase().includes(inputSearch.toLowerCase())
        )
      );
    }
  };

  return (
    <nav className='flex justify-center items-center h-20 text-white border-b border-gray-800'>
      <div className='w-[75vw] flex items-center justify-between m-auto'>
        <img src={logo} alt='logo' className='w-10 h-8 rounded-[1.5em]' />

        {/* Navigation Menu */}
        <ul className='flex gap-4 ml-auto'>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li 
                key={item.id} 
                className={`text-sm p-1 cursor-pointer transition ${
                  selectedItem === item.id ? "underline underline-offset-4 decoration-green-500" 
                  : "hover:text-gray-400"
                }`}
                onClick={() => setSelectedItem(item.id)}
              >
                <Link to={item.path}>{item.name}</Link> {/* Add Link for navigation */}
              </li>
            ))
          ) : (
            <li className="text-red-400">No results found.</li>
          )}
        </ul>

        {/* Search Input */}
        <div className="flex items-center gap-2 ml-24 px-4 py-2 text-white rounded-lg">
          <Search 
            className="w-5 h-5 text-green-500 cursor-pointer hover:text-green-500 transition" 
            onClick={handleSearch}
          />
          <input
            ref={inputRef}
            type="text"
            className="text-white border-none outline-none"
            placeholder="Search..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Press "Enter" to search
          />
          {inputSearch && (
            <X
              className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition"
              onClick={() => {
                setInputSearch("");
                setFilteredItems(menuItems);
              }}
            />
          )}
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <div className="grid grid-cols-3 gap-1 w-6 h-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            ))}
          </div>

          {/* Dropdown Items */}
          {isOpen && (
            <div className="absolute top-10 right-0 text-white p-3 rounded-lg shadow-lg w-32 bg-gray-900">
              <ul className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <li key={item.id} className="cursor-pointer hover:text-green-400 transition">
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}    
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

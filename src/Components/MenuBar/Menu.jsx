import React, { useState, useRef } from "react";
import logo from '../../assets/yourWord.png';
import { Search, X} from 'lucide-react';
import Blog from '../Blog/Blog';
import SingleBlong from '../blog/SingleBlog/SingleBlog';
import PortDetails from '../Portfolio/Port-Details/PortDetails'


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
      setFilteredItems(menuItems); // Reset if empty
    } else {
      setFilteredItems(
        menuItems.filter((item) =>
          item.name.toLowerCase().includes(inputSearch.toLowerCase())
        )
      );
    }
  };


  return (
    <nav className='flex justify-center items-center h-20 text-white border-b border-gray-800 '>
    <div className='w-[75vw] items-center flex justify- m-auto'>
      <img src={logo} alt='logo' className='w-20 h-8 rounded-[1.5em]' />
      <ul className='flex gap-4 ml-auto'>
      {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li 
              key={item.id} 
              className={`text-sm p-1 cursor-pointer transition ${
                selectedItem === item.id ? "underline underline-offset-30 decoration-green-500" 
                : "hover:text-gray-400"
              }`}
              
              onClick={() => setSelectedItem(item.id)}
              >
              {item.name}
            </li>
          ))
        ) : (
          <li className="text-red-400">No results found.</li>
        )}
      </ul>
        <div>
        <div className="flex items-center gap-2 ml-24 px-4 py-2  text-white rounded-lg hover: ">
      <Search 
        className="w-5 h-5 text-green-500 cursor-pointer hover:text-green-500 transition" 
        onClick={handleSearch}
        />
      <input
        ref={inputRef}
        type="text"
        className=" text-white border-none outline-none"
        placeholder="Search..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Press "Enter" to search
      />
     {/* Clear (X) Icon - Shows only if input has text */}
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
    
        </div>


            <div className="relative">
            {/* Clickable 3x3 Dot Menu Icon */}
            <div
              className="grid grid-cols-3 gap-1 w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              ))}
            </div>

            {/* Dropdown Menu (Appears on Click) */}
            {isOpen && (
              <div className="absolute top-10 right text-white p-3 rounded-lg shadow-lg w-32">
                <ul className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      className="cursor-pointer hover:text-green-400 transition" 
                    >
                      {item.name}
                    </li>  
                  ))}    
                </ul>
                      <Blog />
                      <SingleBlong />
                      <PortDetails />
              </div>
            )}
          </div>
      </div>
      

    </nav>
    
  );
};

export default Menu;

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { Search, X } from "lucide-react";

const menuItems = [
  { id: "home", name: "HOME", path: "/" },
  { id: "about", name: "ABOUT", path: "/about" },
  { id: "service", name: "SERVICE", path: "/service" },
  { id: "portfolio", name: "PORTFOLIO", path: "/portfolio" },
  { id: "pages", name: "PAGES" },
];

const pagesItem = [
  { id: "blog", name: "BLOG", path: "/blog" },
  { id: "contactus", name: "CONTACT US", path: "/contactus" },
];

const Menu = () => {
  const location = useLocation();
  const [inputSearch, setInputSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);

  const pagesRef = useRef(null);
  const menuRef = useRef(null);

  // Get active menu item based on URL
  const getActiveItem = () => {
    const currentPath = location.pathname;
    const activeItem = menuItems.find((item) => item.path === currentPath);
    return activeItem ? activeItem.id : "";
  };

  const [selectedItem, setSelectedItem] = useState(getActiveItem());

  // Update selected item on route change
  useEffect(() => {
    setSelectedItem(getActiveItem());
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setIsPagesOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsPagesMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter menu items
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
    <nav className="flex justify-center items-center h-20 text-white border-b border-gray-800">
      <div className="w-[75vw] flex items-center justify-between m-auto">
        <img src={logo} alt="logo" className="w-16 h-16 md:justify-around rounded-[1.5em]" />

        {/* Navigation Menu */}
        <ul className=" gap-4 ml-auto hidden md:flex ">
          {filteredItems.map((item) => {
            const isActive = selectedItem === item.id;
            const isPagesActive = item.id === "pages" && isPagesOpen;

            return (
              <li
                key={item.id}
                className={`relative text-sm p-1 cursor-pointer transition ${
                  (isActive && !isPagesOpen) || isPagesActive
                    ? "underline underline-offset-25 decoration-green-500"
                    : "hover:text-gray-400"
                }`}
                onClick={() => {
                  if (item.id === "pages") {
                    setIsPagesOpen(!isPagesOpen);
                    setSelectedItem(""); 
                  } else {
                    setSelectedItem(item.id);
                    setIsPagesOpen(false); 
                  }
                }}
              >
                {item.id === "pages" ? "PAGES" : <Link to={item.path}>{item.name}</Link>}

                {/* Dropdown for PAGES */}
                {isPagesOpen && item.id === "pages" && (
                  <div
                    ref={pagesRef}
                    className="absolute top-6 mt-8 left-0 text-white p-3 rounded-lg shadow-lg w-32 bg-gray-900"
                  >
                    <ul className="flex flex-col gap-2">
                      {pagesItem.map((subItem) => (
                        <li key={subItem.id} className="cursor-pointer hover:text-green-400 transition">
                          <Link to={subItem.path}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Search Input */}
        <div className="hidden md:flex items-center gap-2 ml-24 px-4 py-2 text-white rounded-lg">
          <Search
            className="w-5 h-5 text-green-500 cursor-pointer hover:text-green-500 transition"
            onClick={handleSearch}
          />
          <input
            type="text"
            className="text-white border-none outline-none"
            placeholder="Search..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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

        {/* 9-Dot Menu */}
        <div className="relative ml-6" ref={menuRef}>
          <div className="grid grid-cols-3 gap-1 w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            ))}
          </div>

          {/* Dropdown for 9-Dot Menu */}
          {isMenuOpen && (
            <div className="absolute top-10 right-0 text-white p-3 rounded-lg shadow-lg w-32 bg-gray-900">
              <ul className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer hover:text-green-400 transition"
                    onClick={() => {
                      if (item.id === "pages") {
                        setIsPagesMenuOpen(!isPagesMenuOpen);
                      } else {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.id === "pages" ? "PAGES" : <Link to={item.path}>{item.name}</Link>}

                    {/* Dropdown for PAGES inside 9-Dot Menu */}
                    {isPagesMenuOpen && item.id === "pages" && (
                      <div className="mt-2 ml-4">
                        <ul className="flex flex-col gap-2">
                          {pagesItem.map((subItem) => (
                            <li key={subItem.id} className="cursor-pointer hover:text-green-400 transition">
                              <Link to={subItem.path}>{subItem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
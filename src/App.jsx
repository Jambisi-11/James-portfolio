import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/MenuBar/Menu';
import Bg from './assets/Backgground.png';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallary/Gallery';
import Pages from './Components/Pages/Pages'
import Career from './Components/Career/Career';
import Blog from './Components/Blog/Blog';
const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className=" bg-cover  bg-opacity-50"
    >
      {/* Fixed header and menu to prevent pushing down */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900">
        <Header />
        <Menu />
      </div>

      {/* Content Wrapper (Push down content to avoid overlapping) */}
      <div className="pt-[120px] w-[80vw] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/carrer" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;

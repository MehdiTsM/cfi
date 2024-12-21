import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import { FaInfoCircle, FaBoxOpen, FaHandsHelping, FaEnvelope, FaUsers, FaBars } from 'react-icons/fa';
import logo from "./images/logo.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-gradient-to-r from-customColor2 via-customColor1 to-customColor1 p-3 shadow-md transition-opacity duration-700 opacity-0 animate-fadeIn'>
      <div className='flex justify-between custom:justify-around items-center'>
        {/* Logo */}
        <div className='text-white font-bold text-3xl'>
          <NavLink to="/">
          <img src={logo} className="w-24 h-auto custom:w-32" alt="Logo" />
          </NavLink>
        </div>

        {/* Burger Menu for screens 800px and below */}
        <div className='custom:hidden ml-auto'>
          <button 
            onClick={toggleMenu} 
            className='text-customColor3 text-3xl focus:outline-none hover:text-customColor2 transition-transform duration-300 relative top-1'
          >
            <FaBars />
          </button>
        </div>

        {/* Navigation for larger screens */}
        <nav className='hidden custom:flex space-x-6 text-customColor3 text-lg tracking-wide font-poppins ml-8'>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `flex flex-col items-center group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <FaInfoCircle className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
            <span className='group-hover:border-customColor2'>À propos</span>
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `flex flex-col items-center group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <FaBoxOpen className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
            <span className='group-hover:border-customColor2'>Nos produits</span>
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `flex flex-col items-center group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <FaHandsHelping className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
            <span className='group-hover:border-customColor2'>Nos services</span>
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `flex flex-col items-center group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <FaEnvelope className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
            <span className='group-hover:border-customColor2'>Contact</span>
          </NavLink>
          <NavLink 
            to="/reference" 
            className={({ isActive }) => `flex flex-col items-center group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <FaUsers className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
            <span className='group-hover:border-customColor2'>Référence clients</span>
          </NavLink>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`custom:hidden mt-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className='flex flex-col space-y-4 text-customColor3 text-lg tracking-wide font-poppins'>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `flex items-center justify-between group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <span>À propos</span>
            <FaInfoCircle className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `flex items-center justify-between group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <span>Nos produits</span>
            <FaBoxOpen className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `flex items-center justify-between group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <span>Nos services</span>
            <FaHandsHelping className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `flex items-center justify-between group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <span>Contact</span>
            <FaEnvelope className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
          </NavLink>
          <NavLink 
            to="/reference" 
            className={({ isActive }) => `flex items-center justify-between group transition-all duration-300 ${isActive ? 'text-customColor2' : 'text-customColor3'}`}>
            <span>Référence clients</span>
            <FaUsers className='text-customColor2 group-hover:scale-110 transition-transform duration-300' />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

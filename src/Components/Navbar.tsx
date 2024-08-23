import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from './images/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple text-white py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <style>
        {`
          @font-face {
            font-family: 'BlackCobra';
            src: url('/fonts/black-cobra.regular.ttf') format('truetype');
          }
          .aragya-logo {
            font-family: 'RetroQesmo', sans-serif;
          }
        `}
      </style>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Brand Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-semibold aragya-logo">ARAGYA</span>
        </div>

        <div className="hidden md:flex space-x-8 justify-center flex-grow">
          {['Home', 'Instructions', 'Components Used', 'General Information', 'About Us'].map((tab) => (
            <div key={tab} className="relative">
              <Link
                to={tab === 'Home' ? '/' : `/${tab.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-white hover:text-gray-200 transition-colors duration-300 ${location.pathname === `/${tab.replace(/\s+/g, '-').toLowerCase()}` || (tab === 'Home' && location.pathname === '/') ? 'font-bold' : ''}`}
              >
                {tab}
              </Link>
              {location.pathname === `/${tab.replace(/\s+/g, '-').toLowerCase()}` || (tab === 'Home' && location.pathname === '/') ? (
                <div
                  className="absolute bottom-0 left-0 w-full h-2 bg-white rounded-full transition-all duration-300 transform scale-x-110"
                  style={{
                    height: '4px',
                    borderRadius: '10px',
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
            Patient DBMS
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {['Home', 'Instructions', 'Components Used', 'General Information', 'About Us'].map((tab) => (
            <div key={tab}>
              <Link
                to={tab === 'Home' ? '/' : `/${tab.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left text-white px-4 py-2 transition-colors duration-300 ${
                  location.pathname === `/${tab.replace(/\s+/g, '-').toLowerCase()}` || (tab === 'Home' && location.pathname === '/') ? 'bg-gray-800' : ''
                }`}
              >
                {tab}
              </Link>
              {tab === 'General Information' && isDropdownOpen && (
                <div className="pl-4 mt-2">
                  <Link
                    to="/view-emergency-uses"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:bg-gray-800 px-4 py-2"
                  >
                    View Emergency Uses
                  </Link>
                  <Link
                    to="/view-parameters"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:bg-gray-800 px-4 py-2"
                  >
                    View Parameters
                  </Link>
                </div>
              )}
            </div>
          ))}
          <div className="mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
              Patient DBMS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

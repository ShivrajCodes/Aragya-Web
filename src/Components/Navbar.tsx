import React, { useState } from 'react';
import logoImage from './images/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
    setIsMenuOpen(false);
    if (tabName === 'General Information') {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-custom-black via-custom-dark-purple to-custom-purple text-white py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Brand Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-semibold">Aragya</span>
        </div>

        <div className="hidden md:flex space-x-8 justify-center flex-grow">
          {['Home', 'Instructions', 'Components Used', 'General Information', 'About Us'].map(tab => (
            <div key={tab} className="relative">
              <button
                onClick={() => handleTabClick(tab)}
                className={`text-white hover:text-gray-200 ${selectedTab === tab ? 'underline' : ''}`}
              >
                {tab}
              </button>
              {tab === 'General Information' && isDropdownOpen && (
                <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg py-2">
                  <button
                    onClick={() => handleTabClick('View Emergency Uses')}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    View Emergency Uses
                  </button>
                  <button
                    onClick={() => handleTabClick('View Parameters')}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    View Parameters
                  </button>
                </div>
              )}
              {selectedTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white mt-1 transition-all duration-300"></div>
              )}
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
          {['Home', 'Instructions', 'Components Used', 'General Information', 'About Us'].map(tab => (
            <div key={tab}>
              <button
                onClick={() => handleTabClick(tab)}
                className={`block w-full text-left text-white px-4 py-2 ${selectedTab === tab ? 'bg-gray-800' : ''}`}
              >
                {tab}
              </button>
              {tab === 'General Information' && isDropdownOpen && (
                <div className="pl-4 mt-2">
                  <button
                    onClick={() => handleTabClick('View Emergency Uses')}
                    className="block text-white hover:bg-gray-800 px-4 py-2"
                  >
                    View Emergency Uses
                  </button>
                  <button
                    onClick={() => handleTabClick('View Parameters')}
                    className="block text-white hover:bg-gray-800 px-4 py-2"
                  >
                    View Parameters
                  </button>
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

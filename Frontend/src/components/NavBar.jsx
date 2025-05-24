import React, { useState, useEffect,useContext } from "react";
import { Menu, X, Search, Calendar, Trophy, Users, BarChart2, Play} from "lucide-react";
import ipl from '../assets/images/ipl.jpg';
import GlobalStore from '../contexts/GlobalStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const { filterStatus,setFilterStatus } = useContext(GlobalStore);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const navItems = [
    // Removed Live Scores (will add button instead)
    { name: "Series", icon: <Calendar className="w-5 h-5" /> },
    { name: "Teams", icon: <Users className="w-5 h-5" /> },
    { name: "News", icon: <Trophy className="w-5 h-5" /> },
    { name: "Stats", icon: <BarChart2 className="w-5 h-5" /> }
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md py-2" : "shadow-sm py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={ipl} alt="logo" className="h-7 pr-3 object-contain" />
            <span className="text-xl font-bold text-indigo-600 tracking-tight">CricLive</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
    <button
  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-100 transition-colors duration-200 flex items-center"
  onClick={() =>
    setFilterStatus((prev) => (prev === 'Live' ? false : 'Live'))
  }
>
  <span className="mr-3"><Play/></span>
  {filterStatus === 'Live' ? 'Show All' : 'Live Matches'}
</button>


            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.replace(/\s+/g, "").toLowerCase()}`}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-100 transition-colors duration-200 flex items-center"
              >
                <span className="hidden lg:block mr-1">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <div className={`flex items-center transition-all duration-300 ${searchActive ? "w-64" : "w-8"}`}>
                <div 
                  className="cursor-pointer p-1 rounded-full hover:bg-gray-100"
                  onClick={() => setSearchActive(!searchActive)}
                >
                  <Search className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
                </div>
                {searchActive && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none text-sm py-1 text-gray-700 transition-all duration-200"
                    autoFocus
                    onBlur={() => setSearchActive(false)}
                  />
                )}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                className="hamburger-button p-1 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-inner border-t border-gray-100">
          {/* Live Button for Mobile */}
          <button
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-indigo-100 transition-colors duration-200 flex items-center"
            onClick={() => {
               setFilterStatus((prev) => (prev === 'Live' ? false : 'Live'))
              setIsOpen(false);
            }}
          >
            <span className="mr-1.5"><Play/></span>
            {filterStatus === 'Live' ? 'Show All' : 'Live Matches'}
          </button>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.replace(/\s+/g, "").toLowerCase()}`}
              className="flex px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200 items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </a>
          ))}

          {/* Optional Account/Login */}
          <div className="pt-4 pb-1 border-t border-gray-200">
            <a
              href="#account"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

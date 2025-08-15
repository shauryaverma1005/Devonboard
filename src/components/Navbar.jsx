import React, { useState } from "react";
import { FiMenu, FiShoppingCart, FiUser, FiSearch, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {logoICO} from "../assets/assets";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/About" },
    { id: 3, title: "Pricing", path: "/Pricing" },
    { id: 4, title: "Work", path: "/Work" },
    { id: 5, title: "Contact", path: "/Contact" }
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-zinc-900 text-white backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <img 
              src={logoICO} 
              alt="Brand Logo" 
              className="h-16 w-auto object-contain"
              />
            
          </div>
          

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="text-md font-medium hover:text-blue-600 transition-colors duration-200"
                aria-label={item.title}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div>
            <button className="bg-violet-600 p-3 h-11 hover:bg-white/50 rounded-xl transition-colors duration-200 center">
                  <a href="">Book Session</a>
             </button>
            
            </div>
            
          

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/50 rounded-full transition-colors duration-200"
            aria-label="Menu"
          >
            {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-sm border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-white/50 rounded-md transition-colors duration-200"
                >
                  {item.title}
                </button>
              ))}
              <div className="flex items-center justify-around py-4 border-t">
                
               
                <button className="p-2 hover:bg-white/50 rounded-full transition-colors duration-200 center">
                  <FiUser className="text-xl" /> <p> Book Session</p>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
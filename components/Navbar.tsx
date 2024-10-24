import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-black text-white sticky top-0 z-10">
      <h1 className="text-lg font-bold">Pipit</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About Me</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

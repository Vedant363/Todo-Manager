import React from 'react';
import { FaHome, FaTasks } from 'react-icons/fa'; // Importing icons for demonstration

const Navbar = () => {
  return (
    <nav className='w-full max-w-lg mx-auto mt-4 flex justify-between items-center bg-orange-700 text-white py-2 px-4 border-2 border-orange-400 shadow-md rounded-md'>
      <div className="logo">
        <span className='font-bold text-lg mx-2'>Todo Manager</span>
      </div>
      <ul className="flex gap-6">
        <li className='flex items-center cursor-pointer hover:text-orange-300 transition-all'>
          <FaHome className='mr-2' /> Home
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

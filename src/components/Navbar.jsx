import React from 'react';

const Navbar = () => {
  return (
    <div className="p-4 bg-gray-100 shadow-lg">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* LOGO CONTAINER */}
        <span className="text-2xl font-bold text-gray-800">
          Booking App
        </span>

        {/* BUTTON CONTAINER */}
        <div className="flex flex-wrap space-x-4">
          <button className="px-6 py-2 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300">
            Register
          </button>
          <button className="px-6 py-2 rounded-lg ring-1 ring-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

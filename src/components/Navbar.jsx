import React from 'react';

const Navbar = () => {
    return (
        <div className="p-4 bg-gray-100 shadow-lg">
            <div className="flex justify-between items-center">
        {/* LOGO  CONTAINER */}
                <span className="text-xl font-bold text-gray-800">Booking App</span>
                 
         {/* BUTTON CONTAINER */}
                <div className="flex space-x-4">
                    <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-300">
                        Register
                    </button>
                    <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300">
                        Login
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

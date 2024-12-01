// components/Navbar/NavbarTimeSlot.js
import React from 'react';

const NavbarTimeSlot = () => {
    return (
        <div className="hidden md:flex items-center text-gray-500 hover:text-gray-700 cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                />
            </svg>
            <span>Dec 6, 12:00PM–3:00PM</span>
        </div>
    );
};

export default NavbarTimeSlot;
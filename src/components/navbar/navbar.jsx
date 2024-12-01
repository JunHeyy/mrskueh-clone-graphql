// components/Navbar/Navbar.js
import React from 'react';
import NavbarBrand from './brand/navbar-brand';
import NavbarLocation from './location/navbar-location';
import NavbarTimeSlot from './timeslot/navbar-timeslot';
import NavbarCart from './cart/navbar-cart';
import NavbarUserIcon from './usericon/navbar-user-icon';
import NavbarMobileMenu from './mobile/navbar-mobile-menu';
const Navbar = () => {
    return (
        <div className="w-full lg:fixed z-40">
            <nav className="transition-all bg-white shadow-md flex items-center justify-between h-14">
                <div className="flex items-center space-x-3">
                    <NavbarBrand />
                    {/* <NavbarLocation />
                    <NavbarTimeSlot />
                    <NavbarCart />
                    <NavbarUserIcon />
                    <NavbarMobileMenu /> */}
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
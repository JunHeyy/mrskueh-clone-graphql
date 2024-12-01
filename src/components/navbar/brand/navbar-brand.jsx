// components/Navbar/NavbarBrand.js

import React from 'react';
const NavbarBrand = () => {
    return (
        <a href="/" className="block w-auto flex-shrink-0 ml-4">
            <img
                src="https://mrskueh.com/assets/images/atlas-core-active-storage/mrskueh/mrskueh-logo.png"
                alt="Mrs Kueh"
                className="h-8 w-auto"
            />
        </a>
    );
};

export default NavbarBrand;
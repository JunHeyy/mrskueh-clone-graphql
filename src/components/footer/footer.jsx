import React from 'react';
import FooterBrand from './footer-brand';
import FooterLocation from './footer-location';
import FooterOpeningHours from './footer-opening-hours';
import FooterSocials from './footer-socials';

const Footer = () => {
    return (
        <footer className="w-full bg-white shadow-md mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-4 gap-4">
                    <FooterBrand />
                    <FooterLocation />
                    <FooterOpeningHours />
                    <FooterSocials />
                </div>
            </div>
        </footer>
    );
};;
export default Footer;
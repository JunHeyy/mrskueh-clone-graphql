import { useState, useEffect } from 'react';

export const useScrollSpy = (offset = 200) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('[data-section]');
            const scrollPosition = window.scrollY + offset;

            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('data-section');
                }
            });

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection, offset]);

    return activeSection;
};

export default useScrollSpy
const MenuNavigation = ({ menuData, activeSection, scrollToSection }) => {
    return (
        <div className="sticky top-24 w-64 h-fit bg-white z-20">
            <h2 className="text-3xl font-bold text-black mb-4">Our Menu</h2>
            <div className="flex flex-col space-y-2">
                {menuData?.getMenuOptimised?.sections?.map(section => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`
                            pl-4 text-left py-2 text-sm transition-all hover:text-black relative
                            ${activeSection === section.id
                                ? 'text-black font-bold before:bg-red-500'
                                : 'text-gray-500 before:bg-gray-200'
                            }
                        `}
                    >
                        {section.label}
                        <span className={`
                            before:absolute before:left-0 before:top-0 before:h-full before:w-1 
                            before:transition-all
                        `}></span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MenuNavigation;

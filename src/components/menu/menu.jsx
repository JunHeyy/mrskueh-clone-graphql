import MenuNavigation from "./navigation/menu-navigation";
import MenuContent from './content/menu-content'
import useScrollSpy from '../../hooks/menu/useScrollSpy'
import useScrollToSection from '../../hooks/menu/useScrollToSection'

const Menu = ({ menuData }) => {
    const activeSection = useScrollSpy(200);
    const scrollToSection = useScrollToSection(150);

    return (
        <div className="max-w-7xl mx-auto p-8">
            <div className="flex gap-8">
                <MenuNavigation
                    menuData={menuData}
                    activeSection={activeSection}
                    scrollToSection={scrollToSection}
                />
                <MenuContent menuData={menuData} />
            </div>
        </div>
    );
};
export default Menu
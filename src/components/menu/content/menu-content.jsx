import MenuSection from '../section/menu-section'

const MenuContent = ({ menuData }) => (
    <div className="flex-1 grid gap-8">
        {menuData?.getMenuOptimised?.sections?.map(section => (
            <MenuSection key={section.id} section={section} />
        ))}
    </div>
);

export default MenuContent
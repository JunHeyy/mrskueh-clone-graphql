import MenuItemCard from '../item/menu-item-card'

const MenuSection = ({ section }) => (
  <div
    data-section={section.id}
    className="bg-gray-50 rounded-lg p-6 shadow-sm"
  >
    <h3 className="text-2xl font-semibold text-black mb-6">{section.label}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.items.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default MenuSection

const MenuModalButton = ({ price, quantity }) => (
    <button className="flex-grow py-2 bg-red-500 text-white rounded-sm hover:bg-red-600 transition-colors">
        Add (${((price * quantity) / 100).toFixed(2)})
    </button>
);

export default MenuModalButton
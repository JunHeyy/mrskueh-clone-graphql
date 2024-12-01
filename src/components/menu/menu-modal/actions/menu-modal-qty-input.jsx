const MenuModalQtyInput = ({ quantity, onDecrement, onIncrement, onChange }) => (
    <div className="flex items-center border rounded-sm border-2 border-black">
        <button onClick={onDecrement} className="px-4 text-black hover:bg-gray-100">
            -
        </button>
        <input
            type="number"
            value={quantity}
            onChange={onChange}
            className="w-8 text-center bg-white text-black"
            min="1"
        />
        <button onClick={onIncrement} className="px-4 text-black hover:bg-gray-100">
            +
        </button>
    </div>
);

export default MenuModalQtyInput
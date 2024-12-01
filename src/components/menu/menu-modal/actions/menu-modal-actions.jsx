import MenuModalQtyInput from "./menu-modal-qty-input";
import MenuModalButton from "./menu-modal-button";

const MenuModalActions = ({ quantity, item, handleQuantityChange, handleIncrement, handleDecrement }) => (
    <div className="p-4 space-y-4 bg-gray-50">
        <div className="flex space-x-3">
            <MenuModalQtyInput
                quantity={quantity}
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
                onChange={handleQuantityChange}
            />
            <MenuModalButton
                price={item.unitPriceFractional}
                quantity={quantity}
            />
        </div>
    </div>
);

export default MenuModalActions
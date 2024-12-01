import MenuModalHeader from "../header/menu-modal-header";
import MenuModalActions from "../actions/menu-modal-actions";
import MenuModalInstructions from "../instructions/menu-modal-instructions"

const MenuModalContent = ({ item, quantity, handleQuantityChange, handleIncrement, handleDecrement }) => (
    <div className="flex flex-col flex-grow lg:w-1/2">
        <div className="flex flex-col flex-grow p-6 pt-12 space-y-3 overflow-y-auto">
            <MenuModalHeader label={item.label} description={item.description} />
            <MenuModalInstructions />
        </div>
        <MenuModalActions
            quantity={quantity}
            item={item}
            handleQuantityChange={handleQuantityChange}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
        />
    </div>
);

export default MenuModalContent
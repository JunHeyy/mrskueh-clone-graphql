const QuantitySelector = ({ quantity, onQuantityChange, price, onAddToCart }) => {
    const handleIncrement = () => onQuantityChange(quantity + 1);
    const handleDecrement = () => onQuantityChange(Math.max(1, quantity - 1));
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value) || 1;
        onQuantityChange(Math.max(1, value));
    };

    return (
        <div className="p-4 space-y-4 bg-gray-50">
            <div className="flex space-x-3">
                <div className="flex items-center rounded-md border border-input bg-white">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleDecrement}
                        className="h-8 w-8 text-black hover:bg-gray-100"
                    >
                        -
                    </Button>
                    <Input
                        type="number"
                        value={quantity}
                        onChange={handleInputChange}
                        className="w-12 h-8 text-center border-0 focus-visible:ring-0"
                        min="1"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleIncrement}
                        className="h-8 w-8 text-black hover:bg-gray-100"
                    >
                        +
                    </Button>
                </div>
                <Button
                    onClick={onAddToCart}
                    className="flex-grow bg-red-500 hover:bg-red-600 text-white"
                >
                    Add (${((price * quantity) / 100).toFixed(2)})
                </Button>
            </div>
        </div>
    );
};

export default QuantitySelector
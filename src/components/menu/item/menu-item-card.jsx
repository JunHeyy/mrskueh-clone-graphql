import React, { useState } from 'react';
import MenuModal from '../menu-modal/menu-modal'
import useSafeDescription from '../../../hooks/menu/useSafeDescription'

const AddToCartButton = ({ onClick, item, className = '' }) => {
    // Check if item is out of stock
    const isSoldOut = item.itemStock?.quantityLeft?.entire === 0;
    // Check if item is not available
    const isNotAvailable = !item.isAvailable;

    if (isSoldOut) {
        return (
            <button
                disabled
                className="inline-flex items-center justify-center font-semibold shadow-sm border rounded-sm px-4 py-2 text-sm w-full font-bold bg-red-500 opacity-60 cursor-not-allowed"
                data-testid="add-item-to-cart"
            >
                Sold out
            </button>
        );
    }

    if (isNotAvailable) {
        return (
            <button
                disabled
                className="inline-flex items-center justify-center font-semibold shadow-sm border focus:outline-none rounded-sm border-button-primary text-white bg-red-500 opacity-60 px-4 py-2 text-sm w-full font-bold"
                data-testid="add-item-to-cart"
            >
                Not available
            </button>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center justify-center font-semibold shadow-sm border focus:outline-none rounded-sm border-button-primary text-white bg-red-500 hover:bg-red-600 px-4 py-2 text-sm w-full font-bold transition-colors ${className}`}
            data-testid="add-item-to-cart"
        >
            Add
        </button>
    );
};

const MenuItemCard = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const SafeDescription = useSafeDescription;

    return (
        <>
            <div
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="flex-shrink-0">
                    <div className="relative w-full overflow-hidden" style={{ paddingTop: '100%' }}>
                        {item.horizontalImageUrl && (
                            <img
                                src={item.horizontalImageUrl}
                                alt={item.label}
                                className="absolute top-0 object-cover w-full h-full transition-transform transform hover:scale-110"
                            />
                        )}
                    </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h4 className="text-lg font-medium text-black mb-2">{item.label}</h4>
                    {item.description && (
                        <SafeDescription htmlContent={item.description} />
                    )}
                    <div className="mt-3 sm:mt-6">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between">
                            <div className="font-bold text-black mb-3 sm:mb-0">
                                ${(item.unitPriceFractional / 100).toFixed(2)}
                            </div>
                            <div className="w-full sm:w-auto">
                                <AddToCartButton
                                    item={item}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Add your cart logic here
                                    }}
                                    className="sm:min-w-[96px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MenuModal
                item={item}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default MenuItemCard;
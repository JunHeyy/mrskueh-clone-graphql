import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import MenuModalImage from './img/menu-modal-img';
import MenuModalContent from './content/menu-modal-content';

const MenuModal = ({ item, isOpen, onClose }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
    const handleQuantityChange = (e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1));

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 h[80vh]"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="flex flex-col flex-grow overflow-y-auto bg-white lg:flex-row max-w-4xl w-full mx-4 rounded-lg"
                        onClick={e => e.stopPropagation()}
                    >
                        <MenuModalImage
                            imageUrl={item.horizontalImageUrl}
                            altText={item.label}
                        />
                        <MenuModalContent
                            item={item}
                            quantity={quantity}
                            handleQuantityChange={handleQuantityChange}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MenuModal
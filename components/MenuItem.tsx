'use client';

import { useCart } from '@/contexts/CartContext';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
  category?: string;
}

export default function MenuItem({ id, name, description, price, category }: MenuItemProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const priceNumber = parseFloat(price.replace('$', ''));
    addToCart({
      id,
      name,
      description,
      price: priceNumber,
      category,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <span className="text-lg font-bold text-primary-600">{price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}






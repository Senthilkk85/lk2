'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    specialInstructions: '',
  });

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const deliveryFee = orderType === 'delivery' ? 3.99 : 0;
  const tax = getTotalPrice() * 0.08; // 8% tax
  const total = getTotalPrice() + deliveryFee + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create order object
    const order = {
      orderType,
      customerInfo,
      items: cart,
      subtotal: getTotalPrice(),
      deliveryFee,
      tax,
      total,
      orderNumber: `LEELA-${Date.now()}`,
      orderDate: new Date().toISOString(),
    };

    // Save order to localStorage (in a real app, this would go to a backend)
    localStorage.setItem('leelas-kitchen-last-order', JSON.stringify(order));
    
    // Clear cart
    clearCart();
    
    // Redirect to confirmation page
    router.push('/order-confirmation');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">Add some delicious items to your cart first!</p>
            <Link
              href="/menu"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-primary-600 pt-2 border-t">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
              {/* Order Type Selection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      orderType === 'pickup'
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">🏃</div>
                    <div className="font-semibold">Pickup</div>
                    <div className="text-sm text-gray-600">Pick up your order</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      orderType === 'delivery'
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">🚚</div>
                    <div className="font-semibold">Delivery</div>
                    <div className="text-sm text-gray-600">We'll deliver to you</div>
                  </button>
                </div>
              </div>

              {/* Customer Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address (only if delivery selected) */}
              {orderType === 'delivery' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        required={orderType === 'delivery'}
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          required={orderType === 'delivery'}
                          value={customerInfo.city}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          required={orderType === 'delivery'}
                          value={customerInfo.zipCode}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, zipCode: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Instructions */}
              <div>
                <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Instructions
                </label>
                <textarea
                  id="specialInstructions"
                  rows={4}
                  value={customerInfo.specialInstructions}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, specialInstructions: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Any special requests or dietary restrictions?"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
                >
                  Place Order - {formatPrice(total)}
                </button>
                <Link
                  href="/menu"
                  className="block text-center mt-4 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Continue Shopping
                </Link>
                <p className="text-center mt-4 text-sm text-gray-500">
                  Need help? Call us at{' '}
                  <a href="tel:+13197774665" className="text-primary-600 hover:text-primary-700 font-semibold">
                    +1 (319) 777-4665
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


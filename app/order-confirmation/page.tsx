'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface OrderData {
  orderNumber: string;
  orderType: 'pickup' | 'delivery';
  customerInfo: {
    name: string;
    phone: string;
    email: string;
    address?: string;
    city?: string;
    zipCode?: string;
    specialInstructions?: string;
  };
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  orderDate: string;
}

export default function OrderConfirmation() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('leelas-kitchen-last-order');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">No order found</h1>
            <p className="text-gray-600 mb-6">It looks like you haven't placed an order yet.</p>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-4">
            Thank you for your order, {order.customerInfo.name}!
          </p>
          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600 mb-1">Order Number</p>
            <p className="text-2xl font-bold text-primary-600">{order.orderNumber}</p>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Type</h3>
              <p className="text-gray-600 capitalize">
                {order.orderType === 'pickup' ? '🏃 Pickup' : '🚚 Delivery'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Date</h3>
              <p className="text-gray-600">{formatDate(order.orderDate)}</p>
            </div>
          </div>

          {order.orderType === 'delivery' && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Delivery Address</h3>
              <p className="text-gray-600">
                {order.customerInfo.address}<br />
                {order.customerInfo.city}, {order.customerInfo.zipCode}
              </p>
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Items Ordered</h3>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-700">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            {order.orderType === 'delivery' && (
              <div className="flex justify-between text-gray-700">
                <span>Delivery Fee</span>
                <span>{formatPrice(order.deliveryFee)}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-700">
              <span>Tax</span>
              <span>{formatPrice(order.tax)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-primary-600 pt-2 border-t">
              <span>Total</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-primary-50 rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h2>
          {order.orderType === 'pickup' ? (
            <div className="space-y-3 text-gray-700">
              <p>• We'll prepare your order and notify you when it's ready for pickup.</p>
              <p>• Estimated ready time: 20-30 minutes</p>
              <p>• You'll receive a confirmation call at {order.customerInfo.phone}</p>
              <p>• Please bring a valid ID when picking up your order.</p>
            </div>
          ) : (
            <div className="space-y-3 text-gray-700">
              <p>• We'll prepare your order and dispatch it for delivery.</p>
              <p>• Estimated delivery time: 30-45 minutes</p>
              <p>• You'll receive updates via SMS at {order.customerInfo.phone}</p>
              <p>• Please ensure someone is available to receive the order.</p>
            </div>
          )}
          <div className="mt-4 pt-4 border-t border-primary-200">
            <p className="text-gray-700">
              <strong>Questions about your order?</strong> Call us at{' '}
              <a href="tel:+13197774665" className="text-primary-600 hover:text-primary-700 font-semibold">
                +1 (319) 777-4665
              </a>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Back to Home
          </Link>
          <div>
            <Link
              href="/menu"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Order More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


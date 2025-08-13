import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

interface Product {
  id: string;  // barcode or product id
  name: string;
  price: number;
  description?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: '123456', name: '10-Node Punch Card', price: 18.0, description: 'Punch Card' },
  { id: '789101', name: '20-Node Punch Card', price: 35.0, description: 'Punch Card' },
  // add more products
];

export default function CashierPage() {
  const [productCode, setProductCode] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  // When scanning or entering product code:
  const handleAddByCode = () => {
    const foundProduct = products.find(p => p.id === productCode);
    if (!foundProduct) {
      alert('Product not found');
      return;
    }
    addToCart(foundProduct, quantity);
    setProductCode('');
    setQuantity(1);
  };

  // Add product to cart or update quantity
  const addToCart = (product: Product, qty: number) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (qty < 1) return;
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: qty } : item));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Number pad buttons handler (just example for quantity)
  const handleNumberPadClick = (num: string) => {
    setQuantity(prev => {
      const newQty = prev === 0 ? Number(num) : Number('' + prev + num);
      return newQty;
    });
  };

  const clearQuantity = () => setQuantity(0);

  const completeSale = () => {
    if (cart.length === 0) {
      alert('Cart is empty!');
      return;
    }
    alert(`Sale completed! Total: $${totalPrice.toFixed(2)}`);
    setCart([]);
  };

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-3xl font-bold">POS Cashier - [Cashier Name]</h1>
        </header>

        {/* Product Code Input */}
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Scan or enter product code"
            value={productCode}
            onChange={e => setProductCode(e.target.value)}
            className="border p-2 flex-grow rounded"
            onKeyDown={e => { if (e.key === 'Enter') handleAddByCode(); }}
          />
          <button
            onClick={handleAddByCode}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {/* Cart */}
        <div className="border rounded p-4 mb-6 max-h-64 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          {cart.length === 0 && <p>Your cart is empty</p>}

          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-3 border-b pb-2">
              <div>
                <div className="font-medium">{item.name}</div>
                <div>Price: ${item.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-3 py-1 bg-red-400 text-white rounded hover:bg-red-600"
                >
                  -
                </button>
                <div>{item.quantity}</div>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-green-400 hover:bg-green-600 text-white rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Number Pad for Quantity */}
        <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-6">
          {[1,2,3,4,5,6,7,8,9,0].map(num => (
            <button
              key={num}
              onClick={() => handleNumberPadClick(num.toString())}
              className="p-4 bg-gray-200 rounded hover:bg-gray-300"
            >
              {num}
            </button>
          ))}
          <button onClick={clearQuantity} className="p-4 bg-red-400 text-white rounded hover:bg-red-600 col-span-4">Clear Quantity</button>
        </div>

        {/* Total & Actions */}
        <div className="flex justify-between items-center text-xl font-semibold">
          <div>Total: ${totalPrice.toFixed(2)}</div>
          <div className="space-x-4">
            <button
              onClick={() => setCart([])}
              className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-600 text-white"
            >
              Clear Cart
            </button>
            <button
              onClick={completeSale}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
            >
              Complete Sale
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

import React, { useState } from 'react';
import { orderApi } from '../services/api';
import toast from 'react-hot-toast';

interface OrderProduct {
  productId: number;
  quantity: number;
  price: number;
}

const CreateOrder: React.FC = () => {
  const [products, setProducts] = useState<OrderProduct[]>([{
    productId: 1,
    quantity: 1,
    price: 0
  }]);
  const [shippingAddress, setShippingAddress] = useState('');

  const handleAddProduct = () => {
    setProducts([...products, { productId: 1, quantity: 1, price: 0 }]);
  };

  const handleProductChange = (index: number, field: keyof OrderProduct, value: number) => {
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const orderData = {
        userId: 1, // In a real app, this would come from authentication
        products,
        totalAmount: calculateTotal(),
        shippingAddress
      };

      const response = await orderApi.createOrder(orderData);
      toast.success('Order created successfully!');
      // Reset form
      setProducts([{ productId: 1, quantity: 1, price: 0 }]);
      setShippingAddress('');
    } catch (error) {
      toast.error('Failed to create order');
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product ID</label>
                <input
                  type="number"
                  value={product.productId}
                  onChange={(e) => handleProductChange(index, 'productId', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => handleProductChange(index, 'price', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                  step="0.01"
                  min="0"
                />
              </div>
              {products.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveProduct(index)}
                  className="mt-6 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        
        <button
          type="button"
          onClick={handleAddProduct}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add Product
        </button>

        <div>
          <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
          <textarea
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
            rows={3}
          />
        </div>

        <div className="text-xl font-semibold">
          Total Amount: ${calculateTotal().toFixed(2)}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default CreateOrder; 
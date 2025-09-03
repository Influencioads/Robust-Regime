import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/formatters';
import Button from '../ui/Button';

interface MiniCartProps {
  onClose: () => void;
}

const MiniCart: React.FC<MiniCartProps> = ({ onClose }) => {
  const { getCartItems, removeFromCart, getCartTotal } = useCart();
  const cartItems = getCartItems();
  
  return (
    <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-[1000] animate-slideInRight overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart ({cartItems.length})</h2>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button variant="primary" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.productId} className="flex border-b pb-4">
                  <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <Link 
                      to={`/product/${item.productId}`}
                      className="font-medium text-gray-800 hover:text-red-600 transition-colors"
                      onClick={onClose}
                    >
                      {item.product.name}
                    </Link>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-800 font-medium">
                        {item.product.priceRange || formatCurrency(item.product.salePrice || item.product.price)}
                      </span>
                      {item.product.salePrice && !item.product.priceRange && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {formatCurrency(item.product.price)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                      <button 
                        onClick={() => removeFromCart(item.productId, item.variant)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Subtotal:</span>
              <span className="text-xl font-bold">{formatCurrency(getCartTotal())}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="space-y-2">
              <Link to="/checkout" onClick={onClose}>
                <Button variant="primary" fullWidth>
                  Checkout
                </Button>
              </Link>
              <Button variant="outline" fullWidth onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
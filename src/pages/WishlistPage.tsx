import React from 'react';
import { Link } from 'react-router-dom';
import { HeartOff, ShoppingCart, ChevronLeft } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { formatCurrency } from '../utils/formatters';

const WishlistPage: React.FC = () => {
  const { getWishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const wishlistItems = getWishlistItems();

  const handleAddToCart = (productId: string) => {
    addToCart(productId, 1);
    removeFromWishlist(productId);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist is Empty</h1>
        <p className="text-gray-600 mb-8">Browse products and add them to your wishlist to see them here.</p>
        <Link to="/">
          <Button variant="primary" leftIcon={<ChevronLeft />}>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
              <Link to={`/product/${product.id}`} className="block overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
                />
              </Link>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2 truncate">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-gray-700 font-semibold mb-4">{formatCurrency(product.salePrice || product.price)}</p>

                <div className="mt-auto flex justify-between items-center">
                  <Button
                    size="sm"
                    variant="primary"
                    leftIcon={<ShoppingCart className="h-4 w-4" />}
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </Button>

                  <button
                    className="text-red-600 hover:text-red-700 transition-colors flex items-center"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <HeartOff className="h-5 w-5 mr-1" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;

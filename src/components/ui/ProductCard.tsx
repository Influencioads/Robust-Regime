import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import Rating from './Rating';
import WishlistButton from './WishlistButton';
import { formatCurrency } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300">
      {/* Badges */}
      <div className="flex items-center gap-2 mb-2">
        {product.category !== 'barbells' && product.category !== 'weight-plates' && (
          <span className="bg-[#fe6302] text-white text-xs font-bold px-2 py-1 rounded shadow-md">MADE IN INDIA</span>
        )}
      </div>
      
      {/* Wishlist button */}
      <WishlistButton productId={product.id} className="absolute top-2 right-2 z-10" />
      
      {/* Product image */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 lazy"
            loading="lazy"
            decoding="async"
            width="100%"
            height="100%"
          />
        </div>
      </Link>
      
      {/* Product info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-[#fe6302] transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <Rating value={product.rating} size="sm" />
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center mb-3">
          {product.priceRange ? (
            <span className="text-xl font-bold text-[#fe6302]">
              {product.priceRange}
            </span>
          ) : product.salePrice ? (
            <>
              <span className="text-xl font-bold text-[#fe6302] mr-2">
                {formatCurrency(product.salePrice)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(product.price)}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-800">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="primary" 
            size="sm" 
            fullWidth
            onClick={() => addToCart(product.id, 1)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

interface WishlistButtonProps {
  productId: string;
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId, className }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(productId);

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`p-1.5 bg-white/80 rounded-full text-red-600 hover:text-red-700 shadow transition-colors ${className || ''}`}
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      {inWishlist ? (
        <Heart className="h-5 w-5 fill-red-600 text-red-600" />
      ) : (
        <Heart className="h-5 w-5" />
      )}
    </button>
  );
};

export default WishlistButton;

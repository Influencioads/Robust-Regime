import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { comboOffers } from '../data/comboOffers';
import { useCart } from '../context/CartContext';

const ComboOfferPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product.id, 1);
  };

  const handleBuyNow = (product: any) => {
    addToCart(product.id, 1);
    setTimeout(() => {
      navigate('/cart');
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[30vh] bg-gray-900 overflow-hidden flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <img 
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" 
            alt="Fitness Equipment" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 mt-8 sm:mt-12 md:mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6">
            Combo Offers
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto">
            Save more when you buy in bundles.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {comboOffers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image - Responsive Height */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 overflow-hidden">
                {/* Mobile Image */}
                <img
                  src="/como-offer-mobile.webp"
                  alt={product.name}
                  className="w-full h-full object-contain sm:hidden"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = 'https://via.placeholder.com/1000x500/f3f4f6/6b7280?text=Gym+Equipment';
                  }}
                />
                {/* Desktop Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover hidden sm:block"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = 'https://via.placeholder.com/1000x500/f3f4f6/6b7280?text=Gym+Equipment';
                  }}
                />
                {product.isNew && (
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
                    <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      NEW
                    </span>
                  </div>
                )}
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              </div>
              
              {/* Only Buttons - Responsive */}
              <div className="p-3 sm:p-4 bg-white text-gray-800 text-center border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="bg-[#fe6302] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#e55a02] transition-colors cursor-pointer"
                  >
                    Buy Now
                  </button>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="border-2 border-[#fe6302] text-[#fe6302] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#fe6302] hover:text-white transition-colors cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-[#fe6302] to-[#e55a02] py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Build Your Home Gym?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Don't miss out on these incredible combo deals. Contact our fitness experts for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-white text-[#fe6302] py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              Get Expert Advice
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold hover:bg-white hover:text-[#fe6302] transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ComboOfferPage;

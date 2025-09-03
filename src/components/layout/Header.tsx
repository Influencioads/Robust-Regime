import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Heart, ChevronDown } from 'lucide-react';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import MiniCart from '../cart/MiniCart';
import ReactDOM from 'react-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { getCartCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setShowSearchResults(false);
  }, [location]);

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim().length === 0) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Limit to 5 results

    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  };

  const handleProductClick = (product: any) => {
    setShowSearchResults(false);
    setSearchQuery('');
    setIsSearchOpen(false);
    navigate(`/product/${product.id}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearchResults(false);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.search-container')) {
        setShowSearchResults(false);
      }
    };

    if (showSearchResults) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchResults]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fe6302] backdrop-blur-md shadow-md py-2' : 'bg-[#fe6302] py-3'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-w-0">
          {/* Logo */}
          <img src="/logo-robust.webp" alt="Robust Regime Logo" className="max-h-16 w-auto object-contain" />

          {/* Desktop Navigation - Full */}
          <nav className="hidden xl:flex items-center space-x-1 flex-shrink-0">
            <Link to="/" className="px-2 py-2 text-white hover:text-gray-100 font-medium transition-colors text-sm whitespace-nowrap">
              Home
            </Link>

                        <Link to="/shop" className="px-2 py-2 text-white hover:text-gray-100 font-medium transition-colors text-sm whitespace-nowrap">
              Shop
            </Link>
            
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="px-2 py-2 text-white hover:text-gray-100 font-medium transition-colors text-sm whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}

            <Link to="/about" className="px-2 py-2 text-white hover:text-gray-100 font-medium transition-colors text-sm whitespace-nowrap">
              About Us
            </Link>

            <Link to="/contact" className="px-2 py-2 text-white hover:text-gray-100 font-medium transition-colors text-sm whitespace-nowrap">
              Contact Us
            </Link>
          </nav>

          {/* Medium Screen Navigation - Compact */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1 flex-shrink-0">
            <Link to="/" className="px-1 py-2 text-white hover:text-gray-100 font-medium transition-colors text-xs whitespace-nowrap">
              Home
            </Link>

            <Link to="/shop" className="px-1 py-2 text-white hover:text-gray-100 font-medium transition-colors text-xs whitespace-nowrap">
              Shop
            </Link>

            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="px-1 py-2 text-white hover:text-gray-100 font-medium transition-colors text-xs whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}

            <Link to="/about" className="px-1 py-2 text-white hover:text-gray-100 font-medium transition-colors text-xs whitespace-nowrap">
              About
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-white hover:text-gray-100 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="p-2 text-white hover:text-gray-100 transition-colors relative"
            >
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#fe6302] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              to="/account"
              className="p-2 text-white hover:text-gray-200 transition-colors"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 text-white hover:text-gray-200 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#fe6302] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-gray-200 transition-colors lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar (Conditional) */}
        {isSearchOpen && (
          <div className="pt-4 pb-2 border-t mt-4 animate-fadeDown">
            <form onSubmit={handleSearchSubmit} className="relative search-container">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe6302]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-100"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500 capitalize">
                          {product.category}
                        </p>
                        <p className="text-sm font-semibold text-[#fe6302]">
                          {product.priceRange || `₹${product.price.toLocaleString()}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fadeDown">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col">
              <Link
                to="/"
                className="py-3 px-4 border-b border-gray-100 text-gray-800 hover:text-[#fe6302] font-medium transition-colors"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="py-3 px-4 border-b border-gray-100 text-gray-800 hover:text-[#fe6302] font-medium transition-colors"
              >
                Shop
              </Link>

              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="py-3 px-4 border-b border-gray-100 text-gray-800 hover:text-[#fe6302] font-medium transition-colors"
                >
                  {category.name}
                </Link>
              ))}

              <Link
                to="/about"
                className="py-3 px-4 border-b border-gray-100 text-gray-800 hover:text-[#fe6302] font-medium transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="py-3 px-4 text-gray-800 hover:text-[#fe6302] font-medium transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Mini Cart */}
      {isCartOpen &&
        ReactDOM.createPortal(
          <MiniCart onClose={() => setIsCartOpen(false)} />,
          document.body
        )
      }
    </header>
  );
};

export default Header;
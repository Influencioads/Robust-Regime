import React, { useState, useEffect } from 'react';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { useLocation } from 'react-router-dom'; // Import useLocation

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceAsc', label: 'Price: Low to High' },
  { value: 'priceDesc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const ShopPage: React.FC = () => {
  const location = useLocation(); // Get the current location object
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Effect to read category from URL on component mount or location change
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      // Check if the category exists in your categories data
      const categoryExists = categories.some(cat => cat.id === categoryParam);
      if (categoryExists) {
        setSelectedCategories([categoryParam]);
      } else {
        // Handle case where category param is invalid or doesn't exist
        setSelectedCategories([]);
      }
    } else {
      // If no category param, clear category filter
      setSelectedCategories([]);
    }
    // Reset other filters when category changes from URL
    setPriceRange([0, 50000]);
    setSelectedRatings([]);
    setSearchQuery('');
    setSortOption('featured'); // Or your default sort
  }, [location.search]); // Re-run effect when the search part of the URL changes

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  let filteredProducts = products;

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }

  // Apply category filter
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      selectedCategories.includes(product.category)
    );
  }

  // Apply price range filter
  filteredProducts = filteredProducts.filter(product => {
    const price = product.salePrice || product.price;
    return price >= priceRange[0] && price <= priceRange[1];
  });

  // Apply rating filter
  if (selectedRatings.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      selectedRatings.includes(Math.floor(product.rating))
    );
  }

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'priceAsc':
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case 'priceDesc':
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        // Assuming 'isNew' is a boolean or similar indicator
        // You might need a date field for proper 'newest' sorting
        return (b as any).isNew - (a as any).isNew; // Adjust based on actual product structure
      default:
        // Assuming 'featured' is a boolean or similar indicator
        return (b as any).featured - (a as any).featured; // Adjust based on actual product structure
    }
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900 overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
            alt="Shop Banner"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl -mt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop Equipment</h1>
            <p className="text-lg text-white/90">
              Browse our collection of premium fitness equipment designed for performance and durability
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters (Desktop) */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Search</h3>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full accent-red-600"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">₹0</span>
                      <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-red-600"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                      <span className="text-sm text-gray-600">₹50,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => toggleRating(rating)}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-gray-700">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => {
                  setPriceRange([0, 50000]);
                  setSelectedCategories([]);
                  setSelectedRatings([]);
                  setSearchQuery('');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} products
              </p>

              <div className="flex items-center space-x-4">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="text-sm border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className="lg:hidden p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setIsFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria</p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setPriceRange([0, 50000]);
                    setSelectedCategories([]);
                    setSelectedRatings([]);
                    setSearchQuery('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="opacity-0 animate-fadeInUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Dialog */}
      {isFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/30" onClick={() => setIsFiltersOpen(false)} />

          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-500"
                onClick={() => setIsFiltersOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-4 border-t border-gray-200">
              <div className="px-4 py-6">
                <h3 className="text-sm font-medium">Search</h3>
                <div className="mt-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200">
                <h3 className="text-sm font-medium">Categories</h3>
                <div className="mt-2 space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200">
                <h3 className="text-sm font-medium">Price Range</h3>
                <div className="mt-2 space-y-4">
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full accent-red-600"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">₹0</span>
                      <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-red-600"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                      <span className="text-sm text-gray-600">₹50,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200">
                <h3 className="text-sm font-medium">Rating</h3>
                <div className="mt-2 space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => toggleRating(rating)}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    setPriceRange([0, 50000]);
                    setSelectedCategories([]);
                    setSelectedRatings([]);
                    setSearchQuery('');
                    setIsFiltersOpen(false);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;

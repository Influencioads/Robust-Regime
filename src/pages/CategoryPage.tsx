// File: project/src/pages/CategoryPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { comboOffers } from '../data/comboOffers';
import ProductCard from '../components/ui/ProductCard';
import ComboOfferPage from './ComboOfferPage';
// import Button from '../components/ui/Button';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryName, setCategoryName] = useState('Category');
  const [categoryProducts, setCategoryProducts] = useState<typeof products>([]);

  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Find the category name based on the ID from the URL
    const currentCategory = categories.find(cat => cat.id === categoryId);
    if (currentCategory) {
      setCategoryName(currentCategory.name);
      // Filter products for the current category
      const filtered = products.filter(product => product.category === categoryId);
      setCategoryProducts(filtered);
    } else {
      // Handle invalid category ID (e.g., show a message or redirect)
      setCategoryName('Unknown Category');
      setCategoryProducts([]);
    }
  }, [categoryId]); // Re-run effect when categoryId changes in the URL

  // If this is combo-offers category, render the ComboOfferPage
  if (categoryId === 'combo-offers') {
    return <ComboOfferPage />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section (can be customized per category if needed) */}
      <div className="relative h-[30vh] bg-gray-900 overflow-hidden flex items-center justify-center pt-16">
         <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" // Use a generic or category-specific image
            alt={`${categoryName} Banner`}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center -mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{categoryName}</h1>
          <p className="text-lg text-white/90">Browse our {categoryName.toLowerCase()} collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found in {categoryName}</h3>
            <p className="text-gray-500 mb-6">Check back later or browse other categories.</p>
             {/* Optional: Add a button to go back to the main shop page */}
             {/* <Button variant="primary" to="/shop">Back to Shop</Button> */}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product, index) => (
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
  );
};

export default CategoryPage;

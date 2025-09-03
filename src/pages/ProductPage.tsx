import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, Clock, Phone, Video, CreditCard } from 'lucide-react';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import QuantitySelector from '../components/ui/QuantitySelector';
import ProductGallery from '../components/ui/ProductGallery';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { Product, WeightVariant, WeightOption, colorVariant } from '../types';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId) as Product | undefined;
  
  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [productId]);
  
  // Get the appropriate images based on selected weight variant and specific weight option (for product ID 9)
  const getProductImages = () => {
    if (product?.id === '9') {
      // If a specific weight option is selected, prioritize its corresponding image
      if (selectedWeightOption && selectedWeightVariant?.variantImages) {
        const selectedWeight = selectedWeightOption.weight;
        const variantImages = selectedWeightVariant.variantImages;
        
        // Find the image that matches the selected weight
        const matchingImage = variantImages.find(img => 
          img.toLowerCase().includes(selectedWeight.toLowerCase().replace('kg', '').trim())
        );
        
        if (matchingImage) {
          // Put the matching image first, then add other images
          const otherImages = variantImages.filter(img => img !== matchingImage);
          return [matchingImage, ...otherImages];
        }
      }
      
      // Fallback to variant images if no specific weight is selected
      if (selectedWeightVariant?.variantImages) {
        return selectedWeightVariant.variantImages;
      }
    }
    return product?.images || [];
  };
  
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeightVariant, setSelectedWeightVariant] = useState<WeightVariant | null>(null);
  const [selectedWeightOption, setSelectedWeightOption] = useState<WeightOption | null>(null);
  const [selectedColorVariant, setSelectedColorVariant] = useState<colorVariant | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [selectedRelated, setSelectedRelated] = useState<Record<string, boolean>>({});
  const toggleRelated = (id: string) => {
    setSelectedRelated(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calcOptionsTotal = () =>
    Object.entries(selectedRelated)
      .filter(([, v]) => v)
      .reduce((sum, [id]) => {
        const p = products.find(pr => pr.id === id);
        return sum + (p?.salePrice ?? p?.price ?? 0);
      }, 0);

  const addSelectedRelated = () => {
    Object.entries(selectedRelated)
      .filter(([, sel]) => sel)
      .forEach(([id]) => addToCart(id, 1));
  };

  const handleAddToCart = () => {
    if (!product) return;
    const variant = selectedWeightOption || selectedWeightVariant || selectedColorVariant;
    if ((product.weightVariants?.length || product.ColorVariant?.length) && !variant) return;

    addToCart(
      product.id,
      quantity,
      selectedWeightOption?.weight || selectedWeightVariant?.weight || selectedColorVariant?.color,
      selectedWeightOption ? 'weight' : selectedWeightVariant ? 'weight' : selectedColorVariant ? 'color' : undefined
    );

    // also add related selections
    addSelectedRelated();
  };

  const handleBuyNow = () => {
    if (!product) return;
    const variant = selectedWeightOption || selectedWeightVariant || selectedColorVariant;
    if ((product.weightVariants?.length || product.ColorVariant?.length) && !variant) return;
    addToCart(
      product.id,
      quantity,
      selectedWeightOption?.weight || selectedWeightVariant?.weight || selectedColorVariant?.color,
      selectedWeightOption ? 'weight' : selectedWeightVariant ? 'weight' : selectedColorVariant ? 'color' : undefined
    );
    addSelectedRelated();
    navigate('/checkout');
  };

  // Get the current price and sale price based on variants
  const currentVariant = selectedWeightOption || selectedWeightVariant || selectedColorVariant;
  const currentPrice = currentVariant?.price ?? product?.price;
  const currentSalePrice = currentVariant?.salePrice ?? product?.salePrice;
  const isCurrentlyInStockRaw = currentVariant?.inStock ?? product?.inStock;

  // Normalize values to avoid undefined issues in calculations / UI
  const inStock = Boolean(isCurrentlyInStockRaw);
  const displayPrice = (currentSalePrice ?? currentPrice) ?? 0;
  const basePrice = currentPrice ?? 0;
  const salePrice = currentSalePrice ?? undefined;



  // Helper function to render weight variant dropdown
  const renderWeightVariants = (
    variants: WeightVariant[],
    selectedVariant: WeightVariant | null,
    setSelectedVariant: (variant: WeightVariant | null) => void
  ) => {
    // Remove duplicates by weight, keeping the first occurrence
    const uniqueVariants = Array.from(
      new Map(variants.map(v => [v.weight, v])).values()
    ).filter(v => v.inStock);

    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="weightVariant">
          Select Weight
        </label>
        <select
          id="weightVariant"
          value={selectedVariant?.weight || ''}
          onChange={(e) => {
            const selected = uniqueVariants.find(v => v.weight === e.target.value) || null;
            setSelectedVariant(selected);
          }}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe6302] disabled:opacity-50"
          disabled={uniqueVariants.length === 0}
        >
          {uniqueVariants.length === 0 ? (
            <option value="" disabled>
              No weights available
            </option>
          ) : (
            <>
              <option value="" disabled>
                Select a weight
              </option>
              {uniqueVariants.map(variant => (
                <option key={variant.weight} value={variant.weight}>
                  {variant.weight}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
    );
  };

  // Helper function to render weight options dropdown (for nested weights)
  const renderWeightOptions = (
    weightVariant: WeightVariant,
    selectedOption: WeightOption | null,
    setSelectedOption: (option: WeightOption | null) => void
  ) => {
    if (!weightVariant.weightOptions || weightVariant.weightOptions.length === 0) {
      return null;
    }

    const inStockOptions = weightVariant.weightOptions.filter(v => v.inStock);

    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="weightOption">
          Select Specific Weight
        </label>
        <select
          id="weightOption"
          value={selectedOption?.weight || ''}
          onChange={(e) => {
            const selected = inStockOptions.find(v => v.weight === e.target.value) || null;
            setSelectedOption(selected);
            // Force re-render of images when weight option changes
            setTimeout(() => {
              const event = new Event('resize');
              window.dispatchEvent(event);
            }, 100);
          }}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe6302] disabled:opacity-50"
          disabled={inStockOptions.length === 0}
        >
          {inStockOptions.length === 0 ? (
            <option value="" disabled>
              No specific weights available
            </option>
          ) : (
            <>
              <option value="">Select a specific weight</option>
              {inStockOptions.map(option => (
                <option key={option.weight} value={option.weight}>
                  {option.weight}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
    );
  };

  // Helper function to render color variant dropdown
  const renderColorVariants = (
    variants: colorVariant[],
    selectedVariant: colorVariant | null,
    setSelectedVariant: (variant: colorVariant | null) => void
  ) => {
    const inStockVariants = variants.filter(v => v.inStock);

    return (
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="colorVariant">
          Select Color
        </label>
        <select
          id="colorVariant"
          value={selectedVariant?.color || ''}
          onChange={(e) => {
            const selected = inStockVariants.find(v => v.color === e.target.value) || null;
            setSelectedVariant(selected);
          }}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fe6302] disabled:opacity-50"
          disabled={inStockVariants.length === 0}
        >
          {inStockVariants.length === 0 ? (
            <option value="" disabled>
              No colors available
            </option>
          ) : (
            <>
              <option value="" disabled>
                Select a color
              </option>
              {inStockVariants.map(variant => (
                <option key={variant.color} value={variant.color}>
                  {`${variant.color} (${formatCurrency(variant.salePrice || variant.price)})`}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
    );
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
        <Link to="/">
          <Button variant="primary">Return to Home</Button>
        </Link>
      </div>
    );
  }

  // Initialize selected variants if available
  React.useEffect(() => {
    // Don't auto-select weight variants - let user choose
    if (product.ColorVariant?.length && !selectedColorVariant) {
      setSelectedColorVariant(product.ColorVariant.find(v => v.inStock) || null);
    }
  }, [product.ColorVariant, selectedColorVariant]);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-8">
        {/* Product Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <ProductGallery
              images={[...new Set(getProductImages())]} // Use dynamic images based on weight variant
              name={product.name}
              autoOpenFirst={product.id === '9' && selectedWeightOption !== null} // Auto-open first image when specific weight is selected
            />
          </div>

          <div className="md:sticky md:top-24 md:self-start">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.shortDescription}</p>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Weight Selectors Inline */}
            <div className="mb-6 flex gap-4 items-end">
              {product.weightVariants && product.weightVariants.length > 0 && (
                <div className="flex-1 min-w-0">
                  {renderWeightVariants(product.weightVariants, selectedWeightVariant, setSelectedWeightVariant)}
                </div>
              )}
              {product.id === '9' && selectedWeightVariant?.weightOptions && (
                <div className="flex-1 min-w-0">
                  {renderWeightOptions(selectedWeightVariant, selectedWeightOption, setSelectedWeightOption)}
                </div>
              )}
            </div>
            
            {/* Selected Weight Display */}
            {product.id === '9' && selectedWeightOption && (
              <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  <span className="font-semibold">Selected Weight:</span> {selectedWeightOption.weight}
                </p>
                <p className="text-xs text-orange-600 mt-1">
                  The corresponding image is now displayed prominently in the gallery
                </p>
              </div>
            )}

            {/* Color Variant Selector */}
            {product.ColorVariant && product.ColorVariant.length > 0 && (
              renderColorVariants(product.ColorVariant, selectedColorVariant, setSelectedColorVariant)
            )}

            <div className="flex items-baseline mb-4">
              {product.priceRange ? (
                <span className="text-2xl font-bold text-[#fe6302]">{product.priceRange}</span>
              ) : product.weightVariants?.length && !selectedWeightVariant ? (
                <span className="text-lg text-gray-600">Please select a weight to see pricing</span>
              ) : product.id === '9' && selectedWeightVariant?.weightOptions && !selectedWeightOption ? (
                <span className="text-lg text-gray-600">Please select a specific weight to see pricing</span>
              ) : (
                <>
                  <span className="text-2xl font-bold">{formatCurrency(displayPrice)}</span>
                  {salePrice !== undefined && (
                    <>
                      <span className="ml-2 text-gray-500 line-through">{formatCurrency(basePrice)}</span>
                      <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded text-sm">
                        {basePrice ? Math.round(((basePrice - (salePrice ?? 0)) / basePrice) * 100) : 0}% OFF
                      </span>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Buy Along With Section */}
            {product.category === 'racks' && (
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Buy Along With</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['27', '15'].map((relatedProductId) => {
                    const relatedProduct = products.find((p) => p.id === relatedProductId);
                    if (!relatedProduct) return null;

                    return (
                      <div
                        key={relatedProduct.id}
                        className={`border rounded-lg p-4 text-center cursor-pointer ${selectedRelated[relatedProduct.id] ? 'ring-2 ring-[#fe6302]' : ''}`}
                        onClick={() => toggleRelated(relatedProduct.id)}
                      >
                        <img
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          className="w-full h-32 object-contain mb-2"
                        />
                        <h4 className="text-md font-medium mb-2">{relatedProduct.name}</h4>
                        <p className="text-gray-600">
                          ₹{relatedProduct.salePrice || relatedProduct.price}
                        </p>
                        {/* button removed as selection handled via card click */}
                      </div>
                    );
                  })}
                </div>
                {Object.values(selectedRelated).some(Boolean) && (
                  <div className="mt-6 space-y-2 max-w-md ml-auto">
                    <div className="flex justify-between">
                      <span>Product total</span>
                      <span className="font-bold text-red-700">
                        {product.weightVariants?.length && !selectedWeightVariant 
                          ? 'Select weight' 
                          : formatCurrency(displayPrice)
                        }
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Options total</span>
                      <span className="font-bold text-red-700">{formatCurrency(calcOptionsTotal())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Grand total</span>
                      <span className="font-bold text-red-700 text-lg">
                        {product.weightVariants?.length && !selectedWeightVariant 
                          ? 'Select weight' 
                          : formatCurrency(displayPrice + calcOptionsTotal())
                        }
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium mb-1">EMI Available</h3>
              <p className="text-sm text-gray-600">
                {product.weightVariants?.length && !selectedWeightVariant 
                  ? 'Please select a weight to see EMI options'
                  : `Starting from ₹${Math.round(displayPrice / 6)}/month with 0% interest for 6 months.`
                }
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <QuantitySelector value={quantity} onChange={setQuantity} min={1} max={10} />
              <span className={inStock ? 'text-green-600' : 'text-red-600'}>
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={
                  !inStock ||
                  (product.weightVariants?.length && !selectedWeightVariant) ||
                  (product.id === '9' && selectedWeightVariant?.weightOptions && !selectedWeightOption) ||
                  (product.ColorVariant?.length && !selectedColorVariant) ||
                  false
                }
                className="w-full px-6 py-3 border border-[#fe6302] text-[#fe6302] font-medium rounded hover:bg-orange-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={
                  !inStock ||
                  (product.weightVariants?.length && !selectedWeightVariant) ||
                  (product.id === '9' && selectedWeightVariant?.weightOptions && !selectedWeightOption) ||
                  (product.ColorVariant?.length && !selectedColorVariant) ||
                  false
                }
                className="w-full px-6 py-3 bg-[#fe6302] text-white font-medium rounded hover:bg-[#fe6302]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-y-4">
              <div className="flex items-center gap-2">
                <Truck className="w-6 h-6 stroke-2 text-[#fe6302]" />
                <div>
                  <div className="font-medium">Pan India Shipping</div>
                  <div className="text-xs text-gray-500">We deliver to every corner of India</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 stroke-2 text-[#fe6302]" />
                <div>
                  <div className="font-medium">5-Year Warranty</div>
                  <div className="text-xs text-gray-500">100% satisfaction guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 stroke-2 text-[#fe6302]" />
                <div>
                  <div className="font-medium">Easy Returns</div>
                  <div className="text-xs text-gray-500">30-day return policy</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 stroke-2 text-[#fe6302]" />
                <div>
                  <div className="font-medium">Expert Assistance</div>
                  <div className="text-xs text-gray-500">Call us at +91 8446680098</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'description' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Description & Features
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'specifications' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'reviews' ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews ({product.reviewCount})
              </button>
            </nav>
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications)
                  .filter(([key]) => key !== 'features')
                  .map(([key, value]: [string, string | string[] | undefined]) => (
                    <div key={key} className="border-b border-gray-200 pb-4">
                      <dt className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                      <dd className="mt-1 text-gray-600">
                        {value === undefined ? '-' : Array.isArray(value) ? value.join(', ') : value}
                      </dd>
                    </div>
                  ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <h4 className="font-medium text-gray-900">{review.userName}</h4>
                        {review.verified && (
                          <span className="ml-2 bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                    {review.images && (
                      <div className="mt-4 flex gap-2">
                        {review.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Review image ${index + 1}`}
                            className="w-20 h-20 object-cover rounded"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <Video className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Book a Free Online Demo</h3>
            <p className="text-gray-600 mb-6">
              Not sure if this is the right equipment for you? Schedule a free video consultation with our fitness experts.
            </p>
            <button className="inline-flex justify-center items-center px-6 py-2 border-2 border-red-600 text-red-600 font-medium rounded-md hover:bg-red-50 transition-colors">
              Schedule Demo
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                alt="Made in India"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Made in India</h3>
            <p className="text-gray-600 mb-3">
              Proudly manufactured in India with premium materials and expert craftsmanship. Support local manufacturing.
            </p>
            <p className="text-red-600 font-medium">Premium Quality Guaranteed</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <CreditCard className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Flexible Payment Options</h3>
            <p className="text-gray-600 mb-6">
              Pay 10% now for Cash on Delivery or pay fully online. EMI options available on select cards.
            </p>
            <button className="inline-flex justify-center items-center px-6 py-2 border-2 border-red-600 text-red-600 font-medium rounded-md hover:bg-red-50 transition-colors">
              View Payment Options
            </button>
          </div>
        </div>

        {/* Product Insights - Hidden */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Product Insights</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4 max-w-[1200px]">
              {product.productInsights.map((insight, index) => (
                <div key={index} className="w-full aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${insight.videoId}`}
                    title={insight.title}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* YouTube Videos Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Watch Our Videos</h2>
          <div className="relative overflow-hidden">
            <div 
              id="video-carousel"
              className="flex gap-4 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite',
                width: 'max-content',
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {/* Video 1 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/o3fJpFaS7Qc"
                  title="Robust Regime Video 1"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video 2 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4xxWYizlozg"
                  title="Robust Regime Video 2"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video 3 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/SgAmAviGKyE"
                  title="Robust Regime Video 3"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video 4 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/R8Vt9kyodvw"
                  title="Robust Regime Video 4"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video 5 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qfxQFjQUPxw"
                  title="Robust Regime Video 5"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video 6 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/s_O3dmAO2oo"
                  title="Robust Regime Video 6"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video 7 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kIJVBllURJQ"
                  title="Robust Regime Video 7"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video 8 */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/T7QByT8Z62o"
                  title="Robust Regime Video 8"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Duplicate all videos for seamless loop */}
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/o3fJpFaS7Qc"
                  title="Robust Regime Video 1"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4xxWYizlozg"
                  title="Robust Regime Video 2"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/SgAmAviGKyE"
                  title="Robust Regime Video 3"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/R8Vt9kyodvw"
                  title="Robust Regime Video 4"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qfxQFjQUPxw"
                  title="Robust Regime Video 5"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/s_O3dmAO2oo"
                  title="Robust Regime Video 6"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kIJVBllURJQ"
                  title="Robust Regime Video 7"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex-shrink-0 w-80 h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/T7QByT8Z62o"
                  title="Robust Regime Video 8"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Robust Regime Video Section */}
        <div className="mb-16 -mx-4">
          <div className="text-center mb-12 px-4">
            <span className="text-[#fe6302] font-medium uppercase">WATCH OUR STORY</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Robust Regime in Action</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how our premium fitness equipment transforms your workout experience
            </p>
          </div>
          
          <div className="w-full">
            <div className="relative overflow-hidden shadow-2xl bg-gray-900">
              <video 
                className="w-full h-auto"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/logo-robust.webp"
                preload="metadata"
              >
                <source src="/Robust.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Product Features</h2>

          {product.productFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 px-6">
                <h3 className="text-2xl font-bold mb-6">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link
                  to={`/product/${relatedProduct.id}`}
                  key={relatedProduct.id}
                  className="block border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-contain p-2"
                  />
                  <h3 className="font-medium mb-2">{relatedProduct.name}</h3>
                  <p className="text-red-600 font-bold">
                    {relatedProduct.priceRange || formatCurrency(relatedProduct.salePrice || relatedProduct.price)}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
      
      {/* CSS Animation for Video Scrolling */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      
      {/* JavaScript for Video Interaction */}
      <script>
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.getElementById('video-carousel');
            if (!carousel) return;
            
            let isVideoPlaying = false;
            
            // Function to pause carousel animation
            function pauseCarousel() {
              if (carousel) {
                carousel.style.animationPlayState = 'paused';
                isVideoPlaying = true;
              }
            }
            
            // Function to resume carousel animation
            function resumeCarousel() {
              if (carousel && isVideoPlaying) {
                carousel.style.animationPlayState = 'running';
                isVideoPlaying = false;
              }
            }
            
            // Listen for iframe interactions (click/touch)
            const iframes = document.querySelectorAll('#video-carousel iframe');
            iframes.forEach(iframe => {
              // Add click/touch event listeners
              iframe.addEventListener('click', pauseCarousel);
              iframe.addEventListener('touchstart', pauseCarousel);
              
              // Listen for YouTube player events via postMessage
              window.addEventListener('message', function(event) {
                if (event.origin !== 'https://www.youtube.com') return;
                
                const data = event.data;
                if (typeof data === 'string') {
                  try {
                    const parsedData = JSON.parse(data);
                    if (parsedData.event === 'video-progress' || parsedData.event === 'video-play') {
                      pauseCarousel();
                    } else if (parsedData.event === 'video-pause' || parsedData.event === 'video-end') {
                      resumeCarousel();
                    }
                  } catch (e) {
                    // Ignore parsing errors
                  }
                }
              });
            });
            
            // Resume carousel when user stops interacting with videos
            document.addEventListener('click', function(event) {
              if (!event.target.closest('#video-carousel iframe')) {
                setTimeout(resumeCarousel, 2000); // Resume after 2 seconds of no video interaction
              }
            });
            
            // Mobile touch events
            document.addEventListener('touchend', function(event) {
              if (!event.target.closest('#video-carousel iframe')) {
                setTimeout(resumeCarousel, 2000);
              }
            });
          });
        `}
      </script>
    </div>
  );
};

export default ProductPage;
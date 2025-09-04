import React, { useRef } from 'react';
import { Truck, Award, HeartHandshake, Clock, ChevronRight, Star, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ui/ProductCard';
import CategoryCard from '../components/ui/CategoryCard';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  // Get all featured products
  const allFeaturedProducts = products.filter(product => product.featured);
  
  // For featured products, take the first 4
  const featuredProducts = allFeaturedProducts.slice(0, 4);
  
  // For best sellers, use the same products as featured but in different order
  // Create a reordered array by moving the first product to the end
  const bestSellers = [...featuredProducts.slice(1), featuredProducts[0]];
  const categorySliderRef = useRef<HTMLDivElement>(null);
  const testimonialSliderRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categorySliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      categorySliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialSliderRef.current) {
      const scrollAmount = direction === 'left' ? -1200 : 1200; // Scroll by 3 testimonials
      testimonialSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };



  // Placeholder logo data (replace with actual logo URLs)
  const brandLogos = [
    '/Robust-Partners/Partners1.webp',
    '/Robust-Partners/Partners2.webp',
    '/Robust-Partners/Partners3.webp',
    '/Robust-Partners/Partners4.webp',
    '/Robust-Partners/Partners5.webp',
   
  ];

  // Placeholder testimonial data (replace with actual testimonials)
  const testimonials = [
    {
      name: 'Sandeep Singh',
      rating: 5,
      review: "Strength training equipments need to be very strong and durable. And that's what you find with Robust Regime. Their equipments are just like their name robust. And compared to other manufacturers and dealers, they are reasonably prized too. I'm happy with my purchases so far hope to do more business with them .",
      image: 'https://via.placeholder.com/64?text=Amit',
    },
  
    {
      name: 'Shreyas Rao',
      rating: 5,
      review: 'Amazing work on the quality, they are open for new ideas and recommendations. Fastest service in the industry I must say, if they continue all these good work. These is all a happy customer wants . 100% recommended brand .',
      image: 'https://via.placeholder.com/64?text=Rahul',
    },
    {
      name: 'Dipak Shivarkar',
      rating: 4,
      review: 'Robust Regime, discover the finest gym equipment coupled with unparalleled service for an exceptional home fitness experience, all delivered with top-notch quality.😊😊😊',
      image: 'https://via.placeholder.com/64?text=Rahul',
    },
    {
      name:'Bhushan Dhone',
      rating: 5,
      review: 'It is very tiring for me to go to the everyday i am looking for the home gym but that is out of budget for me, then i found out the robust regime home gym equipment manufacturers. I purchased many thing like treadmill, dumbbells, machine press and plates, that are very handy and build quality is awesome. i enjoy using their equipment at home that is very time efficient for me and it is very easy for me because i dont have to go to the gym in this cold season.',
      image: 'https://via.placeholder.com/64?text=Priya',
    },
    {
      name: 'Vishal pardeshi',
      rating: 5,
      review: "Great store for all sorts and ranges of fitness equipments. They've dealerships with premium brands which increases your options to choose from! The sales executive are very active and help you choose the best product for the need.",
      image: 'https://via.placeholder.com/64?text=Rahul',
    },{
      name: 'Himanshu Patel',
      rating: 5,
      review: 'I am really happy about the product. Excellent technical support. Good service. The staff is skilled and definitely know their business very well. Highly recommend. .',
      image: 'https://via.placeholder.com/64?text=Rahul',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center pt-20 sm:pt-16 overflow-hidden w-full">
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              minWidth: '100vw',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto opacity-0 animate-fadeInUp w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2 w-full">
              Premium Fitness Equipment
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl px-4 w-full">
              Professional-grade equipment engineered for performance, durability, and results. Made in India.
            </p>
            {/* <Link to="/shop" className="w-full sm:w-auto px-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-[#fe6302] hover:bg-[#fe6302]/90 transform hover:scale-105 transition-all px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg w-full"
              >
                Shop Now
              </Button>
            </Link> */}
          </div>
        </div>

        {/* Feature Cards */}
        {/* <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 lg:bottom-24 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-6 rounded-lg border border-white/20 hover:border-[#fe6302] transition-all cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-[#fe6302] rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white" />
                  </div> */}
                  {/* <div>
                    <h3 className="text-white font-semibold group-hover:text-[#fe6302] transition-colors text-xs sm:text-sm md:text-base">Premium Quality</h3>
                    <p className="text-white/60 text-xs md:text-sm">Professional-grade equipment</p>
                  </div> */}
                {/* </div>
              </div> */}
              {/* <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-6 rounded-lg border border-white/20 hover:border-[#fe6302] transition-all cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-[#fe6302] rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                    <Truck className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  {/* <div>
                    <h3 className="text-white font-semibold group-hover:text-[#fe6302] transition-colors text-xs sm:text-sm md:text-base">Pan India Shipping</h3>
                    <p className="text-white/60 text-xs md:text-sm">We deliver to every corner of India</p>
                  </div> */}
                {/* </div>
              </div>  */}
              {/* <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 md:p-6 rounded-lg border border-white/20 hover:border-[#fe6302] transition-all cursor-pointer group sm:col-span-2 md:col-span-1">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-[#fe6302] rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  {/* <div>
                    <h3 className="text-white font-semibold group-hover:text-[#fe6302] transition-colors text-xs sm:text-sm md:text-base">5-Year Warranty</h3>
                    <p className="text-white/60 text-xs md:text-sm">Guaranteed durability</p>
                  </div> */}
                {/* </div>
              // </div> */}
            {/* </div>
          </div>
        </div> */}
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp">
            <span className="text-[#fe6302] font-medium uppercase">OUR CATEGORIES</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our wide range of professional fitness equipment categories designed for every workout need
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scrollCategories('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 group hidden md:block"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800 group-hover:text-[#fe6302]" />
            </button>
            <button 
              onClick={() => scrollCategories('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 group hidden md:block"
            >
              <ChevronRight className="h-6 w-6 text-gray-800 group-hover:text-[#fe6302]" />
            </button>

            {/* Category Slider */}
            <div 
              ref={categorySliderRef}
              className="overflow-x-auto hide-scrollbar flex gap-5 pb-4 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category, index) => (
                <div 
                  key={category.id}
                  className="flex-none snap-start opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="flex justify-center mt-6 gap-2 md:hidden">
              {categories.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 transition-colors"
                  style={{
                    backgroundColor: index === 0 ? '#fe6302' : '#d1d5db'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp">
            <span className="text-[#fe6302] font-medium uppercase">FEATURED COLLECTION</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our selection of premium fitness equipment, handpicked for quality and performance
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <div 
                key={product.id} 
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center opacity-0 animate-fadeInUp animate-delay-800">
            <Link to="/category/featured">
              <Button 
                variant="outline" 
                rightIcon={<ChevronRight />}
                className="transform hover:scale-105 transition-all"
              >
                View All Featured Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp">
            <span className="text-[#fe6302] font-medium uppercase">TOP PICKS</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Best Sellers</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our most popular products, trusted by fitness enthusiasts across India
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {bestSellers.slice(0, 4).map((product, index) => (
              <div 
                key={product.id} 
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center opacity-0 animate-fadeInUp animate-delay-800">
            <Link to="/category/best-sellers">
              <Button 
                variant="outline" 
                rightIcon={<ChevronRight />}
                className="transform hover:scale-105 transition-all"
              >
                View All Best Sellers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 animate-fadeInUp">
            <span className="text-[#fe6302] font-medium uppercase">WHY CHOOSE US</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">The Robust Regime Difference</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience premium quality equipment backed by our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: "Made in India",
                description: "Proudly manufactured in India with premium materials and expert craftsmanship"
              },
              {
                icon: <Truck className="h-8 w-8 text-white" />,
                title: "Pan India Shipping",
                description: "Shipping available to every corner of India"
              },
              {
                icon: <HeartHandshake className="h-8 w-8 text-white" />,
                title: "Expert Support",
                description: "Get professional advice from our equipment specialists"
              },
              {
                icon: <Clock className="h-8 w-8 text-white" />,
                title: "Long Warranty",
                description: "Up to 5 years warranty for peace of mind"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#fe6302] rounded-full text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Scrolling Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 opacity-0 animate-fadeInUp">
            <span className="text-[#fe6302] font-medium uppercase">TRUSTED BRANDS</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Our Clients</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We proudly serve these esteemed clients across India
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex animate-logo-scroll gap-8"
              style={{
                animation: 'logoScroll 20s linear infinite',
                display: 'flex',
                width: 'max-content',
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  className="h-16 md:h-20 lg:h-24 object-contain opacity-100 hover:opacity-100 transition-opacity"
                  style={{ minWidth: '180px' }}
                />
              ))}
            </div>
          </div>
        </div>
        <style>
          {`
            @keyframes logoScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 animate-fadeInUp">
            <span className="text-[#fe6302] font-medium uppercase">WHAT OUR CUSTOMERS SAY</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Customer Testimonials</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from fitness enthusiasts who trust Robust Regime for their workout needs
            </p>
          </div>
          
          {/* Testimonial Slider */}
          <div className="relative w-full">
            {/* Navigation Buttons */}
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 group"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-800 group-hover:text-[#fe6302]" />
            </button>
            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 group"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-gray-800 group-hover:text-[#fe6302]" />
            </button>

            {/* Testimonial Container */}
            <div 
              ref={testimonialSliderRef}
              className="overflow-x-auto hide-scrollbar flex gap-4 md:gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-none snap-start w-full sm:w-1/2 md:w-1/3 px-2 md:px-3 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full">
                    {/* Quote Icon */}
                    <div className="text-left mb-3 md:mb-4">
                      <div className="text-2xl md:text-4xl text-[#fe6302] font-serif">"</div>
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-xs md:text-sm text-left line-clamp-4 md:line-clamp-none">{testimonial.review}</p>
                    
                    {/* Star Rating */}
                    <div className="flex justify-start mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 md:h-4 md:w-4 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Customer Information */}
                    <div className="flex items-center justify-start">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-2 md:mr-3">
                        <span className="text-[#fe6302] font-semibold text-sm md:text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</h3>
                        <p className="text-gray-500 text-xs md:text-sm">Fitness Enthusiast</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
          <img 
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto opacity-0 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Fitness Game?</h2>
            <p className="text-xl text-white/80 mb-12">
              Invest in quality equipment that will last for years and help you achieve your fitness goals
            </p>
            <Link to="/category/best-sellers">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#fe6302] rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-[#fe6302]/90 focus:outline-none focus:ring-2 focus:ring-[#fe6302] focus:ring-offset-2 focus:ring-offset-black">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#fe6302] to-[#fe6302]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Shop Now & Save 10%
                  <ArrowDownToLine className="ml-2 h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Award, Users, Target, TrendingUp, MapPin, Mail, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gray-900 flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg" 
            alt="About Us" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center opacity-0 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              About Robust Regime
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Empowering India's fitness journey with premium, cost-effective equipment designed for every athlete and fitness enthusiast.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="w-full opacity-0 animate-fadeInUp">
            {/* <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2> */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              India is a developing country with a flourishing economy in all sectors. However, it faces challenges such as obesity, stress, and limited access to quality gym equipment. Many individuals struggle with time constraints, a lack of enthusiasm and energy, shortage of resources and equipment for dedicated athletes and regular fitness enthusiasts. We aim to find a solution to these issues.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Cards Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Why We Are So Committed */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 animate-fadeInUp">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Why We Are So Committed</h2>
                <p className="text-gray-600 leading-relaxed">
                  India is a developing country with a flourishing economy in all sectors. However, it faces challenges such as obesity, stress, and limited access to quality gym equipment. Many individuals struggle with time constraints, a lack of enthusiasm and energy, shortage of resources and equipment for dedicated athletes and regular fitness enthusiasts. We aim to find a solution to these issues.
                </p>
              </div>
              
              {/* Our Story */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 animate-fadeInUp">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  India is a developing country with a flourishing economy in all sectors. However, it faces challenges such as obesity, stress, and limited access to quality gym equipment. Many individuals struggle with time constraints, a lack of enthusiasm and energy, shortage of resources and equipment for dedicated athletes and regular fitness enthusiasts. We aim to find a solution to these issues.
                </p>
              </div>

              {/* Cost Effective */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 animate-fadeInUp">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/cost-saving.webp" 
                    alt="Cost Saving" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Cost Effective</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  We want to be part of every fitness story through our brand, from regular fitness to athlete strength. We will be there for your purposes and goals. We believe in manufacturing our pieces of equipment at a reasonable price so that our clients can only bear the weight they want to lift. not the price they invested in weight.
                </p>
              </div>

              {/* Best Quality */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 animate-fadeInUp">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/quality-approve.webp" 
                    alt="Quality Approved" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Best Quality</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  We focus on designing equipment that must be robust and innovative. Using high-grade raw materials gives us the exact result Every aspect is checked while production to dispatch ensuring high-grade material gives robustness to the equipment Good quality surface treatment ensures a longer life span for equipment robust, innovative design confirms the withstand capacity at extreme workouts with safety assurance. and our personal favourite is testing the equipment.
                </p>
              </div>
            </div>

            {/* Small Logo Images */}
            {/* <div className="mt-8 flex justify-center items-center space-x-8 opacity-0 animate-fadeInUp">
              <img 
                src="/cost-saving.webp" 
                alt="Cost Saving" 
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img 
                src="/quality-approve.webp" 
                alt="Quality Approved" 
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fadeInLeft">
              <img 
                src="https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg" 
                alt="Manufacturing Facility" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="opacity-0 animate-fadeInRight">
              <h2 className="text-4xl font-bold mb-6">Manufacturing Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our state-of-the-art manufacturing facility in Nashik spans over 50,000 square feet and employs the latest technology in fitness equipment production. Every piece of equipment goes through rigorous quality control checks before reaching you.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  ISO 9001:2015 certified manufacturing process
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  100% in-house production for quality control
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Stringent quality testing at every stage
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Experienced team of fitness equipment specialists
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto opacity-0 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-6">Join the Robust Regime Family</h2>
            <p className="text-xl text-white/80 mb-8">
              Experience the difference of premium fitness equipment backed by our commitment to quality and customer satisfaction.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
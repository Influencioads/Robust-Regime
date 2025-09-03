import React from 'react';
import { Award, Users, Target, TrendingUp, MapPin, Mail, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900 flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg" 
            alt="About Us" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl opacity-0 animate-fadeInLeft -mt-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Empowering Your Fitness Journey
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              At Robust Regime, we're dedicated to providing premium fitness equipment that helps you achieve your fitness goals with confidence and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded in 2020, Robust Regime emerged from a simple vision: to make professional-grade fitness equipment accessible to everyone. What started as a small workshop in Nashik has grown into one of India's leading fitness equipment manufacturers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has helped us build a community of over 50,000 satisfied customers, from home fitness enthusiasts to professional athletes and commercial gym owners.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're driven by our commitment to excellence and our mission to make quality fitness equipment accessible to all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality First",
                description: "We never compromise on materials or craftsmanship, ensuring every piece meets our high standards."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer Focus",
                description: "Your success is our success. We're here to support your fitness journey every step of the way."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Innovation",
                description: "We continuously improve our products based on research and customer feedback."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Sustainability",
                description: "We're committed to eco-friendly manufacturing processes and sustainable practices."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red-100 rounded-full text-red-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-white">
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
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
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
      </section>
    </div>
  );
};

export default AboutPage;
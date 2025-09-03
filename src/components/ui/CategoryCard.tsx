import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`} 
      className="group relative block w-[300px] h-[400px] overflow-hidden rounded-xl transition-all duration-300"
    >
      <div className="absolute inset-0">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-bold text-white mb-3">
          {category.name}
        </h3>
        <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-100">
          {category.description}
        </p>
        <div className="flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-150">
          Shop Now
          <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
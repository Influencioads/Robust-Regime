import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  showValue = false,
  className = '',
}) => {
  const roundedValue = Math.round(value * 10) / 10;
  
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  
  const stars = Array.from({ length: max }).map((_, index) => {
    const starValue = index + 1;
    let fillClass = '';
    
    if (starValue <= value) {
      fillClass = 'text-yellow-400 fill-current';
    } else if (starValue - 0.5 <= value) {
      fillClass = 'text-yellow-400';
    } else {
      fillClass = 'text-gray-300';
    }
    
    return (
      <Star
        key={index}
        className={`${sizeClasses[size]} ${fillClass}`}
        fill={starValue <= value ? 'currentColor' : 'none'}
      />
    );
  });
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">{stars}</div>
      {showValue && <span className="ml-1 text-sm text-gray-600">({roundedValue})</span>}
    </div>
  );
};

export default Rating;
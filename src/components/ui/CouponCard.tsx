import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CouponCardProps {
  couponCode: string;
  discountPercent: number;
  className?: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ 
  couponCode, 
  discountPercent, 
  className = "" 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy coupon code:', err);
    }
  };

  return (
    <div className={`bg-gradient-to-r from-[#fe6302] to-[#ff7a33] rounded-lg p-3 text-white relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-white rounded-full translate-y-6 -translate-x-6"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-medium opacity-90">COUPON CODE</div>
          <div className="text-xs font-bold bg-white/20 px-2 py-1 rounded">
            {discountPercent}% OFF
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg tracking-wider">
            {couponCode}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 bg-white/20 hover:bg-white/30 px-2 py-1 rounded text-xs font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
        
        <div className="text-xs opacity-90 mt-1">
          Valid on all products
        </div>
      </div>
    </div>
  );
};

export default CouponCard;

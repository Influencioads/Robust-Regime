import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  name: string;
  autoOpenFirst?: boolean;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name, autoOpenFirst = false }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Auto-open first image when autoOpenFirst is true
  React.useEffect(() => {
    if (autoOpenFirst && images.length > 0) {
      setSelectedImage(0);
    }
  }, [autoOpenFirst, images]);
  
  // Ensure we have 6 images by duplicating if needed
  const displayImages = [...images];
  while (displayImages.length < 6) {
    displayImages.push(...images);
  }
  displayImages.length = 6; // Limit to 6 images
  
  return (
    <div className="product-gallery">
      <div className="grid grid-cols-2 gap-4">
        {displayImages.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image} 
              alt={`${name} - Image ${index + 1}`}
              className="w-full h-full object-contain lazy"
              loading="lazy"
              decoding="async"
              width="100%"
              height="100%"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="opacity-0 hover:opacity-100 transition-opacity">
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Image Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={displayImages[selectedImage]}
              alt={`${name} - Full size`}
              className="w-full h-auto max-h-screen object-contain transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
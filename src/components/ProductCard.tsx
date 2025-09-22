'use client';

import Image from 'next/image';
import { Star, Heart, RotateCcw } from 'lucide-react';
import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  selectedColor?: string;
  onColorSelect?: (color: string) => void;
}

export default function ProductCard({ product, selectedColor, onColorSelect }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const renderStars = (rating: number = 0) => {
    return Array(5).fill(0).map((_, index) => {
      const starNumber = index + 1;
      const isFilled = starNumber <= Math.round(rating);
      
      return (
        <svg
          key={index}
          className={`w-4 h-4 ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };

  const getColorName = (colorValue: string) => {
    const colorMap: { [key: string]: string } = {
      '#1f2937': 'Black',
      '#ffffff': 'White',
      '#ef4444': 'Red',
      '#3b82f6': 'Blue',
      '#10b981': 'Green',
      '#fbbf24': 'Yellow',
      '#f3e8ff': 'Purple',
      '#6b7280': 'Gray',
      '#dc2626': 'Dark Red'
    };
    return colorMap[colorValue] || 'Color';
  };

  return (
    <div className="card w-full h-full flex flex-col">
      {/* Product Image Container */}
      <div 
        className="relative w-full h-64 rounded-lg overflow-hidden group"
        style={{
          backgroundColor: '#F5F5F5',
          marginBottom: '16px'
        }}
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className={`object-cover transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoading(false)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {imageLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        
        {/* Discount Badge */}
        {product.discountPercent && product.discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
            -{product.discountPercent}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isWishlisted ? 'text-red-500' : 'text-gray-400 bg-white/90 hover:bg-white/100'
          } transition-colors`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart 
            className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} 
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <h3 
            className="text-gray-900 mb-1 line-clamp-1"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: '0.5px',
              opacity: 1
            }}
          >
            {product.name}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex">
              {renderStars(product.ratingValue || 0)}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.ratingCount || 0})</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-center space-x-2 mb-3">
            {product.discountPrice ? (
              <>
                <span 
                  style={{
                    color: '#40BFFF',
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '180%',
                    letterSpacing: '0.5px',
                    width: '76px',
                    height: '32px',
                    opacity: 1
                  }}
                >
                  ${product.discountPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span 
                style={{
                  color: '#40BFFF',
                  fontFamily: 'Poppins',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '180%',
                  letterSpacing: '0.5px',
                  width: '76px',
                  height: '32px',
                  opacity: 1
                }}
              >
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          <div className="flex space-x-2 mb-3">
            {product.colors.slice(0, 4).map((color, index) => (
              <button
                key={index}
                onClick={() => onColorSelect?.(color)}
                className={`w-4 h-4 rounded-full border ${
                  selectedColor === color ? 'ring-2 ring-offset-1 ring-gray-400' : ''
                }`}
                style={{ backgroundColor: color }}
                aria-label={getColorName(color)}
                title={getColorName(color)}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 self-center">
                +{product.colors.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Product } from '@/types';

/**
 * Format price with currency symbol
 */
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

/**
 * Calculate discount percentage
 */
export const calculateDiscountPercent = (originalPrice: number, discountPrice: number): number => {
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
};

/**
 * Generate star rating array for rendering
 */
export const generateStarRating = (rating: number): boolean[] => {
  return Array.from({ length: 5 }, (_, index) => index < Math.floor(rating));
};

/**
 * function for search and filter inputs
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Check if a color is light or dark for contrast
 */
export const isLightColor = (color: string): boolean => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
};

/**
 * Generate URL from string
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Get color name from hex value
 */
export const getColorName = (hex: string): string => {
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
  return colorMap[hex] || 'Unknown';
};

/**
 * Filter products based on search query
 */
export const searchProducts = (products: Product[], query: string): Product[] => {
  if (!query.trim()) return products;
  
  const searchTerm = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};

/**
 * Get unique values from array
 */
export const getUniqueValues = <T>(array: T[]): T[] => {
  return Array.from(new Set(array));
};

/**
 * Clamp number between min and max values
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  ratingValue: number;
  ratingCount: number;
  isHot: boolean;
  colors: string[];
  category: string;
  imageUrl: string;
  brand: string;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  selectedColors: string[];
  selectedBrands: string[];
}

export interface SortOption {
  value: string;
  label: string;
}

export type SortBy = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'popularity-asc' | 'popularity-desc';

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

'use client';

import { useState, useMemo, useEffect } from 'react';
import { Grid, List, ChevronDown, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import SortingBar from '@/components/SortingBar';
// import FontTest from '@/components/FontTest';
import { mockProducts } from '@/data/products';
import { Product, FilterState, SortBy } from '@/types';

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('name-asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
  const [brandFilter, setBrandFilter] = useState<string>('');
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 500],
    selectedColors: [],
    selectedBrands: []
  });

  // Filter products based on brand
  const filteredProducts = useMemo(() => {
    if (!brandFilter) return mockProducts;
    
    return mockProducts.filter(product => 
      product.name.toLowerCase().includes(brandFilter.toLowerCase()) ||
      product.category?.toLowerCase().includes(brandFilter.toLowerCase())
    );
  }, [brandFilter]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = filteredProducts.filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Brand filter
      if (filters.selectedBrands.length > 0 && !filters.selectedBrands.includes(product.brand)) {
        return false;
      }

      // Price filter
      const price = product.discountPrice || product.price;
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
        return false;
      }

      // Color filter
      if (filters.selectedColors.length > 0) {
        const hasMatchingColor = filters.selectedColors.some(color => 
          product.colors.includes(color)
        );
        if (!hasMatchingColor) {
          return false;
        }
      }

      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return (a.discountPrice || a.price) - (b.discountPrice || b.price);
        case 'price-desc':
          return (b.discountPrice || b.price) - (a.discountPrice || a.price);
        case 'popularity-asc':
          return a.ratingCount - b.ratingCount;
        case 'popularity-desc':
          return b.ratingCount - a.ratingCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy, filteredProducts]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy]);

  const handleColorSelect = (productId: string, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: prev[productId] === color ? '' : color
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main container with exact dimensions */}
      <div 
        style={{
          width: '1499px',
          minHeight: '2131px',
          margin: '0 auto',
          position: 'relative',
          overflowX: 'hidden'
        }}
      >
        {/* Navbar and other content */}
        <div className="w-full">
          <Navbar
            cartItems={0}
            onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>

        {/* Hero Banner with constrained width */}
        <div className="w-full relative" style={{ marginTop: '20px' }}>
          {/* Sidebar positioned absolutely on the left */}
          <Sidebar 
            onBrandFilter={setBrandFilter} 
            activeBrand={brandFilter}
          />
          
          {/* Font Test Component */}
          {/* <FontTest /> */}

          {/* Banner with left margin to accommodate sidebar */}
          <div style={{ marginLeft: '410px' }}>
            <HeroBanner />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-gray-50">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              
              <div className="flex-1 min-w-0" style={{ marginLeft: '376px' }}>
                {/* Sorting Bar */}
                <div style={{
                  marginLeft: '0px',
                  marginTop: '0px',
                  marginBottom: '5px'
                }}>
                  <SortingBar
                    itemsCount={filteredAndSortedProducts.length}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                    brandFilter={brandFilter}
                    onClearBrandFilter={() => setBrandFilter('')}
                  />
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  {/* Products Grid */}
                  {paginatedProducts.length > 0 ? (
                    <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'}`}>
                      {paginatedProducts.map((product) => (
                        <div 
                          key={product.id}
                          className="relative"
                        >
                          <ProductCard
                            product={product}
                            selectedColor={selectedColors[product.id]}
                            onColorSelect={(color) => handleColorSelect(product.id, color)}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    
                    <div className="text-center py-12">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Grid className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                      <p className="text-gray-600 mb-4">
                        Try adjusting your filters or search terms to find what you're looking for.
                      </p>
                      <button
                        onClick={() => setFilters({
                          categories: [],
                          priceRange: [0, 500],
                          selectedColors: [],
                          selectedBrands: []
                        })}
                        className="btn-primary"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer  */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
'use client';

import { Grid, List } from 'lucide-react';
import { SortBy } from '@/types';

interface SortingBarProps {
  itemsCount: number;
  sortBy: SortBy;
  onSortChange: (sortBy: SortBy) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  brandFilter?: string;
  onClearBrandFilter?: () => void;
}

export default function SortingBar({ 
  itemsCount, 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange,
  brandFilter,
  onClearBrandFilter 
}: SortingBarProps) {
  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'popularity-asc', label: 'Popularity (Low to High)' },
    { value: 'popularity-desc', label: 'Popularity (High to Low)' }
  ];

  return (
    <div 
      className="bg-white rounded-lg shadow-sm p-6 relative"
      style={{
        width: '1069.5244140625px',
        height: '62.5740966796875px',
         backgroundColor: '#F1F3F4',
        opacity: 1
      }}
    >
      {/* Sort By Container */}
      <div 
        className="absolute"
        style={{
          width: '213.7249755859375px',
          height: '40.996803283691406px',
          top: '11.07px', 
          left: '85.93px', 
          opacity: 1
        }}
      >
        {/* Sort By Text */}
        <span 
          className="absolute"
          style={{
            width: '57.31583023071289px',
            height: '20.498401641845703px',
            top: '9.71px', 
            left: '0px', 
            fontFamily: 'Proxima Nova',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            opacity: 1
          }}
        >
          Sort By
        </span>

        {/* Name Dropdown Container */}
        <div 
          className="absolute"
          style={{
            width: '142.60324096679688px',
            height: '40.996803283691406px',
            top: '0px', 
            left: '71.13px', 
            opacity: 1
          }}
        >
          {/* Dropdown Select */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortBy)}
            className="absolute w-full h-full border border-gray-300 rounded bg-white px-3 text-left appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500"
            style={{
              fontFamily: 'Proxima Nova',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              paddingRight: '30px' 
            }}
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="popularity-asc">Popularity (Low to High)</option>
            <option value="popularity-desc">Popularity (High to Low)</option>
          </select>
          
          {/* Dropdown Arrow */}
          <div 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: '0',
              height: '0',
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid #666'
            }}
          />
        </div>
      </div>

      {/* Dropdown Container */}
      <div 
        className="absolute"
        style={{
          width: '191.13369750976562px',
          height: '40.996803283691406px',
          top: '11.07px', 
          left: '363px', 
          opacity: 1
        }}
      >
        {/* Show Text */}
        <span 
          className="absolute text-sm text-gray-600"
          style={{
            top: '50%',
            left: '0px',
            transform: 'translateY(-50%)',
            fontFamily: 'Proxima Nova',
            fontWeight: '400',
            fontSize: '16px'
          }}
        >
          Show
        </span>
        
        {/* Show Dropdown */}
        <select 
          className="absolute border border-gray-300 rounded bg-white px-3 text-left appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:border-blue-500"
          style={{
            width: '60px',
            height: '100%',
            right: '0px',
            fontFamily: 'Proxima Nova',
            fontWeight: '400',
            fontSize: '16px',
            paddingRight: '25px'
          }}
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
        
        {/* Dropdown Arrow */}
        <div 
          className="absolute pointer-events-none"
          style={{
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '0',
            height: '0',
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderTop: '4px solid #666'
          }}
        />
      </div>

      {/* View Mode Buttons */}
      {brandFilter && onClearBrandFilter && (
        <button
          onClick={onClearBrandFilter}
          className="absolute flex items-center px-4 py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
          style={{
            right: '140px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'Proxima Nova',
            fontWeight: '400',
            fontSize: '14px'
          }}
        >
          Clear Filter: {brandFilter}
        </button>
      )}
      
      {/* Multiple View Button */}
      <button
        onClick={() => onViewModeChange('grid')}
        className={`absolute flex items-center justify-center border border-gray-300 rounded transition-colors ${
          viewMode === 'grid'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-white text-gray-600 hover:text-gray-900 hover:border-gray-400'
        }`}
        style={{
          width: '61.4669075012207px',
          height: '62.574066162109375px',
          top: '-0.8px', 
          left: '892.2px', 
          opacity: 1
        }}
        aria-label="Grid view"
      >
        <Grid className="w-5 h-5" />
      </button>

      {/* Single View Button */}
      <button
        onClick={() => onViewModeChange('list')}
        className={`absolute flex items-center justify-center border border-gray-300 rounded transition-colors ${
          viewMode === 'list'
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-white text-gray-600 hover:text-gray-900 hover:border-gray-400'
        }`}
        style={{
          width: '61.4669075012207px',
          height: '62.574066162109375px',
          top: '-0.8px', 
          left: '952.44px', 
          opacity: 1
        }}
        aria-label="List view"
      >
        <List className="w-5 h-5" />
      </button>

      {/* Items Count */}
      <span 
        className="absolute"
        style={{
          width: '63.68425750732422px',
          height: '20.498401641845703px',
          top: '20.78px', 
          left: '20px', 
          fontFamily: 'Proxima Nova',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '100%',
          letterSpacing: '0%',
          opacity: 1
        }}
      >
        {itemsCount} Items
      </span>
    </div>
  );
}

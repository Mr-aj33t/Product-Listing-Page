'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`flex items-center justify-center transition-colors ${
            currentPage === i
              ? 'text-white bg-blue-500 rounded'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          style={{
            width: '69.40605926513672px',
            height: '68.56182861328125px',
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '16px'
          }}
          aria-label={`Go to page ${i}`}
          aria-current={currentPage === i ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    
    return pages;
  };

  return (
    <div 
      className="flex items-center justify-center"
      style={{
        width: '1070px',
        height: '68.94342041015625px',
        backgroundColor: '#f3f6f8f8',
        margin: '0 auto',
        opacity: 1
      }}
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-4">
        {renderPageNumbers()}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        aria-label="Next page"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}

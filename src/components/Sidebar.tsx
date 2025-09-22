'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { FilterState } from '@/types';
import { categories, brands, colors } from '@/data/products';

interface SidebarProps {
  filters?: FilterState;
  onFiltersChange?: (filters: FilterState) => void;
  onBrandFilter?: (brand: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  activeBrand?: string;
}

interface ExpandableSection {
  title: string;
  isExpanded: boolean;
}

const Sidebar = ({ onBrandFilter, activeBrand }: SidebarProps) => {
  const hotDealsData = [
    { name: 'Nike', count: 2 },
    { name: 'Airmax', count: 48 },
    { name: 'Puma', count: 14 },
    { name: 'Adidas', count: 15 },
    { name: 'Vans', count: 23 },
    { name: 'All Stars', count: 1, noWrap: true },
    { name: 'New Balance', count: 95, noWrap: true },
    { name: 'ALL', count: 0, isAll: true, noWrap: true }
  ];

  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'hot-deals': true,
    'brand': true,
    'price': true,
    'color': true,
    'more': true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleBrandClick = (brandName: string, isAll: boolean = false) => {
    if (onBrandFilter) {
      onBrandFilter(isAll ? '' : brandName);
    }
  };

  const brandData = [
    { name: 'Nike', count: 99 },
    { name: 'Puma', count: 99 },
    { name: 'Adidas', count: 99 },
    { name: 'Siemens', count: 99 }
  ];

  return (
    <div 
      className="absolute left-0 top-0"
      style={{
        width: '355px',
        height: '100vh',
        zIndex: 10,
        backgroundColor: '#ffffff',
        marginTop: '20px'
      }}
    >
      {/* Inner sidebar container */}
      <div 
        className="rounded-lg shadow-sm"
        style={{
          width: '349.23px',
          height: '548.57px',
          backgroundColor: '#eff2f4f8',
          position: 'relative',
          padding: '20px',
          marginLeft: '20px',
          marginRight: '20px',
          marginBottom: '20px',
          marginTop: '-20px'
        }}
      >
        {/* Hot Deals Section */}
        <div className="mb-8">
          <div 
            className="flex justify-between items-center"
          >
            <h3 
              className="text-gray-900"
              style={{
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                marginBottom: '40px'
              }}
            >
              Hot Deals
            </h3>
          </div>

          <div className="space-y-3">
            {hotDealsData.map((deal) => {
              const isActive = activeBrand === deal.name || (deal.isAll && !activeBrand);
              return (
                <div 
                  key={deal.name} 
                  className={`flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors ${isActive ? 'bg-gray-100' : ''}`} 
                  onClick={() => handleBrandClick(deal.name, deal.isAll)}
                >
                  <span 
                    className={deal.noWrap ? 'whitespace-nowrap' : ''}
                    style={{
                      fontFamily: 'Proxima Nova',
                      fontWeight: '400',
                      fontSize: '18px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: isActive ? '#33A0FF' : '#262626',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {deal.name}
                  </span>
                  {!deal.isAll && (
                    <span 
                      style={{
                        fontFamily: 'Proxima Nova',
                        fontWeight: '400',
                        fontSize: '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: isActive ? '#33A0FF' : '#22262A',
                        opacity: isActive ? '1' : '0.35',
                        transition: 'color 0.2s ease, opacity 0.2s ease',
                        marginLeft: '8px',
                        minWidth: '28px',
                        textAlign: 'right'
                      }}
                    >
                      {deal.count}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PRICES Section */}
      <div 
        className="mb-8"
        style={{
          width: '349.23px',
          height: 'auto',
          position: 'relative',
          backgroundColor: '#eff2f4f8',
          padding: '20px',
          margin: '20px',
          borderRadius: '8px'
        }}
      >
        <div 
          className="flex justify-between items-center"
        >
          <h3 
            className="text-gray-900 mb-4 font-bold"
            style={{
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            PRICES
          </h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span 
              style={{
                fontFamily: 'Proxima Nova',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#262626'
              }}
            >
              Ranger:
            </span>
            <span 
              style={{
                fontFamily: 'Proxima Nova',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#22262A'
              }}
            >
              $13.99 - $25.99
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2 relative">
            <div className="bg-blue-500 h-2 rounded-full w-3/5 relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* COLOR Section */}
      <div 
        className="mb-8"
        style={{
          width: '349.23px',
          height: 'auto',
          position: 'relative',
          backgroundColor: '#eff2f4f8',
          padding: '20px',
          margin: '20px',
          borderRadius: '8px'
        }}
      >
        <div 
          className="flex justify-between items-center"
        >
          <h3 
            style={{
              width: '79.90px',
              height: '31.66px',
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#22262A',
              marginBottom: '16px'
            }}
          >
            COLOR
          </h3>
        </div>

        <div className="flex space-x-3">
          <div 
            className="bg-blue-500 rounded-full border-2 border-blue-600 cursor-pointer hover:scale-110 transition-transform"
            style={{
              width: '33.505455017089844px',
              height: '30.485994338989258px',
              opacity: 1
            }}
          ></div>
          <div 
            className="bg-red-500 rounded-full border cursor-pointer hover:scale-110 transition-transform"
            style={{
              width: '33.505455017089844px',
              height: '30.485994338989258px',
              opacity: 1
            }}
          ></div>
          <div 
            className="bg-black rounded-full border cursor-pointer hover:scale-110 transition-transform"
            style={{
              width: '33.505455017089844px',
              height: '30.485994338989258px',
              opacity: 1
            }}
          ></div>
          <div 
            className="bg-yellow-400 rounded-full border cursor-pointer hover:scale-110 transition-transform"
            style={{
              width: '33.505455017089844px',
              height: '30.485994338989258px',
              opacity: 1
            }}
          ></div>
          <div 
            className="bg-pink-500 rounded-full border cursor-pointer hover:scale-110 transition-transform"
            style={{
              width: '33.505455017089844px',
              height: '30.485994338989258px',
              opacity: 1
            }}
          ></div>
          <div 
            className="bg-pink-200 rounded-full border cursor-pointer hover:scale-110 transition-transform"
            style={{
              width: '33.505455017089844px',
              height: '30.485994338989258px',
              opacity: 1
            }}
          ></div>
        </div>
      </div>

      {/* BRAND Section */}
      <div 
        className="mb-8"
        style={{
          width: '349.23px',
          height: 'auto',
          position: 'relative',
          backgroundColor: '#eff2f4f8',
          padding: '20px',
          margin: '20px',
          borderRadius: '8px'
        }}
      >
        <div 
          className="flex justify-between items-center"
        >
          <h3 
            style={{
              width: '87.5px',
              height: '32.53px',
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#262626'
            }}
          >
            BRAND
          </h3>
        </div>

        <div className="mt-4 space-y-3">
          {brandData.map((brand) => {
            const isActive = activeBrand === brand.name;
            return (
              <div 
                key={brand.name} 
                className={`flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors ${isActive ? 'bg-gray-100' : ''}`}
                onClick={() => handleBrandClick(brand.name)}
              >
                <span 
                  style={{
                    fontFamily: 'Proxima Nova',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: isActive ? '#33A0FF' : '#262626',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {brand.name}
                </span>
                <span 
                  style={{
                    fontFamily: 'Proxima Nova',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: isActive ? '#33A0FF' : '#22262A',
                    opacity: isActive ? '1' : '0.35',
                    transition: 'color 0.2s ease, opacity 0.2s ease'
                  }}
                >
                  {brand.count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* MORE Section */}
      <div 
        className="mb-8"
        style={{
          width: '349.23px',
          height: 'auto',
          position: 'relative',
          backgroundColor: '#eff2f4f8',
          padding: '20px',
          margin: '20px',
          borderRadius: '8px'
        }}
      >
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('more')}
        >
          <h3 
            style={{
              width: '59px',
              height: '26px',
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#262626',
              textAlign: 'center',
              margin: '0 auto'
            }}
          >
            MORE
          </h3>
          {expandedSections['more'] ? (
            <ChevronUp className="text-gray-500" />
          ) : (
            <ChevronDown className="text-gray-500" />
          )}
        </div>

        {expandedSections['more'] && (
          <div className="mt-4"></div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

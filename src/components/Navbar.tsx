'use client';

import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import iconImage from '/images/Icon.png';

interface NavbarProps {
  cartItems: number;
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export default function Navbar({ cartItems = 0, onMenuToggle, isMobileMenuOpen }: NavbarProps) {
  const [activeItem, setActiveItem] = useState('HOME');

  const navItems = [
    { name: 'HOME', href: '#' },
    { name: 'BAG', href: '#' },
    { name: 'SNEAKERS', href: '#' },
    { name: 'BELT', href: '#' },
    { name: 'CONTACT', href: '#' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 relative h-16">
      {/* E-Comm Logo with exact positioning */}
      <div 
        className="flex items-center"
        style={{
          position: 'absolute',
          width: '182px',
          height: '44px',
          top: '13.27px',
          left: '27.4px',
          opacity: 1
        }}
      >
        <div 
          className="flex items-center justify-center"
          style={{
            width: '51px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image 
            src={iconImage} 
            alt="Diamond Icon"
            width={32} 
            height={32}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        <span 
          style={{
            marginLeft: '10px',
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#22262A'
          }}
        >
          E-Comm
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="w-48"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div 
              className="ml-10 flex items-baseline space-x-8"
              style={{
                width: '804px',
                height: '40px',
                position: 'relative',
                marginLeft: '270px'
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: '500',
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: activeItem === item.name ? '#3B82F6' : '#22262A',
                    padding: '8px 12px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    borderBottom: activeItem === item.name ? '2px solid #3B82F6' : 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (activeItem !== item.name) {
                      (e.target as HTMLElement).style.color = '#374151';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeItem !== item.name) {
                      (e.target as HTMLElement).style.color = '#22262A';
                    }
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cart Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button 
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              style={{
                width: '31px',
                height: '34px',
                padding: '0'
              }}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>

            {/* Cart  */}
            <div className="hidden md:flex items-center space-x-1">
              <span 
                style={{
                  width: '58.97px',
                  height: '35.15px',
                  fontFamily: 'Proxima Nova',
                  fontWeight: '400',
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#262626'
                }}
              >
                Items
              </span>
              <span 
                style={{
                  width: '57.86px',
                  height: '35.15px',
                  fontFamily: 'Proxima Nova',
                  fontWeight: '400',
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#262626',
                  opacity: '0.5'
                }}
              >
                $0.00
              </span>
            </div>

            {/* menu button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/*  Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  onMenuToggle();
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeItem === item.name
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

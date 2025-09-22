'use client';

import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroBanner() {
  return (
    <div 
      className={`relative w-full overflow-hidden ${poppins.className}`} 
      style={{ 
        height: '350px', 
        backgroundColor: '#40BFFF' 
      }}
    >
      {/* Content container */}
      <div className="relative w-full h-full max-w-[1200px] mx-auto px-4 flex items-center">
        {/* Text Content - Left Side */}
        <div className="w-full md:w-1/2 z-10">
          <h1 
            className="text-[30px] font-medium text-white mb-4"
            style={{
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Adidas Men Running
            <br />
            Sneakers
          </h1>
          <p 
            className="text-white text-lg mb-6 opacity-90 max-w-md"
            style={{
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Performance and design. Taken right to the edge.
          </p>
          <button 
            className="bg-white text-blue-600 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors duration-200 shadow-lg uppercase tracking-wide text-sm"
            style={{
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            SHOP NOW
          </button>
        </div>

        {/* Shoe Image */}
        <div className="hidden md:block absolute right-0 bottom-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <Image
              src="/images/shoes.png"
              alt="Adidas Men Running Sneakers"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
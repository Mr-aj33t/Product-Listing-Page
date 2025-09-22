import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer 
      className="w-full relative"
      style={{
        width: '1499px',
        height: '626.94px',
        backgroundColor: '#BCDDFE',
        position: 'absolute',
        top: '1504.27px',
        left: '-1.6px',
        opacity: 1
      }}
    >
      {/* E-Comm Logo and Text */}
      <div 
        className="absolute" 
        style={{
          width: '38.9739990234375px',
          height: '35.92527770996094px',
          top: '106.18px', 
          left: '153.66px' 
        }}
      >
        <Image 
          src="/images/Icon_1.png" 
          alt="E-Comm Icon"
          width={38.97}
          height={35.93}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      <span 
        className="absolute"
        style={{
          width: '83.94400024414062px',
          height: '24.87134552001953px',
          top: '110.78px', 
          left: '199.74px', 
          fontFamily: 'Poppins',
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#22262A'
        }}
      >
        E-Comm
      </span>

      {/* Company Description */}
      <div 
        className="absolute" 
        style={{
          width: '220.95462036132812px',
          height: '69.08707427978516px',
          top: '156.84px', 
          left: '153.66px', 
          fontFamily: 'Proxima Nova',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#22262A'
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
      </div>

      {/* Follow Us Section */}
      <div className="absolute">
        {/* Follow Us Heading */}
        <h3 
          className="text-gray-900 absolute"
          style={{
            width: '83.94400024414062px',
            height: '24.87134552001953px',
            top: '117.81px', 
            left: '664.57px', 
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Follow Us
        </h3>
        
        {/* Follow Us Description */}
        <p 
          className="absolute"
          style={{
            width: '197.8679962158203px',
            height: '41.45224380493164px',
            top: '160.65px', 
            left: '664.57px', 
            fontFamily: 'Proxima Nova',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#22262A'
          }}
        >
          Since the 1500s, when an unknown printer took a galley of type and scrambled.
        </p>
        
        {/* Social Media Icons */}
        <div className="absolute flex space-x-3" style={{
          top: '210px',
          left: '664.57px'
        }}>
          <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
            <Facebook className="w-4 h-4 text-blue-600" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
            <Twitter className="w-4 h-4 text-blue-400" />
          </a>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="absolute">
        {/* Contact Us Heading */}
        <h3 
          className="text-gray-900 absolute"
          style={{
            width: '100.93266296386719px',
            height: '24.87134552001953px',
            top: '120.85px', 
            left: '1069.77px', 
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Contact Us
        </h3>
        
        {/* Contact Us Address Text */}
        <div 
          className="absolute" 
          style={{
            width: '148.0105438232422px',
            height: '58.03314208984375px',
            top: '163.47px', 
            left: '1069.77px', 
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#22262A'
          }}
        >
          <p>E-Comm , 4578</p>
          <p>Marmora Road,</p>
          <p>Glasgow D04 89GR</p>
        </div>
      </div>


      {/* White Horizontal Line */}
      <div 
        style={{
          position: 'absolute',
          width: '1180.07px',
          height: '1.08px',
          backgroundColor: '#FFFFFF',
          top: '500px', 
          left: '183.15px',
          opacity: 1
        }}
      />

      {/* Brands */}
      <div 
        className="absolute"
        style={{
          width: '212.3px',
          height: '23.34px',
          top: '550px',  
          left: '1125.41px',
          overflow: 'hidden'
        }}
      >
        <Image 
          src="/images/Brands.png" 
          alt="Payment Methods"
          width={212.3}
          height={23.34}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Footer Links Section */}
      <div 
        className="absolute"
        style={{
          width: '1200.0908203125px',
          height: '134.87452697753906px',
          top: '295.41px', 
          left: '153.66px', 
          opacity: 1
        }}
      >
        {/* Information Section */}
        <div className="absolute">
          <h3 
            className="text-gray-900 absolute"
            style={{
              width: '98.93399810791016px',
              height: '24.87134552001953px',
              top: '5.01px', 
              left: '-1.6px', 
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Information
          </h3>
          <ul 
            className="absolute"
            style={{
              width: '151.89865112304688px',
              height: '77.37751770019531px',
              top: '57.5px', 
              left: '-1.6px', 
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#262626'
            }}
          >
            <li className="mb-2"><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Information</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Service Section */}
        <div className="absolute">
          <h3 
            className="text-gray-900 absolute"
            style={{
              width: '65.95600128173828px',
              height: '24.87134552001953px',
              top: '0px', 
              left: '328.7px', 
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Service
          </h3>
          <ul 
            className="absolute"
            style={{
              width: '151.89865112304688px',
              height: '77.37751770019531px',
              top: '56.83px', 
              left: '328.7px', 
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#262626'
            }}
          >
            <li className="mb-2"><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Information</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* My Account Section */}
        <div className="absolute">
          <h3 
            className="text-gray-900 absolute"
            style={{
              width: '105.92933654785156px',
              height: '24.87134552001953px',
              top: '5.01px', 
              left: '706.5px', 
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            My Account
          </h3>
          <ul 
            className="absolute"
            style={{
              width: '151.89865112304688px',
              height: '77.37751770019531px',
              top: '47.37px', 
              left: '705.95px', 
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#262626'
            }}
          >
            <li className="mb-2"><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Information</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Our Offers Section */}
        <div className="absolute">
          <h3 
            className="text-gray-900 absolute"
            style={{
              width: '91.93866729736328px',
              height: '24.87134552001953px',
              top: '9.23px', 
              left: '1044.18px', 
              fontFamily: 'Poppins',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Our Offers
          </h3>
          <ul 
            className="absolute"
            style={{
              width: '151.89865112304688px',
              height: '77.37751770019531px',
              top: '51.58px', 
              left: '1046.59px', 
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#262626'
            }}
          >
            <li className="mb-2"><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Information</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

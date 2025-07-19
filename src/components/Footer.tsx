import React from 'react';
import { Instagram, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    courses: [
      { name: 'Bachelor of Fine Arts', href: '#courses' },
      { name: 'Diploma in Fine Arts', href: '#courses' },
      { name: 'Wall Art Workshop', href: '#courses' },
      { name: 'Online Courses', href: '#courses' }
    ],
    quickLinks: [
      { name: 'About Us', href: '#about' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Contact', href: '#contact' },
      { name: 'Admissions', href: '#contact' }
    ],
    resources: [
      { name: 'Student Portal', href: '#' },
      { name: 'Course Brochure', href: '#' },
      { name: 'Art Supplies', href: '#' },
      { name: 'Career Guidance', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-48 sm:h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-24 sm:h-24 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">The Artforever</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Crafting Creativity Forever</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Empowering artists through comprehensive education, innovative techniques, 
                and a supportive community that nurtures creativity and professional growth.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://instagram.com/the_artforever"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="mailto:info@theartforever.com"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a
                  href="tel:+919876543210"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Courses</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.courses.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm sm:text-base"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-xs sm:text-sm">
                  <p>Khushal Chowk , Near Nalanda Modern</p>
                  <p>Public School , Burari , Delhi 110084</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone size={18} className="text-purple-600 flex-shrink-0" />
                  <div className="text-gray-400 text-xs sm:text-sm">
                    <p>+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail size={18} className="text-purple-600 flex-shrink-0" />
                  <div className="text-gray-400 text-xs sm:text-sm">
                    <p>info@theartforever.com</p>
                    <p>admissions@theartforever.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Stay Updated</h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Subscribe to our newsletter for art tips, course updates, and exclusive offers.
                </p>
              </div>
              <div className="flex w-full md:w-auto max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:border-purple-600 transition-colors duration-300 text-sm sm:text-base"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-r-xl font-medium hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm text-center">
                <span>© 2024 The Artforever. Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>for artists everywhere.</span>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 text-gray-400 text-xs sm:text-sm">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg z-50"
      >
        <ArrowUp size={18} className="sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
};

export default Footer;
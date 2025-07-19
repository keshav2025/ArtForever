import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone, Mail } from 'lucide-react';
import logo from '/logo.jpeg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
              {/* Logo */}
              <div className="flex items-center space-x-4 sm:space-x-4">
  {/* Bigger logo */}
  <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
    <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
  </div>

  {/* Text with colorful logo-style effect */}
  <div>
  <h1
    className="text-2xl sm:text-2xl font-extrabold bg-clip-text text-transparent transform  "
  >
    <span
      className="text-[#22ff01]"
      style={{
        textShadow:
          '2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000',
      }}
    >
      ART
    </span>
    <span
      className="text-[#f2f2fb]"
      style={{
        textShadow:
          '2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000',
      }}
    >
      {' '}
      forever
    </span>
  </h1>
  <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
    Crafting Creativity Forever
  </p>
</div>

</div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/the_artforever"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Instagram size={18} />
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-purple-50"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a
                  href="https://instagram.com/the_artforever"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-600 px-4 py-2"
                >
                  <Instagram size={18} />
                  <span>Follow Us</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
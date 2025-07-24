import React, { useState } from 'react';
import { Brush, Palette, Home, Building, Download, ArrowRight, CheckCircle, Star, Heart, Camera, Users } from 'lucide-react';
import g4 from '../assets/g4.webp'
import g5 from '../assets/g5.webp'
import g6 from '../assets/g6.webp'
import g14 from '../assets/g14.jpeg'
import wall01 from '../assets/wallart01.webp'
const WallArt = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      name: "Mural Painting",
      category: "residential",
      description: "Transform your home with custom wall paintings, murals, and decorative art that reflects your personality.",
      features: [
        "Living room feature walls",
        "Bedroom accent paintings",
        "Kids room themed murals",
        "Kitchen backsplash art",
        "Bathroom decorative tiles",
        "Staircase wall designs"
      ],
      price: "₹5,000 - ₹50,000",
      image: g4,
      icon: Home,
      color: "from-green-500 to-green-400"
    },
    {
      id: 2,
      name: "Poster Art",
      category: "commercial",
      description: "Professional wall art solutions for offices, restaurants, hotels, and retail spaces to enhance brand identity.",
      features: [
        "Office lobby murals",
        "Restaurant themed walls",
        "Hotel corridor art",
        "Retail store displays",
        "Corporate branding walls",
        "Reception area designs"
      ],
      price: "₹10,000 - ₹1,00,000",
      image: g5,
      icon: Building,
      color: "from-green-500 to-green-400"
    },
    {
      id: 3,
      name: "Graffiti Wall Art",
      category: "artistic",
      description: "Large-scale Graffiti Wall Art and custom paintings that serve as stunning focal points for any space.",
      features: [
        "Abstract art murals",
        "Nature and landscape themes",
        "Portrait and figure paintings",
        "Cultural and traditional art",
        "Modern geometric designs",
        "Custom theme murals"
      ],
      price: "₹15,000 - ₹2,00,000",
      image: g6,
      icon: Palette,
      color: "from-green-500 to-green-600"
    },
    
      {
        id: 4,
        name: "Wall Art",
        category: "art",
        description: "Bold and expressive large-scale wall designs that reflect themes, culture, and creativity through vibrant graffiti and mural techniques.",
        features: [
          "Custom themed wall paintings",
          "Street-style graffiti art",
          "Hand-painted murals",
          "Interior and exterior surfaces",
          "Community and branding murals",
          "Weather-resistant finishes"
        ],
        price: "₹10,000 - ₹1,50,000",
        image: wall01,
        icon: Star,
        color: "from-green-500 to-teal-600"
      }
      
  ];

  const categories = [
    { id: 'all', label: 'All Services', count: services.length },
    { id: 'residential', label: 'Residential', count: services.filter(s => s.category === 'residential').length },
    { id: 'commercial', label: 'Commercial', count: services.filter(s => s.category === 'commercial').length },
    { id: 'artistic', label: 'Artistic Murals', count: services.filter(s => s.category === 'artistic').length },
    { id: '3d', label: '3D Art', count: services.filter(s => s.category === '3d').length }
  ];

  const filtegreenServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const portfolio = [
    {
      id: 1,
      title: "Modern Living Room Mural",
      category: "Residential",
      image: g4,
      likes: 45,
      views: 234
    },
    {
      id: 2,
      title: "Restaurant Theme Wall",
      category: "Commercial",
      image: g5,
      likes: 67,
      views: 189
    },
    {
      id: 3,
      title: "Abstract Art Installation",
      category: "Artistic",
      image: g6,
      likes: 89,
      views: 456
    },
    {
      id: 4,
      title: "3D Textugreen Wall Design",
      category: "3D Art",
      image: g14,
      likes: 123,
      views: 678
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We discuss your vision, space requirements, and design preferences."
    },
    {
      step: 2,
      title: "Design Proposal",
      description: "Our artists create detailed sketches and color schemes for approval."
    },
    {
      step: 3,
      title: "Material Selection",
      description: "We choose the best quality paints and materials for longevity."
    },
    {
      step: 4,
      title: "Execution",
      description: "Our skilled artists bring your vision to life with precision and care."
    }
  ];

  return (
    <section id="wall-art" className="py-5 sm:py-15 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Brush className="w-12 h-12 sm:w-16 sm:h-16 text-green-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
            Professional Wall Art Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Transform your spaces with our custom wall art services. From residential homes to commercial spaces, 
            we create stunning murals and decorative paintings that bring walls to life.
          </p>
          
          {/* Download Brochure CTA */}
          {/* <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-4 sm:p-6 text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <Download size={24} />
              <h3 className="text-lg sm:text-xl font-bold">Get Our Wall Art Brochure</h3>
            </div>
            <p className="text-green-100 mb-3 sm:mb-4 text-sm sm:text-base">
              Download our comprehensive brochure with portfolio, pricing, and service details!
            </p>
            <button className="bg-white text-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
              Download Free Brochure
            </button>
          </div> */}
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span>{category.label}</span>
              <span className="bg-white/20 text-xs px-1 sm:px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div> */}

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filtegreenServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r ${service.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}>
                  {service.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className={`p-2 bg-gradient-to-r ${service.color} text-white rounded-lg`}>
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">{service.name}</h3>
                </div>

                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">What We Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex gap-2">
  {/* WhatsApp Icon Button */}
  <a
    href={`https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.name)}%20service.`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center"
    aria-label="Contact on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <path d="M20.52 3.48a11.86 11.86 0 0 0-16.76 0A11.86 11.86 0 0 0 2.3 12.1c0 1.94.5 3.83 1.47 5.49L2 22l4.56-1.73a11.86 11.86 0 0 0 5.54 1.41h.03a11.86 11.86 0 0 0 8.39-3.47 11.86 11.86 0 0 0 0-16.73ZM12.1 20.07c-1.66 0-3.29-.44-4.7-1.26l-.34-.2-2.71 1.03.97-2.64-.22-.34a8.93 8.93 0 0 1 1.37-11.17 8.9 8.9 0 0 1 6.35-2.63c2.38 0 4.61.93 6.3 2.63a8.89 8.89 0 0 1 2.61 6.3c-.01 4.92-4.01 8.93-8.93 8.93Zm5-6.6c-.27-.14-1.58-.78-1.82-.87s-.42-.13-.6.14-.69.86-.84 1.03-.31.2-.57.07a7.29 7.29 0 0 1-2.14-1.32 8.12 8.12 0 0 1-1.5-1.87c-.16-.27 0-.42.12-.56.13-.13.27-.3.4-.45.14-.15.18-.27.27-.44.09-.18.05-.33-.02-.47s-.6-1.45-.83-1.99c-.22-.52-.45-.44-.6-.45l-.5-.01a.96.96 0 0 0-.7.33c-.24.26-.92.89-.92 2.16s.94 2.5 1.08 2.68c.13.17 1.85 2.83 4.5 3.97.63.27 1.12.43 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.58-.64 1.8-1.26.22-.63.22-1.18.16-1.26-.05-.09-.25-.14-.52-.27Z" />
    </svg>
  </a>

  {/* Phone Call Icon Button */}
  <a
    href="tel:+919876543210"
    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center"
    aria-label="Call Us"
  >
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 text-red-600"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.09 3.27a1 1 0 01-.21 1.05l-1.38 1.38a16.05 16.05 0 006.36 6.36l1.38-1.38a1 1 0 011.05-.21l3.27 1.09a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
  />
</svg>

  </a>
</div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Our Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Explore some of our recent wall art projects and see how we transform spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">{item.category}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Heart size={12} />
                    <span>{item.likes}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                    <Camera size={12} />
                    <span>{item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              From initial consultation to final execution, we ensure a smooth and professional experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-600 to-green-600 text-white rounded-full flex items-center justify-center mx-auto text-xl sm:text-2xl font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-green-600 to-green-600 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Space?</h3>
            <p className="text-green-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Contact us today for a free consultation and quote. Let our expert artists bring your vision to life 
              with stunning wall art that reflects your style and personality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href='#contact' className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Get Free Consultation
              </a>
              <a
  href="/bbq.pdf"
  download
  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
>
  <Download size={18} />
  <span>Download Portfolio</span>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WallArt;
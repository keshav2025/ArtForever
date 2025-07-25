import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Palette, Users, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Crafting Creativity Forever",
      subtitle: "Transform Your Artistic Vision Into Reality",
      description: "Join thousands of students in our comprehensive art programs designed to nurture creativity and build professional skills.",
      image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Professional Art Education",
      subtitle: "Learn From Industry Experts",
      description: "Our experienced instructors guide you through every step of your artistic journey with personalized attention.",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Flexible Learning Options",
      subtitle: "Online & Offline Courses Available",
      description: "Choose the learning format that works best for you - attend in-person classes or learn from anywhere online.",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Users, number: "500+", label: "Students Enrolled" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Palette, number: "50+", label: "Art Forms Covered" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              loading="lazy"
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-48 sm:h-48 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 sm:pt-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 text-green-200 animate-fade-in-up delay-200">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in-up delay-400 px-4">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fade-in-up delay-600 px-4">
            <a href='#courses' className="group bg-gradient-to-r from-green-600 to-green-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span>Explore Courses</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href='#gallery' className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center">
              <Play size={20} />
              <span>Watch Demo</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 animate-fade-in-up delay-800 px-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-4 h-4 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-2 sm:mb-4">
                  <stat.icon size={18} className="sm:w-8 sm:h-8" />
                </div>
                <div className="text-lg sm:text-3xl font-bold mb-0.5 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
        index === currentSlide ? 'bg-white' : 'bg-white/50'
      }`}
    />
  ))}
</div> */}

    </section>
  );
};

export default Hero;
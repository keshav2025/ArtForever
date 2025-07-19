import React from 'react';
import { Target, Eye, Heart, Instagram, Users, Award } from 'lucide-react';
import aboutimg from '../assets/aboutimg1.webp'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide world-class art education that nurtures creativity, builds technical skills, and empowers students to express their unique artistic vision."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading art education institution that bridges traditional techniques with contemporary practices, creating tomorrow's artistic leaders."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in fostering creativity, encouraging experimentation, building confidence, and creating a supportive community of artists."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "2000+", label: "Students Graduated" },
    { number: "50+", label: "Expert Instructors" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            About The Artforever
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Founded with a passion for nurturing artistic talent, we've been crafting creativity forever, 
            helping students discover and develop their artistic potential through comprehensive education programs.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              The Artforever began as a dream to create a space where artistic expression knows no boundaries. 
              Founded by passionate artists and educators, we recognized the need for comprehensive art education 
              that combines traditional techniques with modern approaches.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, we've evolved into a premier art education institution, offering diverse programs 
              from Bachelor of Fine Arts to specialized workshops. Our commitment to excellence and innovation 
              has helped thousands of students transform their creative passion into professional success.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://instagram.com/the_artforever"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
              >
               <span className='text-pink-600'> <Instagram size={20} /></span>
                <span>Follow Our Journey</span>
              </a>
            </div>
          </div>
          <div className="relative">
          <img
  src={aboutimg}
  alt="Art Studio"
  className="rounded-2xl shadow-2xl h-[600px] w-full max-w-md sm:max-w-lg object-cover"
/>

            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:right-12 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">5+</div>
                <div className="text-gray-600 text-sm sm:text-base">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-6 sm:p-8 md:p-12 text-white">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Achievements</h3>
            <p className="text-green-100 max-w-2xl mx-auto text-sm sm:text-base">
              Numbers that reflect our commitment to excellence and the trust our students place in us.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">{achievement.number}</div>
                <div className="text-green-200 text-xs sm:text-sm md:text-base">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { Clock, Users, Award, BookOpen, Palette, Brush, ArrowRight , CheckCircle } from 'lucide-react';

const Courses = () => {
  const [selectedMode, setSelectedMode] = useState('all');
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const courses = [
    {
      id: 1,
      name: "Bachelor of Fine Arts (BFA)",
      description: "Our Bachelor of Fine Arts (BFA) is a 4-year full-time degree course designed for senior students (18+ years) who are passionate about developing their artistic talent into a professional career. This comprehensive program offers in-depth training across all major art mediums and creative disciplines, blending traditional techniques with modern practices to build well-rounded artists.",
      duration: "4 Years",
      students: "200+",
      level: "Undergraduate",
      modes: ["online", "offline", "hybrid"],
      features: [
        " Watercolor Techniques – Explore transparency and layering.",
        "Charcoal Drawing – Master tonal values, textures, and life drawing.",
        " Graphite Sketching – Develop precision in portraiture, figure drawing, and still life",
        "Oil Painting – Dive deep into classical methods with rich color theory and glazing techniques.",
        "Mixed Media & Other Forms – Including ink, pastels, clay modeling, printmaking, and digital art basics"
      ],
      price: "₹25,000/year",
      image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Award,
      color: "from-green-500 to-yellow-600"
    },
    {
      id: 2,
      name: "Diploma in Fine Arts",
      description: "Our Diploma in Fine Arts is a specially curated course for senior students aged 18 and above, designed to nurture creative expression, enhance artistic skills, and provide a solid foundation in multiple art mediums. Whether you're an aspiring professional or a passionate art enthusiast, this comprehensive diploma equips you with the technical knowledge and confidence to explore art at a deeper level.",
      duration: "2 Years",
      students: "120+",
      level: "Diploma",
      modes: ["online", "offline", "hybrid"],
      features: [
        " Watercolors Learn the fluid techniques of washes and gradients.",
        "Charcoal Master dramatic shading and expressive sketching with bold, textured strokes.",
        "Graphite – Build strong foundations in line work, realistic rendering, and form study.",
        "Oil Colours – Dive into traditional fine art practices with rich textures and blending",
        "Ink, Soft Pastels, Oil Pastels & Mixed Media – Additional mediums that expand creative possibilities."
      ],
      price: "₹15,000/year",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: BookOpen,
      color: "from-green-500 to-yellow-600"
    },
    {
      id: 3,
      name: "Art Hobby Course",
      description: "Discover the joy of art in a relaxed and inspiring environment with our Art Hobby Course – specially designed for anyone aged 15 to 60 years who wants to explore their creative potential, learn new techniques, or simply enjoy art as a fulfilling pastime. Whether you're a beginner, a self-taught artist, or someone looking to rekindle a forgotten passion, this course offers a perfect mix of skill-building and relaxation through drawing, sketching, painting, and mixed media.",
      duration: "3 Months",
      students: "80+",
      level: "Ages 15–60",
      modes: ["online", "offline", "hybrid"],
      features: [
        "Basics of drawing & shading",
        "Colour theory & composition",
        "Watercolour, acrylic & mixed media technique",
        "Still life, landscapes, portraits, and more",
        "Hands-on projects & personal expression",
        "Certificate"
      ],
      price: "₹25,000",
      image: "https://images.pexels.com/photos/7859283/pexels-photo-7859283.jpeg",
      icon: Brush,
      color: "from-green-500 to-yellow-600"
    },
    {
      id: 4,
      name: "BFA Entrance  Preparation",
      description: "Our BFA Entrance Exam Preparation Course is a fully-structured, result-oriented program designed for senior students who aim to secure admission in prestigious government fine arts colleges such as JJ School of Art, Delhi College of Art, BHU, Visva-Bharati, and others. The course focuses equally on both practical and theoretical components required to crack entrance exams, including CUET (Common University Entrance Test).",
      duration: "3 Months",
      students: "100+",
      level: "For Senior Students – Age 18+",
      modes: ["online", "offline", "hybrid"],
      features: [
        "Theory Preparation Includes",
        "CUET BFA Entrance Exam Preparation",
        "Coaching for CUET (Art-related sections) with mock tests & MCQs",
        "Still life, landscapes, portraits, and more",
        "Hands-on projects & personal expression",
        "Certificate"
      ],
      price: "₹25,000",
      image: "https://images.pexels.com/photos/7859492/pexels-photo-7859492.jpeg",
      icon: Brush,
      color: "from-green-500 to-yellow-600"
    }
  ];

  const modes = [
    { id: 'all', label: 'All Modes', icon: Palette },
    { id: 'online', label: 'Online', icon: BookOpen },
    { id: 'offline', label: 'Offline', icon: Users },
    { id: 'hybrid', label: 'Hybrid', icon: Award }
  ];

  const filteredCourses = selectedMode === 'all' 
    ? courses 
    : courses.filter(course => course.modes.includes(selectedMode));

  const toggleExpand = (id: number) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="courses" className=" sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
            Our Courses & Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Choose from our comprehensive range of art education programs designed to nurture creativity 
            and build professional skills at every level.
          </p>

          {/* Mode Filter */}
          {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedMode === mode.id
                    ? 'bg-gradient-to-r from-green-600 to-yellow-300 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <mode.icon size={18} />
                <span>{mode.label}</span>
              </button>
            ))}
          </div> */}
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredCourses.map((course, index) => {
            const isExpanded = expanded[course.id];
            const showFeatures = isExpanded ? course.features : course.features.slice(0, 3);
            const showDescription = isExpanded ? course.description : course.description.slice(0, 180) + (course.description.length > 180 ? '...' : '');
            return (
              <div
                key={course.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r ${course.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}>
                    {course.level}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Course Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <div className={`p-2 bg-gradient-to-r ${course.color} text-white rounded-lg`}>
                      <course.icon size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">{course.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{showDescription}</p>
                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm font-medium text-gray-800">{course.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm font-medium text-gray-800">{course.students}</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm font-medium text-gray-800">Certified</div>
                    </div>
                  </div>
                  {/* Features */}
                  <div className="mb-4 sm:mb-6 ">
                    <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {showFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {course.features.length > 3 && (
                      <button
                        className="mt-2 text-green-600 hover:underline text-xs sm:text-sm font-medium focus:outline-none"
                        onClick={() => toggleExpand(course.id)}
                      >
                        {isExpanded ? 'Show Less' : 'Know More'}
                      </button>
                    )}
                  </div>
                  {/* Modes */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-2">
                      {course.modes.map((mode) => (
                        <span
                          key={mode}
                          className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium capitalize"
                        >
                          {mode}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={`https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.name)}%20course.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base w-full sm:w-auto"
                      >
                        <span>WhatsApp</span>
                        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M20.52 3.48a11.86 11.86 0 0 0-16.76 0A11.86 11.86 0 0 0 2.3 12.1c0 1.94.5 3.83 1.47 5.49L2 22l4.56-1.73a11.86 11.86 0 0 0 5.54 1.41h.03a11.86 11.86 0 0 0 8.39-3.47 11.86 11.86 0 0 0 0-16.73ZM12.1 20.07c-1.66 0-3.29-.44-4.7-1.26l-.34-.2-2.71 1.03.97-2.64-.22-.34a8.93 8.93 0 0 1 1.37-11.17 8.9 8.9 0 0 1 6.35-2.63c2.38 0 4.61.93 6.3 2.63a8.89 8.89 0 0 1 2.61 6.3c-.01 4.92-4.01 8.93-8.93 8.93Zm5-6.6c-.27-.14-1.58-.78-1.82-.87s-.42-.13-.6.14-.69.86-.84 1.03-.31.2-.57.07a7.29 7.29 0 0 1-2.14-1.32 8.12 8.12 0 0 1-1.5-1.87c-.16-.27 0-.42.12-.56.13-.13.27-.3.4-.45.14-.15.18-.27.27-.44.09-.18.05-.33-.02-.47s-.6-1.45-.83-1.99c-.22-.52-.45-.44-.6-.45l-.5-.01a.96.96 0 0 0-.7.33c-.24.26-.92.89-.92 2.16s.94 2.5 1.08 2.68c.13.17 1.85 2.83 4.5 3.97.63.27 1.12.43 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.58-.64 1.8-1.26.22-.63.22-1.18.16-1.26-.05-.09-.25-.14-.52-.27Z" />
        </svg>
                      </a>
                      
                     
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-600 rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Artistic Journey?</h3>
            <p className="text-green-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Join thousands of students who have transformed their passion into profession. 
              Download our detailed brochure or speak with our counselors today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                Download Brochure
              </button>
              <a href='#contact' className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-sm sm:text-base">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
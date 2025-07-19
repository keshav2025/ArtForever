import React, { useState } from 'react';
import { Clock, Users, Award, BookOpen, Palette, Brush, ArrowRight, CheckCircle } from 'lucide-react';

const Courses = () => {
  const [selectedMode, setSelectedMode] = useState('all');

  const courses = [
    {
      id: 1,
      name: "Bachelor of Fine Arts (BFA)",
      description: "Comprehensive 4-year degree program covering all major art forms including painting, sculpture, digital art, and art history.",
      duration: "4 Years",
      students: "500+",
      level: "Undergraduate",
      modes: ["online", "offline", "hybrid"],
      features: [
        "Complete art foundation",
        "Portfolio development",
        "Industry internships",
        "Exhibition opportunities",
        "Career guidance"
      ],
      price: "₹25,000/year",
      image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Award,
      color: "from-green-500 to-yellow-600"
    },
    {
      id: 2,
      name: "Diploma in Fine Arts",
      description: "Professional 2-year diploma with intensive practical training in various art mediums and techniques.",
      duration: "2 Years",
      students: "300+",
      level: "Diploma",
      modes: ["online", "offline", "hybrid"],
      features: [
        "Hands-on training",
        "Professional techniques",
        "Art business basics",
        "Portfolio creation",
        "Certification"
      ],
      price: "₹15,000/year",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: BookOpen,
      color: "from-green-500 to-yellow-600"
    },
    {
      id: 3,
      name: "Wall Art Workshop",
      description: "Short-term intensive workshop focused on wall art creation, murals, and large-scale artistic installations.",
      duration: "3 Months",
      students: "150+",
      level: "Workshop",
      modes: ["online", "offline", "hybrid"],
      features: [
        "Mural techniques",
        "Color theory",
        "Design planning",
        "Live projects",
        "Certificate"
      ],
      price: "₹25,000",
      image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=600",
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

  return (
    <section id="courses" className="py-12 sm:py-20 bg-white">
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
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
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
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course, index) => (
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
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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

                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{course.description}</p>

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
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-800">{course.price}</div>
                    <div className="text-xs sm:text-sm text-gray-500">Starting from</div>
                  </div>
                  <button className="group bg-gradient-to-r from-green-600 to-yellow-400 text-white px-4 sm:px-4 py-2 sm:py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                    <span>Enroll Now</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-sm sm:text-base">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
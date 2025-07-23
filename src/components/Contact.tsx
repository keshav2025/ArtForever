import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, Clock, MessageCircle } from 'lucide-react';
import logo from '/logo.jpeg'



import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'service_rz2wv72',
      'template_nzqqryv',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: formData.message
      },
      '__43MecOZpbSzfrQx' // <-- make sure this is your Public Key, copied exactly
    )
    .then(
      (result) => {
        setSuccessMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
      },
      (error) => {
        setSuccessMessage('Failed to send message. Please try again.');
      }
    );
  }    
  
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 8882795326", "+91 85955 91719"],
      action: "tel:+91 8595591719"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["artforeverteam@gmail.com", "artistforever232@gmail.com"],
      action: "mailto:artforeverteam@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [" Khushal Chowk  , Burari , Delhi 110084"],
      action: "#"
    },
    {
      icon: Instagram,
      title: "Follow Us",
      details: ["@the_artforever", "Daily art inspiration"],
      action: "https://instagram.com/the_artforever"
    }
  ];

  const courses = [
    "Bachelor of Fine Arts (BFA)",
    "Diploma in Fine Arts",
    "Wall Art Workshop",
    "Other"
  ];
const [successMessage, setSuccessMessage] = useState('');


  return (
    <section id="contact" className="py-10 sm:py-15 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to start your artistic journey? We're here to help you every step of the way. 
            Reach out to us for course information, admissions, or any questions you might have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-3xl p-6 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Send us a Message</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            {successMessage && (
  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
    {successMessage}
  </div>
)}


            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Course Interested In
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your artistic goals and any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 sm:py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Contact Information</h3>
              <div className="grid gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-xs sm:text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-6 sm:p-8 text-white">
  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Actions</h3>
  <div className="space-y-3 sm:space-y-4">
    
    {/* WhatsApp Chat Button */}
    <button
      onClick={() =>
        window.open("https://wa.me/918595591719", "_blank")
      }
      className="w-full bg-white/20 backdrop-blur-sm text-white py-2 sm:py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
    >
      <MessageCircle size={18} />
      <span>WhatsApp Chat</span>
    </button>

    {/* Schedule Consultation Button */}
    <button
      onClick={() =>
        window.open(
          "https://wa.me/918595591719?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20consultation.",
          "_blank"
        )
      }
      className="w-full bg-white/20 backdrop-blur-sm text-white py-2 sm:py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
    >
      <Clock size={18} />
      <span>Schedule Consultation</span>
    </button>

  </div>
</div>


            {/* Office Hours */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 flex items-center space-x-2 text-sm sm:text-base">
                <Clock size={20} className="text-green-600" />
                <span>Office Hours</span>
              </h3>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        
<div className="mt-12 sm:mt-16">
  <div className="rounded-3xl overflow-hidden h-64 sm:h-96 w-full shadow-xl">
    <iframe
      title="Art Forever Location"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8223027351047!2d77.18979911508391!3d28.606252182431994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefdff497933f%3A0x9c0f870c063ff00d!2sKhushal%20Chowk%2C%20Burari%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1710844723522!5m2!1sen!2sin"
    ></iframe>
  </div>
</div>

      </div>
    </section>
  );
};

export default Contact;
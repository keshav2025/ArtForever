import React, { useState } from 'react';
import { X, Heart, Eye, Upload, Filter } from 'lucide-react';
import g1 from '../assets/g1.webp'
import g2 from '../assets/g2.webp'
import g3 from '../assets/g3.webp'
import g4 from '../assets/g4.webp'
import g5 from '../assets/g5.webp'
import g6 from '../assets/g6.webp'
import g7 from '../assets/g7.webp'
import g8 from '../assets/g8.webp'
import g9 from '../assets/g9.webp'
import g10 from '../assets/g10.webp'
import g11 from '../assets/g11.webp'
import g12 from '../assets/g12.webp'
import g13 from '../assets/g13.webp'



const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

  const [likedImages, setLikedImages] = useState(new Set());

  const categories = [
    { id: 'all', label: 'All Work', count: 24 },
    { id: 'student', label: 'Student Work', count: 12 },
    { id: 'workshops', label: 'Workshops', count: 8 },
    { id: 'events', label: 'Events', count: 4 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: g1,
      category: "student",
      title: "Abstract Expression",
      artist: "Sarah Johnson",
      likes: 45,
      views: 234
    },
    {
      id: 2,
      src: g2,
      category: "workshops",
      title: "Portrait Study",
      artist: "Mike Chen",
      likes: 67,
      views: 189
    },
    {
      id: 3,
      src: g3,
      category: "student",
      title: "Wall Mural Project",
      artist: "Emma Davis",
      likes: 89,
      views: 456
    },
    {
      id: 4,
      src: g4,
      category: "events",
      title: "Art Exhibition 2024",
      artist: "The Artforever",
      likes: 123,
      views: 678
    },
    {
      id: 5,
      src: g5,
      category: "student",
      title: "Digital Art Creation",
      artist: "Alex Rivera",
      likes: 34,
      views: 145
    },
    {
      id: 6,
      src: g6,
      category: "workshops",
      title: "Sculpture Workshop",
      artist: "Lisa Park",
      likes: 56,
      views: 267
    },
    {
      id: 7,
      src: g7,
      category: "student",
      title: "Watercolor Landscape",
      artist: "Tom Wilson",
      likes: 78,
      views: 345
    },
    {
      id: 8,
      src: g8,
      category: "events",
      title: "Student Showcase",
      artist: "The Artforever",
      likes: 91,
      views: 523
    },
    {
      id: 9,
      src: g9,
      category: "workshops",
      title: "Oil Painting Masterclass",
      artist: "Maria Garcia",
      likes: 43,
      views: 198
    },
    {
      id: 10,
      src: g10,
      category: "workshops",
      title: "Oil Painting Masterclass",
      artist: "Maria Garcia",
      likes: 43,
      views: 198
    },
    {
      id: 11,
      src: g11,
      category: "workshops",
      title: "Oil Painting Masterclass",
      artist: "Varfo",
      likes: 43,
      views: 198
    },
    {
      id: 12,
      src: g12,
      category: "workshops",
      title: "Oil Painting Masterclass",
      artist: "Maria Garcia",
      likes: 43,
      views: 198
    },
    {
      id: 13,
      src: g13,
      category: "workshops",
      title: "Water Colour",
      artist: "Varfo",
      likes: 43,
      views: 198
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const toggleLike = (imageId) => {
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId);
    } else {
      newLikedImages.add(imageId);
    }
    setLikedImages(newLikedImages);
  };

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Art Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Explore the incredible artwork created by our talented students and showcased in our workshops and events.
          </p>

          {/* Submit Art CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl p-4 sm:p-6 text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <Upload size={24} />
              <h3 className="text-lg sm:text-xl font-bold">Submit Your Art</h3>
            </div>
            <p className="text-green-100 mb-3 sm:mb-4 text-sm sm:text-base">
              Share your creative work with our community and get featured in our gallery!
            </p>
            <button className="bg-white text-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
              Upload Artwork
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-yellow-300 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <Filter size={16} />
              <span>{category.label}</span>
              <span className="bg-white/20 text-xs px-1 sm:px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm">by {image.artist}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(image.id);
                    }}
                    className={`p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      likedImages.has(image.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart size={14} fill={likedImages.has(image.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="p-1.5 sm:p-2 bg-white/20 text-white rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                  >
                    <Eye size={14} />
                  </button>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">{image.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">by {image.artist}</p>
                  </div>
                  <div className="text-right text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart size={12} />
                      <span>{image.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={12} />
                      <span>{image.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-6 rounded-b-lg">
                <h3 className="text-white text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base">by {selectedImage.artist}</p>
                <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-center space-x-1">
                    <Heart size={16} />
                    <span>{selectedImage.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={16} />
                    <span>{selectedImage.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
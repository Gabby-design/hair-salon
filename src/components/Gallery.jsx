import React, { useState } from 'react';
import { X, ZoomIn, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      category: 'color',
      title: 'Honey Balayage & Soft Waves',
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      caption: 'Hand-painted warm dimensional balayage with botanical gloss treatment.'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Tranquil Studio Sanctuary',
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      caption: 'Spacious styling lounge at 53b Euphrates Crescent, Wuse, Abuja.'
    },
    {
      id: 3,
      category: 'cuts',
      title: 'Precision Layered Haircut',
      url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      caption: 'Feathered face-framing layers and silk press finish.'
    },
    {
      id: 4,
      category: 'blowout',
      title: 'Silk Press & Glass Shine Blowout',
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      caption: 'Hydration steam press with heat-protective organic oils.'
    },
    {
      id: 5,
      category: 'bridal',
      title: 'Editorial Bridal Updo',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      caption: 'Soft romantic low bun styled for a weekend ceremony in Abuja.'
    },
    {
      id: 6,
      category: 'color',
      title: 'Caramel Highlights & Cut',
      url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      caption: 'Subtle warm ribbon highlights and healthy trim.'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-ivory-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sage-700 font-medium text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Visual Lookbook
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-espresso-900 mb-4">
            SALON <span className="italic text-sage-700">PORTFOLIO</span>
          </h2>
          <div className="w-16 h-0.5 bg-sage-500 mx-auto rounded-full mb-6"></div>
          <p className="text-espresso-700 text-base sm:text-lg font-light">
            A glimpse into our custom coloring, silk press blowouts, and calm studio environment in Wuse, Abuja.
          </p>
        </div>

        {/* Filter Pill Buttons */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {[
            { label: 'All Lookbook', value: 'all' },
            { label: 'Balayage & Color', value: 'color' },
            { label: 'Cuts & Layers', value: 'cuts' },
            { label: 'Blowout & Silk Press', value: 'blowout' },
            { label: 'Bridal Updos', value: 'bridal' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className={`px-5 py-2 text-xs font-medium rounded-full transition-all ${
                activeFilter === btn.value
                  ? 'bg-sage-700 text-white shadow-xs'
                  : 'bg-ivory-50 text-espresso-800 border border-stone-200 hover:border-sage-400 hover:bg-sage-100/50'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-stone-200/80 hover:border-sage-400 transition-all soft-card-shadow"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-ivory-200 font-semibold uppercase tracking-wider bg-sage-700/80 px-2.5 py-0.5 rounded-full">
                    {img.category}
                  </span>
                  <ZoomIn className="w-4 h-4 text-ivory-100" />
                </div>
                <h3 className="text-lg font-serif font-medium text-white mb-1">{img.title}</h3>
                <p className="text-xs text-stone-200 font-light">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-espresso-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-ivory-50 border border-stone-200 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-ivory-100 text-espresso-800 hover:text-sage-700 rounded-full border border-stone-300 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-[420px] object-cover"
            />
            <div className="p-6 bg-ivory-50 border-t border-stone-200">
              <h3 className="text-xl font-serif font-medium text-espresso-900 mb-1">{selectedImage.title}</h3>
              <p className="text-xs text-espresso-700 font-light">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getStoredServices } from '../utils/serviceStore';
import { Clock, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setServices(getStoredServices());
  }, []);

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const handleBookClick = (title) => {
    toast.info(`Selected "${title}" for booking!`);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-12">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-stone-300 pb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            The Salon Menu
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
            Services, quietly priced
          </h1>
          <p className="mt-3 max-w-xl text-sm font-medium text-[#1C1917] leading-relaxed">
            Every session at Hair Masters Salon includes a personal hair assessment, organic botanical shampoo wash, and tailored finish styling.
          </p>
        </div>

        <div>
          <Link
            to="/book"
            className="rounded-full bg-[#1C1917] px-6 py-2.5 text-xs font-semibold text-white hover:opacity-90 inline-block"
          >
            Reserve a chair →
          </Link>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pt-2">
        {[
          { label: 'All Services', value: 'all' },
          { label: 'Precision Cuts', value: 'cuts' },
          { label: 'Colour & Balayage', value: 'color' },
          { label: 'Treatments', value: 'treatments' },
          { label: 'Blowouts & Press', value: 'blowout' },
          { label: 'Bridal Updos', value: 'bridal' },
          { label: 'Kids’ Salon', value: 'kids' },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveCategory(tab.value)}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
              activeCategory === tab.value
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'bg-card text-[#1C1917] border border-stone-300 hover:border-rose'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {filteredServices.map((svc) => (
          <article
            key={svc.id}
            className="rounded-2xl bg-card p-7 border border-stone-300 shadow-xs flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-serif text-2xl text-[#1C1917] font-normal leading-tight">
                  {svc.title}
                </h2>
                <span className="shrink-0 text-lg font-bold text-[#1C1917] bg-rose/10 px-3 py-1 rounded-full border border-rose/30">
                  {svc.price}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917] mb-4">
                <Clock className="w-3.5 h-3.5 text-rose" />
                <span>Estimated Duration: {svc.duration}</span>
              </div>

              <p className="text-sm font-medium text-[#1C1917] leading-relaxed mb-4">
                {svc.description}
              </p>

              {svc.details && (
                <div className="p-3.5 rounded-xl bg-background border border-stone-200 text-xs font-normal text-[#1C1917] space-y-1">
                  <span className="font-semibold text-rose block">Stylist Note & Care:</span>
                  <p>{svc.details}</p>
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-stone-200">
              <span className="text-xs font-semibold text-[#1C1917]">Available 24/7 in Wuse, Abuja</span>
              <Link
                to={`/book?service=${svc.id}`}
                onClick={() => handleBookClick(svc.title)}
                className="text-xs font-semibold text-white bg-[#1C1917] hover:bg-stone-800 px-4 py-2 rounded-full flex items-center gap-1 shadow-xs"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

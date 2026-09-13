import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, Sun, Check, MapPin, Clock, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-300 pb-8 text-center max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
          Our Philosophy & Story
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
          Calm, refined & bespoke beauty.
        </h1>
        <p className="mt-4 text-base font-medium text-[#1C1917] leading-relaxed">
          Founded in the heart of Wuse, Abuja, Hair Masters Salon is built as a peaceful sanctuary for considered haircutting, custom balayage, and restorative hair wellness.
        </p>
      </div>

      {/* Grid Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
              alt="Hair Masters Salon Wuse Studio Interior"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 sm:right-6 bg-card border border-stone-300 p-5 rounded-xl shadow-lg max-w-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose/20 text-rose rounded-full">
                <Award className="w-5 h-5 text-rose" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-[#1C1917]">SENIOR STYLISTS</h4>
                <p className="text-xs text-[#1C1917] font-medium">Bespoke Hair & Scalp Care</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917]">
            Designed around natural light and quiet attention.
          </h2>

          <p className="text-sm sm:text-base font-medium text-[#1C1917] leading-relaxed">
            Located at <strong className="font-bold text-[#1C1917]">53b Euphrates Crescent, Wuse, Abuja</strong>, our studio offers a calm, unhurried space where your hair receives thoughtful, expert care.
          </p>

          <p className="text-sm font-medium text-[#1C1917] leading-relaxed">
            Whether you need an early-morning blowout before an executive meeting, a afternoon balayage gloss, or a late-night silk press, our studio operates <strong className="font-bold text-rose">24 hours a day, 7 days a week</strong> to accommodate your life.
          </p>

          {/* Key Amenities */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917]">
              <Check className="w-4 h-4 text-rose flex-shrink-0" />
              <span>Sulfate-Free Organic Cleansers</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917]">
              <Check className="w-4 h-4 text-rose flex-shrink-0" />
              <span>Private VIP Styling Suites</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917]">
              <Check className="w-4 h-4 text-rose flex-shrink-0" />
              <span>K18 & Olaplex Bond Care</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917]">
              <Check className="w-4 h-4 text-rose flex-shrink-0" />
              <span>Complimentary Organic Herbal Teas</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-[#1C1917] px-6 py-3 text-xs font-semibold text-white hover:bg-stone-800"
            >
              <span>Book your studio visit</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

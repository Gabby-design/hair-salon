import React from 'react';
import { Sparkles, Heart, ShieldCheck, Sun, Check, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-ivory-50 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-sage-300/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image & Atmosphere Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200/80 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Hair Masters Salon Studio Wuse Abuja"
                className="w-full h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 via-transparent to-transparent"></div>
            </div>

            {/* Overlaid Highlight Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-ivory-50 border border-stone-200 p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sage-100 text-sage-700 rounded-full font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-medium text-espresso-900">BOUTIQUE CARE</h4>
                  <p className="text-xs text-sage-700 font-light">Dedicated Senior Hair Stylists</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Narrative */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-sage-700 font-medium text-xs sm:text-sm tracking-widest uppercase mb-2 block">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-espresso-900 leading-tight mb-4">
                CALM, REFINED & <br />
                <span className="italic text-sage-700">BESPOKE BEAUTY</span>
              </h2>
              <div className="w-16 h-0.5 bg-sage-500 rounded-full mb-6"></div>
            </div>

            <p className="text-espresso-800 text-base sm:text-lg font-light leading-relaxed">
              Nestled at <strong className="font-semibold text-espresso-900">53b Euphrates Crescent in Wuse, Abuja</strong>, Hair Masters Salon was created as a peaceful sanctuary where your hair receives thoughtful, expert care.
            </p>

            <p className="text-espresso-700 text-sm sm:text-base font-light leading-relaxed">
              Whether you are preparing for a morning wedding, refreshing your balayage after a long flight, or seeking a soothing silk press late at night, our doors are open <span className="text-sage-700 font-medium">24 hours a day, 7 days a week</span>.
            </p>

            {/* Highlight Box: Stylist Expertise */}
            <div className="bg-ivory-100/70 border-l-2 border-sage-600 p-6 rounded-r-2xl space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-sage-800 font-serif font-medium text-base">
                <Heart className="w-4 h-4 text-sage-600" />
                <span>Nourishing Hair & Scalp Sanctuary</span>
              </div>
              <p className="text-espresso-700 text-xs sm:text-sm font-light leading-relaxed">
                We prioritize hair health above all else. Using sulfate-free organic botanical cleansers, keratin bond rebuilders, and gentle thermal protection, your hair leaves our studio softer, stronger, and naturally radiant.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-espresso-800 text-xs sm:text-sm font-light">
                <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>24/7 Private Hair Appointments</span>
              </div>
              <div className="flex items-center gap-2.5 text-espresso-800 text-xs sm:text-sm font-light">
                <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Organic Botanical Formulas</span>
              </div>
              <div className="flex items-center gap-2.5 text-espresso-800 text-xs sm:text-sm font-light">
                <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Private Styling Suites</span>
              </div>
              <div className="flex items-center gap-2.5 text-espresso-800 text-xs sm:text-sm font-light">
                <Check className="w-4 h-4 text-sage-600 flex-shrink-0" />
                <span>Complimentary Herbal Teas</span>
              </div>
            </div>

            {/* Pill CTA */}
            <div className="pt-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-sage-700 hover:bg-sage-800 rounded-full transition-all shadow-xs"
              >
                <span>Reserve Salon Session</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

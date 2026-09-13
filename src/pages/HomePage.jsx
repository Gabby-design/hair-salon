import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStoredServices } from '../utils/serviceStore';
import { Clock, MapPin, Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function HomePage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(getStoredServices().slice(0, 4));
  }, []);

  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute right-8 top-24 hidden lg:block" aria-hidden="true">
          <div className="h-28 w-px bg-rose/50"></div>
          <div className="mt-2 h-16 w-px bg-rose/40"></div>
          <div className="mt-2 h-10 w-px bg-rose/30"></div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-14 lg:grid-cols-12 lg:py-20">
          
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
              A full-service boutique salon
            </p>

            <h1 className="mt-6 max-w-[13ch] font-serif text-5xl leading-[1.04] sm:text-6xl text-[#1C1917]">
              Where your hair <span className="italic text-rose">feels at home.</span>
            </h1>

            <p className="mt-6 max-w-[42ch] font-medium leading-relaxed text-[#1C1917]">
              Considered cuts, dimensional colour, and restorative treatments—created in soft natural light at our calm, welcoming studio in Wuse, Abuja.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to="/book"
                className="rounded-full bg-rose px-7 py-3.5 text-sm font-semibold text-[#1C1917] shadow-sm ring-1 ring-rose/40 transition-opacity hover:opacity-85"
              >
                Book your appointment
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold text-[#1C1917] transition-colors hover:text-rose"
              >
                Explore services →
              </Link>
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#1C1917]">
              Cuts · Colour · Treatments · Bridal · Kids
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl pl-8 pb-5 lg:col-span-7 lg:pl-16">
            <div className="card-float absolute bottom-0 left-0 z-10 w-36 rounded-lg bg-rose p-2 salon-shadow sm:w-48">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                alt="Glossy curls being styled"
                width={512}
                height={640}
                className="aspect-[4/5] w-full rounded-md object-cover"
              />
            </div>

            <div className="card-float ml-auto w-[86%] max-w-md rounded-xl bg-card p-2 salon-shadow border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                alt="Hair Masters Salon's bright and welcoming interior"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Featured Services Teaser Section */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
              The Menu
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#1C1917]">
              Services, quietly priced
            </h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-[#1C1917] hover:text-rose">
            View full menu →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {services.map((svc) => (
            <div key={svc.id} className="flex items-baseline justify-between gap-4 border-b border-stone-200 py-4">
              <div>
                <h3 className="font-serif text-lg text-[#1C1917] font-semibold">{svc.title}</h3>
                <p className="mt-1 text-xs text-[#1C1917] font-normal leading-relaxed">{svc.description}</p>
              </div>
              <span className="shrink-0 text-sm font-bold text-[#1C1917]">{svc.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="bg-rose/10 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Boutique Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1917]">
            Careful hands, quiet luxury.
          </h2>
          <p className="text-sm sm:text-base text-[#1C1917] font-medium max-w-2xl mx-auto leading-relaxed">
            Located at 53b Euphrates Crescent, Wuse, Abuja. We open 24 hours daily to offer uninterrupted, private hair consultations with senior stylists.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#1C1917] px-6 py-3 text-xs font-semibold text-white hover:bg-stone-800"
            >
              <span>Learn about our story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

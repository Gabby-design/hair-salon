import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function VisitPage() {
  const addressString = "53b Euphrates Crescent, Wuse, Abuja, Federal Capital Territory, Nigeria";
  const hoursList = [
    ['Monday – Thursday', '9:00 – 18:00 (24/7 Desk Active)'],
    ['Friday', '9:00 – 20:00 (24/7 Desk Active)'],
    ['Saturday', '8:00 – 17:00 (24/7 Desk Active)'],
    ['Sunday', 'Open 24 Hours / 7 Days a week'],
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-300 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Visit Us
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
            Studio & Location
          </h1>
          <p className="mt-3 text-sm font-medium text-[#1C1917]">
            Find us in Wuse, Abuja. Walk-ins and reservations are welcomed 24 hours daily.
          </p>
        </div>

        <a
          href="tel:08173445612"
          className="rounded-full bg-[#1C1917] px-6 py-2.5 text-xs font-semibold text-white hover:opacity-90 flex items-center gap-2"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Desk: 0817 344 5612</span>
        </a>
      </div>

      {/* Main Grid */}
      <div className="grid max-w-6xl gap-12 lg:grid-cols-2 items-center">
        
        {/* Studio Photo */}
        <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
            alt="Hair Masters Salon location and interior"
            width={1024}
            height={768}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917]">
              53b Euphrates Crescent, Wuse
            </h2>
            <p className="mt-2 text-sm text-[#1C1917] font-medium leading-relaxed">
              Federal Capital Territory, Abuja, Nigeria · Corner of Euphrates Crescent & Wuse · Secure private parking available
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressString)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-rose hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Schedule Table */}
          <div className="border-t border-stone-200 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1917] mb-3">
              Studio Operating Hours
            </h3>
            <dl className="divide-y divide-stone-200 text-sm max-w-md">
              {hoursList.map(([day, time]) => (
                <div key={day} className="flex justify-between py-3">
                  <dt className="text-[#1C1917] font-medium">{day}</dt>
                  <dd className="text-[#1C1917] font-semibold text-right">{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-xs font-semibold text-[#1C1917]"
            >
              <span>Reserve your visit time</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

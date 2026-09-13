import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      {/* Decorative vertical lines on desktop */}
      <div className="pointer-events-none absolute right-8 top-24 hidden lg:block" aria-hidden="true">
        <div className="h-28 w-px bg-rose/40"></div>
        <div className="mt-2 h-16 w-px bg-rose/30"></div>
        <div className="mt-2 h-10 w-px bg-rose/20"></div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-14 lg:grid-cols-12 lg:py-20">
        
        {/* Left Text Column */}
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-rose">
            A full-service boutique salon
          </p>

          <h1 className="mt-6 max-w-[13ch] font-serif text-5xl leading-[1.04] sm:text-6xl text-ink">
            Where your hair <span className="italic text-rose">feels at home.</span>
          </h1>

          <p className="mt-6 max-w-[42ch] font-light leading-relaxed text-ink-soft">
            Considered cuts, dimensional colour, and restorative treatments—created in soft natural light at our calm, welcoming studio.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#booking"
              className="rounded-full bg-rose px-7 py-3.5 text-sm font-medium text-ink shadow-sm ring-1 ring-rose/40 transition-opacity hover:opacity-85"
            >
              Book your appointment
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Explore services
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-ink-soft/70">
            Cuts · Colour · Treatments · Bridal · Kids
          </p>
        </div>

        {/* Right Floating Image Composition */}
        <div className="relative mx-auto w-full max-w-xl pl-8 pb-5 lg:col-span-7 lg:pl-16">
          {/* Overlapping small floating card */}
          <div className="card-float absolute bottom-0 left-0 z-10 w-36 rounded-lg bg-rose p-2 salon-shadow sm:w-48">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
              alt="Glossy curls being styled"
              width={512}
              height={640}
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>

          {/* Main larger card */}
          <div className="card-float ml-auto w-[86%] max-w-md rounded-xl bg-card/60 p-2 salon-shadow border border-ink/5">
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
  );
}

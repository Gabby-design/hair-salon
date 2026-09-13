import React from 'react';

export default function LocationHours() {
  const hoursList = [
    ['Monday – Thursday', '9:00 – 18:00'],
    ['Friday', '9:00 – 20:00'],
    ['Saturday', '8:00 – 17:00'],
    ['Sunday', 'Closed (24/7 Desk Active)'],
  ];

  return (
    <section id="location" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 bg-background">
      {/* Illustrated Studio Map / Location Image */}
      <img
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
        alt="Hair Masters Salon location and interior"
        width={1024}
        height={768}
        loading="lazy"
        className="aspect-[4/3] w-full rounded-xl object-cover salon-shadow border border-ink/5"
      />

      {/* Location Details & Hours */}
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-rose">
          Visit us
        </p>

        <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink">
          53b Euphrates Crescent, Wuse
        </h2>

        <p className="mt-2 text-sm text-ink-soft font-light">
          Corner of Euphrates Crescent & Wuse · 24-hour appointment desk · phone 0817 344 5612
        </p>

        {/* Opening Hours Table */}
        <dl className="mt-8 max-w-sm divide-y divide-ink/10 text-sm">
          {hoursList.map(([day, time]) => (
            <div key={day} className="flex justify-between py-3">
              <dt className="text-ink-soft font-light">{day}</dt>
              <dd className={time.includes('Closed') ? 'text-ink-soft font-light' : 'text-ink font-medium'}>
                {time}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

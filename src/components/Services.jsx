import React from 'react';

export default function Services() {
  const menuItems = [
    [
      'Precision Cuts & Styling',
      'Consultation, wash and tailored finish',
      'from ₦15,000',
    ],
    [
      'Colour & Highlights',
      'Dimensional colour and soft-glow formulas',
      'from ₦35,000',
    ],
    [
      'Keratin & Hair Treatments',
      'Smoothing, hydration and scalp rituals',
      'from ₦25,000',
    ],
    [
      'Blowouts & Finishing',
      'Soft movement with a lasting finish',
      'from ₦18,000',
    ],
    [
      'Bridal & Special Occasion',
      'Trials and day-of styling available',
      'from ₦40,000',
    ],
    [
      'Kids’ Cuts',
      'Gentle, patient and unhurried',
      'from ₦10,000',
    ],
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 bg-background">
      {/* Header */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-rose">
            The menu
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl text-ink">
            Services, quietly priced
          </h2>
        </div>

        <a
          href="#booking"
          className="hidden text-sm font-medium text-ink-soft hover:text-ink sm:block transition-colors"
        >
          Reserve a chair →
        </a>
      </div>

      {/* Menu Grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-16 md:grid-cols-2">
        {menuItems.map(([title, desc, price]) => (
          <article
            key={title}
            className="flex items-baseline justify-between gap-5 border-b border-ink/10 py-5"
          >
            <div>
              <h3 className="font-serif text-xl text-ink">{title}</h3>
              <p className="mt-1 text-sm font-light text-ink-soft">{desc}</p>
            </div>
            <span className="shrink-0 text-sm tabular-nums text-ink-soft font-light">
              {price}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

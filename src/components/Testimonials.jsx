import React, { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    [
      "The most restorative hour I’ve had all year. My colour finally feels like me.",
      "Maren · Colour & highlights",
    ],
    [
      "They listened more than they talked. My cut has never held so beautifully.",
      "Devon · Cut & styling",
    ],
    [
      "Calm, lovely, and my daughter actually enjoyed her first salon visit.",
      "Priya · Kids’ cut",
    ],
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev + testimonials.length - 1) % testimonials.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20 bg-background">
      {/* Header with Navigation Controls */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-rose">
            Client notes
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl text-ink">
            In their words
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="grid size-10 place-items-center rounded-full ring-1 ring-ink/15 transition-colors hover:bg-ink/5 text-ink"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="grid size-10 place-items-center rounded-full ring-1 ring-ink/15 transition-colors hover:bg-ink/5 text-ink"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map(([quote, author], idx) => (
          <figure
            key={author}
            className={`rounded-xl bg-card/45 p-7 ring-1 ring-ink/8 transition-opacity duration-300 ${
              idx === activeIndex ? 'opacity-100 ring-rose/40' : 'opacity-55 hover:opacity-80'
            }`}
          >
            <blockquote className="font-serif text-xl leading-snug text-ink">
              “{quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-ink-soft font-light">
              {author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

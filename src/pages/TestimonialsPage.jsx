import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote: "The most restorative hour I’ve had all year. My colour finally feels like me.",
      author: "Maren · Colour & highlights",
      location: "Maitama, Abuja",
      rating: 5,
    },
    {
      id: 2,
      quote: "They listened more than they talked. My cut has never held so beautifully.",
      author: "Devon · Cut & styling",
      location: "Wuse 2, Abuja",
      rating: 5,
    },
    {
      id: 3,
      quote: "Calm, lovely, and my daughter actually enjoyed her first salon visit.",
      author: "Priya · Kids’ cut",
      location: "Jabi, Abuja",
      rating: 5,
    },
    {
      id: 4,
      quote: "Hair Masters Salon is my favorite sanctuary in Abuja. Getting a silk press at 10:00 PM after a flight was seamless and so relaxing.",
      author: "Amina Bello · Silk press blowout",
      location: "Asokoro, Abuja",
      rating: 5,
    },
    {
      id: 5,
      quote: "The keratin smoothing treatment restored my curl pattern without damaging heat. Truly world-class salon expertise in Wuse.",
      author: "Zainab Mohammed · Keratin treatment",
      location: "Central Area, Abuja",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev + testimonials.length - 1) % testimonials.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 bg-background space-y-16">
      
      {/* Header */}
      <div className="border-b border-stone-300 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            Client Notes
          </p>
          <h1 className="mt-2 font-serif text-4xl sm:text-6xl text-[#1C1917] font-normal">
            In their words
          </h1>
          <p className="mt-3 text-sm font-medium text-[#1C1917]">
            Quiet notes and reviews from guests about their time in our styling chairs.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="grid size-11 place-items-center rounded-full ring-1 ring-ink/20 transition-colors hover:bg-ink/5 text-[#1C1917] font-bold"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="grid size-11 place-items-center rounded-full ring-1 ring-ink/20 transition-colors hover:bg-ink/5 text-[#1C1917] font-bold"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* Featured Testimonial Hero Slider */}
      <div className="rounded-2xl bg-card p-8 sm:p-12 border border-stone-300 shadow-xs relative">
        <Quote className="w-12 h-12 text-rose/30 absolute top-6 right-6 pointer-events-none" />
        
        <div className="flex items-center gap-1 mb-4 text-rose">
          {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-rose text-rose" />
          ))}
        </div>

        <blockquote className="font-serif text-2xl sm:text-4xl text-[#1C1917] leading-snug mb-6 font-normal">
          “{testimonials[activeIndex].quote}”
        </blockquote>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-stone-200 pt-4">
          <div>
            <span className="font-semibold text-[#1C1917] text-base block font-serif">
              {testimonials[activeIndex].author}
            </span>
            <span className="text-xs text-[#1C1917] font-medium">
              {testimonials[activeIndex].location}
            </span>
          </div>

          <Link
            to="/book"
            className="text-xs font-semibold text-[#1C1917] hover:text-rose underline"
          >
            Book your session →
          </Link>
        </div>
      </div>

      {/* All Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            onClick={() => setActiveIndex(idx)}
            className={`cursor-pointer rounded-2xl bg-card p-6 border transition-all ${
              idx === activeIndex
                ? 'border-rose ring-2 ring-rose/30 shadow-md'
                : 'border-stone-300 hover:border-stone-400'
            }`}
          >
            <div className="flex items-center gap-1 mb-3 text-rose">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-rose text-rose" />
              ))}
            </div>
            <p className="font-serif text-lg text-[#1C1917] leading-snug mb-4 font-normal">
              “{t.quote}”
            </p>
            <p className="text-xs font-semibold text-[#1C1917]">
              {t.author}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

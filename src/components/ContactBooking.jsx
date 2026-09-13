import React, { useState } from 'react';

export default function ContactBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Precision cut & styling',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Submitted:', formData);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Hair Masters Salon! I would like to book a visit.\nName: ${formData.name || 'Client'}\nService: ${formData.service}\nDate: ${formData.date} ${formData.time}\nPhone: ${formData.phone}`
  );
  const whatsappUrl = `https://wa.me/2348173445612?text=${whatsappMessage}`;

  return (
    <section id="booking" className="bg-rose/10">
      <div className="mx-auto max-w-3xl px-6 py-20">
        
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-rose">
          Reserve
        </p>

        <h2 className="mt-3 font-serif text-4xl text-ink">
          Book your appointment
        </h2>

        <p className="mt-3 font-light text-ink-soft">
          Tell us what you have in mind. We’ll personally confirm your visit at 53b Euphrates Crescent, Wuse, Abuja.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl bg-card/60 p-8 ring-1 ring-ink/8 animate-fadeIn">
            <h3 className="font-serif text-2xl text-ink">
              Thank you—we’ll be in touch soon.
            </h3>
            <p className="mt-2 text-sm text-ink-soft font-light">
              Your appointment request for <strong className="text-ink font-medium">{formData.service}</strong> has been noted. We will confirm your session shortly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-rose px-6 py-2.5 text-xs font-medium text-ink transition-opacity hover:opacity-85"
              >
                Chat on WhatsApp →
              </a>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-ink-soft hover:text-ink underline"
              >
                Book another visit
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            
            {/* Name */}
            <label className="block text-sm">
              <span className="text-ink-soft font-light">Name *</span>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="salon-input"
                placeholder="Your name"
              />
            </label>

            {/* Email / Phone */}
            <label className="block text-sm">
              <span className="text-ink-soft font-light">Email or Phone *</span>
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="salon-input"
                placeholder="you@email.com or 0817 344 5612"
              />
            </label>

            {/* Service */}
            <label className="block text-sm sm:col-span-2">
              <span className="text-ink-soft font-light">Service</span>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="salon-input"
              >
                <option>Precision cut & styling</option>
                <option>Colour & highlights</option>
                <option>Keratin or hair treatment</option>
                <option>Blowout</option>
                <option>Bridal & special occasion</option>
                <option>Kids’ cut</option>
              </select>
            </label>

            {/* Date */}
            <label className="block text-sm">
              <span className="text-ink-soft font-light">Preferred date *</span>
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="salon-input"
              />
            </label>

            {/* Time */}
            <label className="block text-sm">
              <span className="text-ink-soft font-light">Preferred time *</span>
              <input
                required
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="salon-input"
              />
            </label>

            {/* Notes */}
            <label className="block text-sm sm:col-span-2">
              <span className="text-ink-soft font-light">Notes (optional)</span>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="salon-input resize-none"
                placeholder="Anything we should know"
              />
            </label>

            {/* Submit & Quick Links */}
            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition-opacity hover:opacity-85"
              >
                Request this time
              </button>

              <div className="flex items-center gap-4 text-xs text-ink-soft">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink underline">
                  WhatsApp Chat
                </a>
                <span>·</span>
                <a href="tel:08173445612" className="hover:text-ink underline">
                  Call Desk 0817 344 5612
                </a>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}

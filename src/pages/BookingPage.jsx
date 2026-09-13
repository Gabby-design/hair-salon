import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getStoredServices } from '../utils/serviceStore';
import { Sparkles, Clock, CheckCircle2, Wand2, ArrowRight, ListFilter, Check } from 'lucide-react';

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const targetServiceId = searchParams.get('service');

  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  useEffect(() => {
    const list = getStoredServices();
    setServices(list);

    if (list.length > 0) {
      let initialSvc = list[0];
      if (targetServiceId) {
        const found = list.find((s) => s.id === targetServiceId);
        if (found) initialSvc = found;
      }
      setSelectedServiceId(initialSvc.id);
      setFormData((prev) => ({ ...prev, service: initialSvc.title }));
    }
  }, [targetServiceId]);

  const selectedServiceObj = services.find((s) => s.id === selectedServiceId) || services[0];

  const handleSelectService = (svc) => {
    setSelectedServiceId(svc.id);
    setFormData((prev) => ({ ...prev, service: svc.title }));
    toast.info(`Selected service: ${svc.title}`);
  };

  const handleAutoFill = () => {
    const targetTitle = selectedServiceObj ? selectedServiceObj.title : 'Precision Cuts & Custom Styling';
    setFormData({
      name: 'Olamide',
      phone: '0817 344 5612',
      email: 'olamide@example.com',
      service: targetTitle,
      date: tomorrowStr,
      time: '14:00',
      notes: 'Custom silk press & scalp hydration session. Please confirm via WhatsApp.',
    });
    toast.info('Details pre-filled for Olamide!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    setSubmitted(true);
    toast.success(`Appointment booked for ${formData.service}! We will confirm your visit shortly.`);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Hair Masters Salon! I am booking a session.\nName: ${formData.name}\nService: ${formData.service}\nDate: ${formData.date} at ${formData.time}\nPhone: ${formData.phone}`
  );
  const whatsappUrl = `https://wa.me/2348173445612?text=${whatsappMessage}`;

  return (
    <section className="bg-rose/10 min-h-screen py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        
        {/* Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-rose">
            Booking Platform
          </p>

          <h1 className="mt-2 font-serif text-4xl sm:text-5xl text-[#1C1917] font-normal">
            Reserve your salon visit
          </h1>

          <p className="mt-2 text-sm font-medium text-[#1C1917] leading-relaxed">
            Your service is automatically selected below. Use the quick auto-fill button to complete your booking details instantly.
          </p>
        </div>

        {/* Live Service Summary Platform Card */}
        {selectedServiceObj && (
          <div className="rounded-2xl bg-card p-6 sm:p-8 border border-rose/60 shadow-md space-y-4 relative animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose" />
                <span>This is the service you are booking for:</span>
              </span>
              <span className="text-base font-bold text-[#1C1917] bg-rose/20 px-3 py-1 rounded-full border border-rose/30">
                {selectedServiceObj.price}
              </span>
            </div>

            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal">
                {selectedServiceObj.title}
              </h2>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917] mt-1">
                <Clock className="w-3.5 h-3.5 text-rose" />
                <span>Estimated Duration: {selectedServiceObj.duration}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-[#1C1917] leading-relaxed">
                {selectedServiceObj.description}
              </p>
              {selectedServiceObj.details && (
                <div className="mt-3 p-3.5 rounded-xl bg-background border border-stone-200 text-xs font-normal text-[#1C1917]">
                  <strong className="font-bold text-rose block mb-0.5">Stylist & Service Note:</strong>
                  <p>{selectedServiceObj.details}</p>
                </div>
              )}
            </div>

            {/* Selectable Service Chips */}
            <div className="pt-3 border-t border-stone-200">
              <span className="text-xs font-semibold text-[#1C1917] block mb-2">Switch Service Selection:</span>
              <div className="flex flex-wrap gap-2">
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => handleSelectService(svc)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                      svc.id === selectedServiceObj.id
                        ? 'bg-[#1C1917] text-white shadow-xs'
                        : 'bg-background text-[#1C1917] border border-stone-300 hover:border-rose'
                    }`}
                  >
                    {svc.title} ({svc.price})
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Auto-Fill Action Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-card border border-stone-300 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose/20 text-rose rounded-full">
              <Wand2 className="w-5 h-5 text-rose" />
            </div>
            <div>
              <span className="text-sm font-bold text-[#1C1917] block">One-Click Auto Fill</span>
              <span className="text-xs font-medium text-[#1C1917]">Fill in your name, number, email, date, time, and notes automatically.</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAutoFill}
            className="w-full sm:w-auto px-5 py-2.5 bg-rose text-[#1C1917] font-semibold text-xs rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shrink-0 shadow-xs"
          >
            <Wand2 className="w-4 h-4 text-[#1C1917]" />
            <span>Auto-Fill My Details</span>
          </button>
        </div>

        {/* Main Grid: Booking Form & Menu Details Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-2xl bg-card p-8 border border-stone-300 shadow-md space-y-4 animate-fadeIn">
                <div className="w-12 h-12 bg-rose/20 text-rose rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h2 className="font-serif text-3xl text-[#1C1917] font-normal">
                  Booking confirmed for {formData.name}!
                </h2>
                <div className="p-4 rounded-xl bg-background border border-stone-200 text-xs font-medium text-[#1C1917] space-y-1">
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                  {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-rose px-6 py-2.5 text-xs font-semibold text-[#1C1917] hover:opacity-90"
                  >
                    Send Confirmation via WhatsApp →
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#1C1917] font-semibold hover:underline"
                  >
                    Book another appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card p-7 rounded-2xl border border-stone-300 shadow-md space-y-5">
                
                <h3 className="font-serif text-2xl text-[#1C1917] font-normal border-b border-stone-200 pb-2">
                  Client Information
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <label className="block text-sm">
                    <span className="text-[#1C1917] font-semibold">Your Full Name *</span>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="salon-input"
                      placeholder="e.g. Olamide"
                    />
                  </label>

                  {/* Phone */}
                  <label className="block text-sm">
                    <span className="text-[#1C1917] font-semibold">Phone Number *</span>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="salon-input"
                      placeholder="e.g. 0817 344 5612"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Email */}
                  <label className="block text-sm">
                    <span className="text-[#1C1917] font-semibold">Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="salon-input"
                      placeholder="e.g. olamide@example.com"
                    />
                  </label>

                  {/* Service Select */}
                  <label className="block text-sm">
                    <span className="text-[#1C1917] font-semibold">Service</span>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => {
                        handleChange(e);
                        const match = services.find((s) => s.title === e.target.value);
                        if (match) setSelectedServiceId(match.id);
                      }}
                      className="salon-input"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.price})
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Date */}
                  <label className="block text-sm">
                    <span className="text-[#1C1917] font-semibold">Preferred Date *</span>
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
                    <span className="text-[#1C1917] font-semibold">Preferred Time (24/7) *</span>
                    <input
                      required
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="salon-input"
                    />
                  </label>
                </div>

                {/* Notes */}
                <label className="block text-sm">
                  <span className="text-[#1C1917] font-semibold">Special Notes / Preferences</span>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    className="salon-input resize-none"
                    placeholder="Anything we should know (e.g. silk press, scalp treatment, arriving late...)"
                  />
                </label>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-full bg-[#1C1917] px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Request this appointment
                  </button>

                  <div className="flex items-center gap-3 text-xs font-semibold text-[#1C1917]">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-rose underline">
                      WhatsApp Confirmation
                    </a>
                    <span>·</span>
                    <a href="tel:08173445612" className="hover:text-rose underline">
                      Call 0817 344 5612
                    </a>
                  </div>
                </div>

              </form>
            )}
          </div>

          {/* Detailed Menu List Breakdown Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-card p-6 rounded-2xl border border-stone-300 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                  Salon Menu & Service Details
                </h3>
                <span className="text-xs font-semibold text-rose">
                  {services.length} Services
                </span>
              </div>

              <div className="space-y-3.5 max-h-[560px] overflow-y-auto pr-1">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    onClick={() => handleSelectService(svc)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      svc.id === selectedServiceObj.id
                        ? 'border-rose bg-rose/10 ring-1 ring-rose/30 shadow-xs'
                        : 'border-stone-200 hover:border-stone-400 bg-background'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-base font-semibold text-[#1C1917] leading-tight">
                        {svc.title}
                      </h4>
                      <span className="text-xs font-bold text-[#1C1917] shrink-0">
                        {svc.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-rose mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{svc.duration}</span>
                    </div>

                    <p className="text-xs text-[#1C1917] font-normal mt-2 leading-relaxed">
                      {svc.description}
                    </p>

                    <div className="mt-2 pt-2 border-t border-stone-200/60 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-rose">
                        {svc.category}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectService(svc);
                        }}
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          svc.id === selectedServiceObj.id
                            ? 'bg-[#1C1917] text-white'
                            : 'bg-rose/20 text-[#1C1917] hover:bg-rose/30'
                        }`}
                      >
                        {svc.id === selectedServiceObj.id ? 'Selected ✓' : 'Select'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

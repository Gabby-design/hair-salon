const STORAGE_KEY = 'hair_masters_services_v1';

export const DEFAULT_SERVICES = [
  {
    id: 'cut-style',
    title: 'Precision Cuts & Custom Styling',
    category: 'cuts',
    price: '₦15,000',
    duration: '60 mins',
    description: 'Personalized hair mapping consultation, clarifying botanical shampoo, precision cut, and customized thermal finishing styling.',
    details: 'Includes scalp analysis, wash with sulfate-free organic cleansers, blow dry, and custom iron styling. Perfect for maintaining hair structure or a fresh new look.',
  },
  {
    id: 'balayage',
    title: 'Dimensional Balayage & Highlights',
    category: 'color',
    price: '₦35,000',
    duration: '120 mins',
    description: 'Hand-painted sun-kissed color technique, gloss toner, and bond-building treatment for effortless radiance.',
    details: 'Custom color placement tailored to your skin tone and natural hair movement. Includes Olaplex/K18 bond protection to prevent damage.',
  },
  {
    id: 'keratin',
    title: 'Keratin & Deep Moisture Hydration',
    category: 'treatments',
    price: '₦25,000',
    duration: '90 mins',
    description: 'Intense smoothing formula that eliminates frizz, restores structural elasticity, and adds reflective glass shine.',
    details: 'Deeply infuses natural keratin protein into the hair cuticle. Lasts up to 12 weeks with zero harsh formaldehyde fumes.',
  },
  {
    id: 'blowout',
    title: 'Signature Blowout & Silk Press',
    category: 'blowout',
    price: '₦18,000',
    duration: '45 mins',
    description: 'Luxurious scalp wash, heat protectant infusion, volume blowout, or silky smooth flat iron finish.',
    details: 'Deep conditioning steam treatment followed by lightweight argon oil sealant for bouncy, long-lasting silk press with natural movement.',
  },
  {
    id: 'bridal',
    title: 'Bridal & Special Occasion Updo',
    category: 'bridal',
    price: '₦40,000',
    duration: '90 mins',
    description: 'Elegant event styling, veil pin placement, red carpet waves, or high fashion editorial updos.',
    details: 'Comprehensive trial option available. Includes long-wear humidity hold spray and accessory placement for weddings, galas, and celebrations.',
  },
  {
    id: 'kids',
    title: 'Kids’ Salon Cut & Styling',
    category: 'kids',
    price: '₦10,000',
    duration: '45 mins',
    description: 'Gentle, patient, and unhurried salon haircut experience tailored for young ladies and gentlemen.',
    details: 'Calm and kid-friendly environment with gentle scalp wash, fun styling, and a complimentary healthy juice treat.',
  },
];

export const getStoredServices = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load services from localStorage', e);
  }
  return DEFAULT_SERVICES;
};

export const saveServices = (services) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
  } catch (e) {
    console.error('Failed to save services to localStorage', e);
  }
};

export const addService = (newService) => {
  const current = getStoredServices();
  const updated = [
    ...current,
    {
      ...newService,
      id: 'service-' + Date.now(),
    },
  ];
  saveServices(updated);
  return updated;
};

export const updateService = (id, updatedFields) => {
  const current = getStoredServices();
  const updated = current.map((svc) =>
    svc.id === id ? { ...svc, ...updatedFields } : svc
  );
  saveServices(updated);
  return updated;
};

export const deleteService = (id) => {
  const current = getStoredServices();
  const updated = current.filter((svc) => svc.id !== id);
  saveServices(updated);
  return updated;
};

export const resetServicesToDefault = () => {
  saveServices(DEFAULT_SERVICES);
  return DEFAULT_SERVICES;
};

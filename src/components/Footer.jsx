import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Studio', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Visit', path: '/visit' },
    { name: 'Book', path: '/book' },
  ];

  return (
    <footer className="border-t border-ink/15 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        
        {/* Brand Logo */}
        <Link to="/" className="font-serif text-xl text-[#1C1917] font-normal">
          Hair Masters <span className="italic text-rose">Salon</span>
        </Link>

        {/* Footer Links */}
        <nav className="flex flex-wrap items-center gap-6 text-sm text-[#1C1917] font-medium" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-rose transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to="/admin" className="text-rose font-semibold flex items-center gap-1 hover:underline">
            <Settings className="w-3.5 h-3.5" />
            <span>Owner Portal</span>
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-[#1C1917] font-medium">
          © 2026 Hair Masters Salon · 53b Euphrates Crescent, Wuse, Abuja
        </p>

      </div>
    </footer>
  );
}

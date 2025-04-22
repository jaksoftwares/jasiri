"use client";
import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand and tagline */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500">Jasiri</h2>
          <p className="mt-2 text-sm">Pitch Bold. Win Big.</p>
          <p className="mt-4 text-gray-400 text-sm">
            Helping visionaries turn ideas into fundable, winning pitches.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/get-started" className="hover:text-white">Get Started</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={16} /> <a href="mailto:hello@jasiri.co.ke">hello@jasiri.co.ke</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> <a href="tel:+254712345678">+254 712 345 678</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} /> <a href="#" className="hover:text-white">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jasiri. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

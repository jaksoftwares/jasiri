'use client';

import { Presentation, FileText, Users2, Palette, Gem, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We turn bold ideas into brilliant, pitch-ready presentations. Let’s make your vision investor-ready.
        </p>
      </section>

      {/* Core Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">What We Offer</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="text-indigo-600 mb-4">
                  <service.icon size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Flexible & Affordable Pricing</h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Whether you’re bootstrapping a dream or scaling a startup, we’ve got a package that fits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {pricing.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="font-bold text-indigo-600">KES {item.priceRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Gem size={36} className="text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Why Jasiri?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We combine storytelling, design, and strategy to help you pitch with purpose. Every service is tailored
            to your goals and audience.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Let’s work together to craft a pitch that wins.</p>
        <Link
          href="/get-started"
          className="inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
        >
          Let’s Build Your Pitch
          <ChevronRight className="ml-2" />
        </Link>
      </section>
    </div>
  );
}

// Data Arrays
const services = [
  {
    title: 'Pitch Deck Creation',
    description: 'Visually powerful decks tailored for investors, grants, or competitions.',
    icon: Presentation,
  },
  {
    title: 'Proposal Writing',
    description: 'Well-structured business plans, grant proposals, and concept notes.',
    icon: FileText,
  },
  {
    title: 'Pitch Coaching',
    description: 'Live or virtual sessions with real-time feedback and mock pitches.',
    icon: Users2,
  },
  {
    title: 'Brand Identity for Projects',
    description: 'Logos, colors, and one-pagers to help your idea stand out.',
    icon: Palette,
  },
  {
    title: 'Mentorship & Strategy',
    description: 'One-on-one sessions with mentors & strategists for your startup journey.',
    icon: Gem,
  },
];

const pricing = [
  {
    name: 'Pitch Deck Design',
    description: 'Custom-designed decks that communicate clearly and creatively.',
    priceRange: '2,000 – 5,000',
  },
  {
    name: 'Proposal Writing',
    description: 'Grant-winning proposals, tailored to your funding opportunity.',
    priceRange: '3,000 – 7,500',
  },
  {
    name: 'Pitch Coaching Session',
    description: 'Refine your delivery with expert feedback.',
    priceRange: '1,000/hr',
  },
  {
    name: 'Complete Pitch Kit',
    description: 'Full deck, proposal, coaching & branding all in one.',
    priceRange: '8,000 – 15,000',
  },
];

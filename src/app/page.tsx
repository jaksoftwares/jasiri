'use client';

import Link from 'next/link';
import { Lightbulb, FileText, Presentation, Brush, Users } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Your Idea Into a <span className="text-yellow-300">Winning Pitch</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Jasiri helps you craft compelling, fundable, and investor-ready projects.
          </p>
          <Link
            href="/get-started"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Let’s Build Your Pitch
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">About Jasiri</h2>
          <p className="text-gray-700 text-lg">
            We are a creative agency dedicated to helping visionaries pitch with confidence.
            Whether you&apos;re a student, entrepreneur, or NGO, we help transform your ideas into
            bold, bankable projects through design, strategy, and storytelling.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <ServiceCard
              icon={<Presentation size={36} />}
              title="Pitch Deck Creation"
              description="Custom PowerPoint & Google Slide decks tailored to your audience."
            />
            <ServiceCard
              icon={<FileText size={36} />}
              title="Proposal Writing"
              description="Grants, business plans & concept papers crafted for success."
            />
            <ServiceCard
              icon={<Users size={36} />}
              title="Pitch Training"
              description="1-on-1 virtual coaching, mock pitch sessions, and feedback."
            />
            <ServiceCard
              icon={<Brush size={36} />}
              title="Brand Identity"
              description="Project logos, color schemes & sleek one-page websites."
            />
            <ServiceCard
              icon={<Lightbulb size={36} />}
              title="Mentorship & Strategy"
              description="Link up with mentors & craft your startup growth gameplan."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Pitch Bold & Win Big?</h2>
        <p className="text-lg mb-6">Let Jasiri be your secret weapon for winning grants, funding, and attention.</p>
        <Link
          href="/get-started"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
}

// ServiceCard Component
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { Users2, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Jasiri</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Bold ideas deserve bold pitches. We&apos;re here to help you pitch smarter, stronger, and more creatively.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Target size={40} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            To empower visionaries with bold, brilliant, and bankable pitches. Whether you&apos;re starting from scratch
            or refining an existing idea, we help you shine where it matters — on the pitch.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4">
              Jasiri was born from a single insight — that great ideas often struggle to get the attention they
              deserve. We set out to change that by helping dreamers, students, and hustlers tell their stories
              clearly, confidently, and creatively.
            </p>
            <p className="text-gray-600">
              Since our inception, we’ve helped transform countless raw ideas into grant-winning proposals,
              investor-ready decks, and startup launchpads. We’re not just pitch experts — we’re your partners in
              boldness.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/story.jpg" // replace with real image later
              alt="Our Story"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <Users2 size={36} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-indigo-700">Meet the Team</h2>
          <p className="text-gray-600 mt-2">The minds behind Jasiri’s bold mission.</p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <TeamCard
            name="Faith Mwangi"
            role="Founder & Pitch Strategist"
            image="/images/team1.jpg"
          />
          <TeamCard
            name="Brian Otieno"
            role="Design Lead"
            image="/images/team2.jpg"
          />
          <TeamCard
            name="Linet Akinyi"
            role="Proposal & Grant Expert"
            image="/images/team3.jpg"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 text-center px-6">
        <Sparkles size={36} className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-lg mb-6">Got an idea worth pitching? We’ll help you win the room.</p>
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

// TeamCard component
function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
}

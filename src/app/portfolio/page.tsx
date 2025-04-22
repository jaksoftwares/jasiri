'use client';

import { Users, FolderKanban, Quote, Rocket, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Speaks Volumes</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          From dorm-room ideas to award-winning pitches — here’s how Jasiri has transformed bold visions into reality.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-xl border hover:shadow-lg transition"
              >
                <div className="mb-3 text-indigo-600">
                  <project.icon size={36} />
                </div>
                <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 italic">Result: {project.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">What Clients Say</h2>
          <div className="space-y-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row items-start gap-4"
              >
                <Quote className="text-indigo-600 min-w-[24px]" />
                <div>
                  <p className="text-gray-700 italic">“{t.message}”</p>
                  <p className="text-sm text-gray-500 mt-2 font-semibold">— {t.name}, {t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Rocket size={40} className="text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Impact by the Numbers</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Jasiri has helped students, startups, and organizations secure funding, win grants, and gain recognition.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg font-semibold text-indigo-700">
            <div>
              <p className="text-4xl mb-1">70+</p>
              Pitch Decks Delivered
            </div>
            <div>
              <p className="text-4xl mb-1">25+</p>
              Funded Startups
            </div>
            <div>
              <p className="text-4xl mb-1">100%</p>
              Client Satisfaction
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Want to Be Our Next Success Story?</h2>
        <p className="text-lg mb-6">Let’s build something amazing together.</p>
        <Link
          href="/get-started"
          className="inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
        >
          Get Started
          <ChevronRight className="ml-2" />
        </Link>
      </section>
    </div>
  );
}

// Sample projects
const projects = [
  {
    name: 'EcoGreen AgriTech',
    description: 'Helped a university student develop a pitch that won a 1M KES grant.',
    result: 'Secured Funding & Mentorship',
    icon: FolderKanban,
  },
  {
    name: 'VibeCheck App',
    description: 'Built the entire pitch kit for an entertainment app launched on Play Store.',
    result: '1000+ downloads in 3 months',
    icon: Users,
  },
  {
    name: 'AfriEdu Initiative',
    description: 'Developed a grant-winning proposal for an education NGO.',
    result: 'Received 2-year donor funding',
    icon: FileText,
  },
];

// Sample testimonials
const testimonials = [
  {
    name: 'Grace M.',
    role: 'Startup Founder',
    message: 'Jasiri turned my chaotic idea into a clear, exciting pitch. I walked into my pitch session with confidence — and walked out with funding!',
  },
  {
    name: 'Kevin O.',
    role: 'University Innovator',
    message: 'Their mentorship and pitch design helped us win first place in our innovation challenge!',
  },
  {
    name: 'Linda N.',
    role: 'NGO Program Lead',
    message: 'Our proposal had never received feedback this good. Jasiri gets it right every time.',
  },
];

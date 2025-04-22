'use client';

import { Mail, Instagram, Phone, Send, User } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Normally you'd handle this with an API or backend service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Jasiri</h1>
        <p className="text-lg max-w-xl mx-auto">Let’s connect — we’d love to hear about your idea and how we can help bring it to life.</p>
      </section>

      {/* Contact Details & Form */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Reach Us Directly</h2>

          <div className="flex items-center gap-4">
            <Mail className="text-indigo-600" size={24} />
            <a href="mailto:hello@jasiri.agency" className="text-lg hover:underline">
              hello@jasiri.agency
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-indigo-600" size={24} />
            <a href="https://wa.me/254712345678" target="_blank" className="text-lg hover:underline">
              WhatsApp: +254 712 345 678
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Instagram className="text-indigo-600" size={24} />
            <a href="https://instagram.com/jasiri.agency" target="_blank" className="text-lg hover:underline">
              @jasiri.agency
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Jasiri is proudly based in Kenya 🌍 — working with bold minds everywhere, online.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white border shadow-md rounded-xl p-8">
          {submitted ? (
            <div className="text-center">
              <Send size={48} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600">Thanks for reaching out — we’ll respond soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Your Name</label>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <User size={20} className="text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Brian Odhiambo"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Your Email</label>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <Mail size={20} className="text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us how we can help you pitch bold."
                  className="w-full border rounded-lg px-3 py-2 outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

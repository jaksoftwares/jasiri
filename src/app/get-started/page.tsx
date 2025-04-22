'use client';

import { Mail, User, CheckCircle2, MessageSquare, Coins, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you’d typically send data to backend or an API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Intro Section */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <Rocket size={40} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Let’s Build Your Winning Pitch</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Fill out this quick form and our team will get back to you to discuss how we can help you pitch bold and win big.
        </p>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 border">
          {submitted ? (
            <div className="text-center">
              <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Submission Received!</h2>
              <p className="text-gray-600">Thanks for reaching out. We’ll contact you shortly to get started.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium" htmlFor="name">
                  Your Name
                </label>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <User size={20} className="text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Amina Mwangi"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium" htmlFor="email">
                  Your Email
                </label>
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

              {/* Type of Help Needed */}
              <div>
                <label className="block mb-1 font-medium" htmlFor="help">
                  What Do You Need Help With?
                </label>
                <div className="flex items-start gap-2 border rounded-lg px-3 py-2">
                  <MessageSquare size={20} className="text-gray-400 mt-1" />
                  <textarea
                    id="help"
                    required
                    placeholder="e.g. I need a pitch deck and coaching for my fintech idea"
                    rows={4}
                    className="w-full outline-none bg-transparent resize-none"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block mb-1 font-medium" htmlFor="budget">
                  Estimated Budget (KES)
                </label>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <Coins size={20} className="text-gray-400" />
                  <input
                    type="number"
                    id="budget"
                    placeholder="e.g. 5000"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition"
              >
                Submit & Get Started
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

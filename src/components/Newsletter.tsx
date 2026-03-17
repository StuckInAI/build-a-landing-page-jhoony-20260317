'use client';

import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json() as { message?: string; error?: string };

      if (response.ok) {
        setStatus('success');
        setMessage(data.message ?? 'Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🎉 Limited Early Access
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to Launch?
            </h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              Join our newsletter and be the first to know about new features, early access, and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-5 py-4 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Subscribing...
                  </span>
                ) : status === 'success' ? (
                  '✓ Subscribed!'
                ) : (
                  'Get Early Access'
                )}
              </button>
            </form>

            {message && (
              <p
                className={`mt-4 text-sm font-medium ${
                  status === 'success' ? 'text-green-300' : 'text-red-300'
                }`}
              >
                {status === 'success' ? '🎉 ' : '⚠️ '}{message}
              </p>
            )}

            <p className="text-blue-200/70 text-xs mt-6">
              No spam, ever. Unsubscribe anytime. Read our{' '}
              <span className="underline cursor-pointer hover:text-white transition-colors">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "LaunchPad cut our time-to-production by 60%. What used to take weeks now takes hours. It's genuinely the best developer experience I've had in 10 years.",
      name: 'Sarah Chen',
      role: 'CTO at Velocity Labs',
      avatar: 'SC',
      rating: 5,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      quote:
        "We migrated our entire infrastructure to LaunchPad in a weekend. The documentation is stellar, the support is incredible, and the performance speaks for itself.",
      name: 'Marcus Johnson',
      role: 'Lead Engineer at Buildwise',
      avatar: 'MJ',
      rating: 5,
      color: 'from-purple-500 to-pink-600',
    },
    {
      quote:
        "As a solo founder, LaunchPad gives me the power of a full engineering team. I shipped my MVP in 2 days and already have paying customers.",
      name: 'Priya Patel',
      role: 'Founder at Nexara',
      avatar: 'PP',
      rating: 5,
      color: 'from-green-500 to-teal-600',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="text-purple-600">developers</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Join thousands of teams shipping faster with LaunchPad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-40">
            {['Acme Corp', 'TechFlow', 'Buildwise', 'Nexara', 'Velocity Labs'].map((company) => (
              <span key={company} className="text-gray-700 font-bold text-xl">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description:
        'Built on Next.js 14 with server components and edge rendering for sub-second load times globally.',
      color: 'from-yellow-400/20 to-orange-400/20',
      border: 'border-yellow-200',
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description:
        'Enterprise-grade security with end-to-end encryption, SOC 2 compliance, and zero-trust architecture.',
      color: 'from-green-400/20 to-emerald-400/20',
      border: 'border-green-200',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description:
        'Track every interaction with beautiful dashboards. Know what your users love and iterate faster.',
      color: 'from-blue-400/20 to-indigo-400/20',
      border: 'border-blue-200',
    },
    {
      icon: '🚀',
      title: 'One-click Deploy',
      description:
        'From code to production in seconds. Automatic CI/CD pipelines, rollbacks, and zero-downtime deploys.',
      color: 'from-purple-400/20 to-pink-400/20',
      border: 'border-purple-200',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why LaunchPad?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to{' '}
            <span className="text-blue-600">ship faster</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Stop worrying about infrastructure and focus on building the product your customers love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-hover bg-white rounded-2xl p-6 border ${
                feature.border
              } shadow-sm`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Fully Integrated Stack</h3>
              <p className="text-blue-100 text-lg mb-6">
                LaunchPad bundles everything — authentication, database, storage, and serverless functions — into one seamless developer experience.
              </p>
              <ul className="space-y-3">
                {[
                  'TypeScript-first development',
                  'Auto-scaling infrastructure',
                  'Global CDN included',
                  'Built-in monitoring & alerts',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">✓</span>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-white/50 text-xs">terminal</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-green-400">$</span> <span className="text-white">npx create-launchpad my-app</span></div>
                <div className="text-blue-200">✓ Creating project structure...</div>
                <div className="text-blue-200">✓ Installing dependencies...</div>
                <div className="text-blue-200">✓ Configuring database...</div>
                <div className="text-green-400">🚀 Ready in 3.2s! Happy shipping!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

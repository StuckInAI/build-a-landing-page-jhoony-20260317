'use client';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Launch</span>
              <span className="text-white">Pad</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The modern platform to launch your next big idea. Fast, reliable, and beautiful.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Social icons */}
              {[
                { label: 'Twitter', icon: '𝕏' },
                { label: 'GitHub', icon: '⌥' },
                { label: 'Discord', icon: '⊛' },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', id: 'features' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Subscribe', id: 'newsletter' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact Us'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} LaunchPad. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

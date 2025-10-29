export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 text-stone-800 overflow-hidden border-t border-amber-200/40">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-yellow-100/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tl from-amber-100/20 to-transparent blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Brand + short mission */}
          <div className="lg:w-1/3">
            <a href="/" className="inline-flex items-center gap-3">
              <img src="/logo4.png" alt="Kcare" className="h-12 w-auto" />
              <span className="font-display text-2xl font-semibold tracking-tight text-stone-800">
                Kcare Clinic
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-stone-600 leading-relaxed">
              Advanced robotic & laparoscopic surgery — faster recovery, minimal
              scarring, and care you can trust.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-amber-500/30 hover:from-amber-400 hover:to-orange-400 transition-all duration-200"
              >
                Book an Appointment
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-3 py-2 text-xs font-medium text-amber-700 bg-amber-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-amber-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 016 6v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a6 6 0 11-12 0v-1H3a1 1 0 01-1-1V10a1 1 0 011-1h1V9a6 6 0 016-6z" />
                </svg>
                Board-certified care
              </span>
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Explore
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="/technology"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Patients
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#faq"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="/book"
                  >
                    Book consultation
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#learn"
                  >
                    Learn more
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Contact
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#contact"
                  >
                    Get in touch
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#portal"
                  >
                    Patient portal
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="#location"
                  >
                    Find us
                  </a>
                </li>
                <li>
                  <a
                    className="text-stone-600 hover:text-amber-600 transition-colors"
                    href="tel:+1234567890"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-amber-200/40 pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stone-500 font-light">
            © {new Date().getFullYear()} Kcare Clinic. All rights reserved.
          </div>
          <div className="text-sm text-stone-500 font-light">
            Designed & Developed by TheSocialKollab
          </div>
        </div>
      </div>
    </footer>
  );
}

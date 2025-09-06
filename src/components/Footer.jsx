export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        {/* Top: brand + nav */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand and mission */}
          <div className="md:col-span-5">
            <a href="/" className="inline-flex items-center gap-3">
              <img
                src="/logo1.png"
                alt="Kcare"
                className="h-9 w-9 rounded-md object-contain"
              />
              <span className="font-display text-xl font-semibold tracking-tight text-stone-900">
                Kcare Clinic
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-600">
              Advanced robotic surgery, designed for faster recovery, minimal
              scarring, and precision you can trust.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm text-stone-800 shadow-sm">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
              Board-certified care. Patient-first outcomes.
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-7 grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Explore
              </div>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>
                  <a className="hover:text-stone-900" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="/technology">
                    Technology
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="#pricing">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Patients
              </div>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>
                  <a className="hover:text-stone-900" href="#testimonials">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="#book">
                    Book consultation
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="#learn">
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Contact
              </div>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                <li>
                  <a className="hover:text-stone-900" href="#contact">
                    Get in touch
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="#portal">
                    Patient portal
                  </a>
                </li>
                <li>
                  <a className="hover:text-stone-900" href="#location">
                    Find us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-stone-500 sm:flex-row">
          <div>
            © {new Date().getFullYear()} Kcare Clinic. All rights reserved.
          </div>
          <div className="text-center">
            /: Designed & Developed By TheSocialKollab
          </div>
        </div>
      </div>
    </footer>
  );
}

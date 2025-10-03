import { useState } from "react";
import { Dialog } from '@headlessui/react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'Implants', href: '#' },
  { name: 'Price', href: '#' },
  { name: 'Preventive Care', href: '#' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;
  const linkBase = 'relative text-[15px] font-medium px-2 py-1 rounded-md after:content-[""] after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-transform after:duration-300 after:scale-x-0';
  const linkTheme = transparent
    ? 'text-white hover:bg-white/10 hover:after:scale-x-100 after:bg-teal-200'
    : 'text-slate-900 hover:bg-sky-50 hover:after:scale-x-100 after:bg-sky-600';
  const ctaClasses = transparent
    ? 'text-white border border-white/20 bg-white/10 hover:bg-white/20 rounded-full'
    : 'text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 rounded-full shadow-md shadow-sky-900/10';

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`${transparent ? 'bg-transparent' : 'bg-white/60 backdrop-blur-md border-b border-white/20 shadow-[0_8px_32px_rgba(2,132,199,0.15)]'} transition-colors duration-300`}
        aria-label="Global"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 lg:py-6 flex items-center justify-between">
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center ring-1 ring-white/40">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className={`text-2xl font-bold tracking-tight ${transparent ? 'text-white' : 'text-sky-900'}`}>Kcare</span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${transparent ? 'text-white' : 'text-sky-900'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center">
            <nav className="flex items-center gap-x-8">
              {navigation.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveIdx(idx)}
                    className={`${linkBase} ${linkTheme} ${isActive ? 'after:scale-x-100' : ''}`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className={`text-sm font-semibold leading-6 px-5 py-2.5 transition-colors ${ctaClasses}`}
            >
              Health Check
            </a>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/80 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-sky-900 tracking-tight">Kcare</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-sky-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-sky-900 hover:bg-slate-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block text-center rounded-full px-5 py-2.5 text-base font-semibold leading-7 text-white bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 shadow-md shadow-sky-900/10"
                >
                  Health Check
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
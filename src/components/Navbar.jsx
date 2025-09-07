import { useEffect, useState } from "react";
import AuthModal from "./AuthModal"; // adjust the path if necessary

// Hcare Navbar – transparent, subtle glass blur on scroll
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
          (scrolled
            ? "bg-white/55 backdrop-blur-sm shadow-sm"
            : "bg-transparent backdrop-blur-0")
        }
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 md:px-6">
          {/* Left section */}
          <div className="flex flex-1 items-center justify-start">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo1.png" alt="Hcare" className="h-12 w-auto" />
              <span className="font-display text-2xl tracking-tight text-stone-900">
                K care
              </span>
            </a>
          </div>

          {/* Center section */}
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-stone-700 hover:text-teal-700"
            >
              Services
            </a>
            <a
              href="/technology"
              className="text-sm font-medium text-stone-700 hover:text-teal-700"
            >
              Technology
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-stone-700 hover:text-teal-700"
            >
              About Kcare
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-stone-700 hover:text-teal-700"
            >
              Contact
            </a>
          </div>

          {/* Right section */}
          <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
           
            <a
              href="#book"
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
            >
              Book consultation
            </a>
             <button
              type="button"
              onClick={() =>
                window.open(
                  "https://kcare-patient-portal.onrender.com",
                  "_blank"
                )
              }
              className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-700 hover:border-teal-300"
            >
              Login
            </button>
          </div>

          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md border border-stone-200 p-2 text-stone-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>

        {open && (
          <div className="mx-auto block max-w-7xl px-4 pb-4 md:hidden">
            <div className="rounded-2xl border border-white/40 bg-white/70 p-4 backdrop-blur-sm shadow-sm">
              <div className="grid gap-2">
                <a
                  href="#services"
                  className="rounded-md px-2 py-2 text-stone-800 hover:text-teal-700"
                >
                  Services
                </a>
                <a
                  href="/technology"
                  className="rounded-md px-2 py-2 text-stone-800 hover:text-teal-700"
                >
                  Technology
                </a>
                <a
                  href="#pricing"
                  className="rounded-md px-2 py-2 text-stone-800 hover:text-teal-700"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="rounded-md px-2 py-2 text-stone-800 hover:text-teal-700"
                >
                  Contact
                </a>
              </div>
              <div className="mt-3 flex gap-2">
               
                <a
                  href="#book"
                  className="flex-1 rounded-full bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Book
                </a>
                 <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex-1 rounded-full border border-teal-200 px-4 py-2 text-center text-sm font-semibold text-teal-700"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {isAuthModalOpen && (
        <AuthModal onClose={() => setIsAuthModalOpen(false)} />
      )}
    </>
  );
}

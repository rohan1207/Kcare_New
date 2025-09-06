// Hero for Hcare – uses robo6.png as background, clean layout inspired by reference
export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen">
      {/* Background image with soft overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/robo6.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-white/65" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-28 md:grid-cols-2 md:px-6 md:pt-36">
        <div>
          <h1 className="font-display text-4xl leading-tight text-stone-900 sm:text-5xl md:text-6xl">
            Bloom into the life you deserve with
            <span className="block text-amber-600">Kcare Clinic</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
            Advanced robotic surgery clinic delivering precision, minimal
            downtime, and compassionate care. Evidence‑based procedures with
            world‑class technology.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#book"
              className="rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              Book a consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-stone-300 bg-white/80 px-5 py-3 text-sm font-semibold text-stone-800 backdrop-blur-sm hover:border-stone-400"
            >
              Explore procedures
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-stone-600">
            <div>
              <span className="block font-semibold text-stone-900">
                Precision
              </span>
              <span>Sub‑millimeter accuracy</span>
            </div>
            <div>
              <span className="block font-semibold text-stone-900">
                Recovery
              </span>
              <span>Faster return to life</span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          {/* Decorative glass card */}
          <div className="mx-auto w-80 rounded-3xl border border-white/40 bg-white/40 p-6 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-3">
              <img src="/logo1.png" alt="Hcare" className="h-10 w-10" />
              <div className="font-display text-2xl text-stone-900">Kcare</div>
            </div>
            <p className="mt-4 text-sm text-stone-700">
              Trusted by surgeons and patients alike for robotic excellence.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/70 p-3 text-stone-800">
                <div className="text-xl font-bold text-teal-700">98%</div>
                <div className="text-xs">Satisfaction</div>
              </div>
              <div className="rounded-xl bg-white/70 p-3 text-stone-800">
                <div className="text-xl font-bold text-amber-600">24/7</div>
                <div className="text-xs">Support</div>
              </div>
              <div className="rounded-xl bg-white/70 p-3 text-stone-800">
                <div className="text-xl font-bold text-teal-700">Top</div>
                <div className="text-xs">Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero for Hcare – uses robo6.png as background, clean layout inspired by reference
export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center justify-center">
      {/* Background image with soft overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/robo6.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-white/65" aria-hidden="true" />

      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight text-stone-900 sm:text-5xl md:text-6xl">
          Bloom into the life you deserve with
          <span className="block text-amber-600">Kcare Clinic</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
          Advanced robotic surgery clinic delivering precision, minimal
          downtime, and compassionate care. Evidence-based procedures with
          world-class technology.
        </p>

        <div className="mt-8 flex justify-center gap-3">
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
      </div>

      {/* Stats Bar at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center divide-x divide-stone-400 rounded-full bg-white/50 px-6 py-3 text-center text-sm text-stone-800 shadow-lg backdrop-blur-md">
          <div className="px-4">
            <div className="font-bold text-teal-700">98%</div>
            <div className="text-xs">Satisfaction</div>
          </div>
          <div className="px-4">
            <div className="font-bold text-amber-600">24/7</div>
            <div className="text-xs">Support</div>
          </div>
          <div className="px-4">
            <div className="font-bold text-teal-700">Top</div>
            <div className="text-xs">Tech</div>
          </div>
        </div>
      </div>
    </section>
  );
}

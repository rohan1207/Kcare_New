import { useState } from 'react';

const surgeons = [
  {
    name: 'Dr. Pramod Kadam',
    imageUrl: '/pramod_kadam2.jpg',
    profileUrl: '#',
  },
  {
    name: 'Dr. Shital Satish Sharma',
    imageUrl: '/sharma.jpg',
    profileUrl: '#',
  },
  
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const current = surgeons[index % surgeons.length];
  return (
    <section className="relative h-screen h-[100svh] text-white overflow-hidden">
      {/* Make the video a bit more visible and saturated */}
      <video
        className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-95"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Softer, lighter overlay to let the video show through */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 via-cyan-900/18 to-teal-900/12" />

      {/* Central divider */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 pt-20 lg:pt-28 flex flex-col">
        <div className="flex-1 grid grid-cols-12 gap-6 items-stretch">
          <div className="col-span-12 lg:col-span-6 flex items-center">
            <div>
              <p className="text-base leading-7 text-sky-100/90 max-w-lg">
                Advanced laparoscopic and robotic surgery for faster recovery, minimal scarring, and better outcomes.
              </p>
              <h1 className="mt-6 font-light text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                Precision
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-sky-200">Human Touch</span>
              </h1>

              {/* Primary CTA */}
              <div className="mt-8">
                <a
                  href="#book"
                  className="inline-block rounded-full bg-gradient-to-r from-teal-400 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block col-span-1" />

          <div className="col-span-12 lg:col-span-5 flex items-end justify-end">
            <div className="w-[460px] h-[520px] max-w-lg">
              <div className="mb-3 text-sm text-white/80 flex items-center justify-between">
                <div className="font-medium">Next</div>
                <button
                  onClick={() => setIndex((p) => (p + 1) % surgeons.length)}
                  className="inline-flex items-center gap-1 text-teal-200 hover:text-white"
                >
                  Next <span aria-hidden="true">›</span>
                </button>
              </div>

              {/* Stronger card with lifted shadow to stand out from video */}
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/6 to-white/3 ring-1 ring-white/10 shadow-[0_20px_50px_rgba(2,132,199,0.15)] border border-white/5">
                <img
                  src={current.imageUrl}
                  alt={current.name}
                  className="h-[480px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />

                {/* subtle dark gradient to improve text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-white drop-shadow">{current.name}</div>
                    <div className="text-[11px] text-white/80">Robotic Surgery</div>
                  </div>
                  <a
                    href={current.profileUrl || '#'}
                    className="text-[11px] px-3 py-1 rounded-md border border-white/30 bg-white/10 hover:bg-white/20 text-white"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8">
          <div className="flex items-end justify-between">
            <div className="hidden sm:flex items-center gap-6 text-sm text-sky-100/80">
              <div>
                <p className="font-medium">Top Surgical Center</p>
                <p>2024</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="font-medium">Pune, India</p>
                <p>—</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="font-medium">Advanced Technology</p>
                <p>Robotic & Laparoscopic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
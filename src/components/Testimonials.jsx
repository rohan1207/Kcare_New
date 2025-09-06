import { useState, useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

// Exact-style testimonial section: left text with badge, big serif quote; right rounded image; nav arrows
const DATA = [
  {
    quote: "It saved my life and brought me back to myself",
    body: (
      <>
        I was struggling with daily pain and anxiety after open surgery.{" "}
        <strong>I had tried everything to feel normal again</strong> — therapy,
        medication, and rest. Robotic surgery minimized my pain and scarring and
        gave me my energy back. It’s been the most deeply healing experience of
        my life.
      </>
    ),
    name: "Sarah",
    meta: "Robotic Hysterectomy | Roseville, CA",
    image: "/user.png",
  },
  {
    quote: "Precision that changed my recovery",
    body: (
      <>
        I was terrified of a long downtime. With robotics, my incisions were
        tiny and I was walking the next day.{" "}
        <strong>The accuracy was unbelievable</strong> and recovery was faster
        than I imagined.
      </>
    ),
    name: "Marcus",
    meta: "Robotic Hernia Repair | Sacramento, CA",
    image: "/user.png",
  },
  {
    quote: "Back to life without the fear of pain",
    body: (
      <>
        Years of discomfort kept me from work and family time.{" "}
        <strong>Robotic precision meant less trauma</strong> and I was home the
        same day. I’m finally sleeping and smiling again.
      </>
    ),
    name: "Evelyn",
    meta: "Robotic Gallbladder Surgery | Folsom, CA",
    image: "/user.png",
  },
  {
    quote: "Care that felt caring—every step",
    body: (
      <>
        The team explained everything and the technology was reassuring.{" "}
        <strong>Minimal scarring and quick mobility</strong> changed the way I
        think about surgery.
      </>
    ),
    name: "Daniel",
    meta: "Robotic Prostatectomy | Elk Grove, CA",
    image: "/user.png",
  },
  {
    quote: "The confidence to move again",
    body: (
      <>
        After years of putting it off, the robotic approach made it simple.{" "}
        <strong>Less pain, less fear, more life</strong>.
      </>
    ),
    name: "Priya",
    meta: "Robotic Endometriosis Surgery | Davis, CA",
    image: "/user.png",
  },
  {
    quote: "Small incisions, big results",
    body: (
      <>
        I expected weeks of struggle, but{" "}
        <strong>the recovery was smooth and fast</strong>. I’m grateful for the
        precision and compassion I received.
      </>
    ),
    name: "Jared",
    meta: "Robotic Colon Resection | Rocklin, CA",
    image: "/user.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = useMemo(() => DATA[index % DATA.length], [index]);

  const prev = () => setIndex((i) => (i - 1 + DATA.length) % DATA.length);
  const next = () => setIndex((i) => (i + 1) % DATA.length);

  return (
    <section className="relative isolate py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Left column: badge, quote, body, author, controls */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-stone-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
            Client Testimonials
          </div>

          <h2 className="font-display text-[40px] leading-[1.1] text-stone-900 sm:text-[56px] md:text-[64px]">
            &ldquo;{t.quote}&rdquo;
          </h2>

          <p className="mt-8 max-w-[44rem] text-base leading-relaxed text-stone-700 sm:text-lg">
            {t.body}
          </p>

          <div className="mt-8 text-stone-700">
            <div className="text-base font-semibold text-stone-900">
              {t.name}
            </div>
            <div className="text-sm">{t.meta}</div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-800 shadow-sm hover:border-stone-400"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-800 shadow-sm hover:border-stone-400"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Right column: rounded image, large radius like reference */}
        <div className="order-first md:order-none">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src={t.image}
              alt={t.name}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

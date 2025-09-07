import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const QA = [
  {
    q: "What conditions can robotic surgery treat?",
    a: "Robotic techniques are used across general surgery, urology, gynecology, colorectal, hernia repair, and more—especially for patients seeking smaller incisions, less pain, and faster recovery.",
  },
  {
    q: "How does robotic surgery actually work?",
    a: "Your surgeon controls robotic arms from a console. The system translates precise hand movements into micro‑motions, offering magnified 3D vision and sub‑millimeter accuracy.",
  },
  {
    q: "Is robotic surgery safe?",
    a: "Yes. It is surgeon‑led, FDA‑cleared, and supported by extensive clinical evidence. The technology enhances dexterity and control while maintaining strict safety checks.",
  },
  {
    q: "How many sessions or visits will I need?",
    a: "Most procedures are a single operation with pre‑op and post‑op visits. Many patients go home the same day or within 24 hours depending on the procedure.",
  },
  {
    q: "Will I be conscious during surgery?",
    a: "No. Procedures are typically performed under anesthesia. You’ll be monitored continuously and wake up in recovery with a care plan for comfort and mobility.",
  },
  {
    q: "How quickly can I return to normal activities?",
    a: "Because incisions are small, many patients experience less pain and resume light activities in days, with full recovery guided by your surgeon’s instructions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0); // first expanded

  return (
    <section className="relative isolate py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
        {/* Left: heading + buttons */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-stone-700">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
            FAQs
          </div>
          <h2 className="font-display text-[40px] leading-[1.1] text-stone-900 sm:text-[56px] md:text-[64px]">
            What our customers
            <br /> want to know
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/book"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
            >
              Book an Appointment
            </a>
            <a
              href="#learn"
              className="rounded-full border border-stone-800 px-6 py-3 text-sm font-semibold text-stone-900"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right: accordion list */}
        <div className="divide-y divide-stone-200">
          {QA.map((item, i) => {
            const isOpen = i === open;
            return (
              <div key={i} className="py-6">
                <button
                  className="flex w-full items-start justify-between gap-6 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium leading-snug text-stone-900 text-2xl md:text-[28px]">
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    className={`mt-1 h-6 w-6 text-stone-800 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 max-w-3xl text-stone-700">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

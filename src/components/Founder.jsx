import { useState } from "react";
import {
  BadgeCheckIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/outline";

const SERVICES = [
  "Umbilical Hernia Surgery",
  "Laser Treatment for Varicose Veins",
  "Benign and Cancer Surgeries",
  "Colorectal Surgery",
  "Total Thyroidectomy",
];

export default function Founder() {
  const [showServices, setShowServices] = useState(true);

  return (
    <section
      id="founder"
      className="relative isolate overflow-hidden py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 md:grid-cols-12 md:px-6">
        {/* Left: portrait / identity card */}
        <div className="md:col-span-5">
          <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            {/* avatar */}
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full ">
              <img
                src="/pramod_kadam.jpg"
                alt="Dr. Pramod Kadam"
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
            <div className="mt-5 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs text-stone-700">
                <BadgeCheckIcon className="h-4 w-4 text-teal-700" />
                Founder & Lead Surgeon
              </div>
              <h3 className="mt-3 font-display text-2xl text-stone-900 md:text-3xl">
                Dr. Pramod Kadam
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                MBBS, DNB - General Surgery
              </p>
              <p className="text-sm text-stone-600">General Surgeon</p>
            </div>

            {/* credentials highlights */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/80 p-3 shadow-sm">
                <ClockIcon className="mx-auto h-5 w-5 text-teal-700" />
                <div className="mt-1 text-xs text-stone-500">Experience</div>
                <div className="text-sm font-semibold text-stone-900">
                  15 yrs
                </div>
              </div>
              <div className="rounded-xl bg-white/80 p-3 shadow-sm">
                <BriefcaseIcon className="mx-auto h-5 w-5 text-amber-600" />
                <div className="mt-1 text-xs text-stone-500">Specialist</div>
                <div className="text-sm font-semibold text-stone-900">
                  11 yrs
                </div>
              </div>
              <div className="rounded-xl bg-white/80 p-3 shadow-sm">
                <ShieldCheckIcon className="mx-auto h-5 w-5 text-teal-700" />
                <div className="mt-1 text-xs text-stone-500">Registration</div>
                <div className="text-sm font-semibold text-stone-900">
                  Verified
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-stone-100 bg-white/80 p-4 text-sm text-stone-700">
              <p>
                Completed MBBS from Maharashtra University of Health Sciences
                (2007) and DNB - General Surgery from the National Board of
                Education, New Delhi (2012).
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
                <AcademicCapIcon className="h-4 w-4" /> Credentials verified
              </div>
            </div>
          </div>
        </div>

        {/* Right: story, services, actions */}
        <div className="md:col-span-7">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-stone-700">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-500" />
              Meet the Founder
            </div>
            <h2 className="font-display text-[38px] leading-[1.15] text-stone-900 sm:text-[48px] md:text-[56px]">
              Precision-led surgery with compassion at its core
            </h2>

            <p className="mt-5 text-base leading-relaxed text-stone-700 sm:text-lg">
              Dr. Pramod Kadam is a General Surgeon with 15 years of experience,
              known for a patient-first approach and meticulous operative
              technique. He focuses on minimally invasive procedures that reduce
              pain, scarring, and recovery time.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#book"
                className="rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
              >
                Book a consultation
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 bg-white/80 px-5 py-3 text-sm font-semibold text-stone-800 backdrop-blur-sm hover:border-stone-400"
              >
                About Kcare
              </a>
            </div>

            {/* Services */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                  Key Procedures
                </h3>
                <button
                  onClick={() => setShowServices((v) => !v)}
                  className="text-xs font-medium text-stone-600 hover:text-stone-900"
                  aria-expanded={showServices}
                >
                  {showServices ? "Hide" : "Show"}
                </button>
              </div>
              {showServices && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {SERVICES.map((s, i) => (
                    <li key={i}>
                      <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1.5 text-xs text-stone-700 shadow-sm transition hover:border-stone-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Trust card */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-stone-100 bg-white/80 p-4 text-sm text-stone-700 shadow-sm">
              <ShieldCheckIcon className="h-5 w-5 text-teal-700" />
              Medical Registration Verified. Evidence‑based care and transparent
              outcomes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

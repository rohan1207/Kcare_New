export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top header row */}
        <div className="grid gap-10 lg:grid-cols-12 items-center mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Advanced Surgery
              <br />
              With Precision
              <br />
              <span className="text-teal-600">& Care</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We combine cutting-edge robotic and laparoscopic technology with expert surgical care. 
              Our team of specialized surgeons is committed to delivering minimally invasive procedures 
              with maximum precision, ensuring faster recovery and better outcomes for every patient.
            </p>
          </div>
        </div>

        {/* Middle row: left card + right large image - properly aligned */}
        <div className="grid gap-6 lg:grid-cols-12 mb-6">
          {/* Left card */}
          <div className="lg:col-span-5 flex">
            <div className="rounded-3xl bg-slate-900 text-white p-10 shadow-lg w-full flex flex-col justify-center">
              <h3 className="text-3xl font-semibold leading-tight">
                Robotic & Laparoscopic
                <br />Excellence
              </h3>
              <p className="mt-5 text-white/90 leading-relaxed text-lg">
                State-of-the-art robotic systems and advanced laparoscopic techniques enable us to perform 
                complex procedures with minimal incisions, reducing pain and accelerating your recovery time.
              </p>
            </div>
          </div>

          {/* Right large image */}
          <div className="lg:col-span-7 flex">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop"
                alt="Advanced surgical technology"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: three equal cards - properly aligned */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Expert Surgeons */}
          <div className="flex">
            <div className="rounded-3xl bg-white p-10 shadow-lg ring-1 ring-slate-200 w-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-semibold text-slate-900 leading-tight">
                  Expert
                  <br />Surgeons
                </h4>
                <p className="mt-5 text-slate-600 leading-relaxed">
                  Our team consists of highly qualified surgeons with extensive experience in robotic and 
                  laparoscopic procedures, ensuring world-class surgical care for every patient.
                </p>
              </div>
            </div>
          </div>

          {/* Patient Care */}
          <div className="flex">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                alt="Compassionate patient care"
                className="w-full h-full object-cover min-h-[280px]"
              />
            </div>
          </div>

          {/* Advanced Technology */}
          <div className="flex">
            <div className="rounded-3xl p-10 bg-teal-50 text-slate-900 shadow-lg w-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-semibold leading-tight">
                  Comfort &
                  <br />Safety First
                </h4>
                <p className="mt-5 text-slate-700 leading-relaxed">
                  From consultation to recovery, we prioritize your comfort and safety with personalized care plans, 
                  modern facilities, and comprehensive post-operative support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
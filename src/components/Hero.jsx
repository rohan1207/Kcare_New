import AppointmentTab from './AppointmentTab';
 // Inline appointment tab; removed right-side profiles card for a centered, elegant hero

export default function Hero() {
  // Premium, centered hero with inline appointment booking
  return (
    <section className="relative h-screen h-[100svh] text-white overflow-hidden">
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
      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 lg:px-10 pt-24 lg:pt-28 flex items-center justify-center">
        <div className="w-full max-w-4xl text-center">
          <p className="text-sky-100/90 text-sm sm:text-base md:text-lg mx-auto max-w-2xl">
            Advanced laparoscopic and robotic surgery for faster recovery, minimal scarring, and better outcomes.
          </p>
          <h1 className="mt-6 font-light text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            Precision
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-sky-200">Human Touch</span>
          </h1>

          <div className="mt-8 sm:mt-10 flex justify-center">
            <AppointmentTab />
          </div>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center md:bg-top bg-no-repeat mt-20 relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Mobile Overlay (only for small screens) */}
      <div className="absolute inset-0 bg-black/50 md:hidden" />

      {/* Content Box */}
      <div className="relative w-full h-full">
        <div className="md:ml-28 md:pt-22 md:w-[420px] w-max mx-auto pt-80">
          <div className="bg-black/70 backdrop-blur-xs text-center rounded-4xl py-6 px-12 md:px-8 md:py-4">
            <h1 className="text-3xl md:text-4xl text-white font-montserrat font-bold leading-snug">
              You take care of <br />
              <em>PATIENTS</em>,<br />
              We take care of <br />
              <em>BILLING!</em>
            </h1>

            <Link
              to="/contacts"
              className="btn-red px-6 py-3 font-inter mt-9"
            >
              Find Out More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

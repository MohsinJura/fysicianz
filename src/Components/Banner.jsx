import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, desc, imgPath  }) => {
  return (
    <section className="relative h-120 w-full">
      {/* Background Image */}
      <img
        src={imgPath}
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center m-12">
        
        <h2 className="max-w-6xl mb-5 text-2xl md:text-4xl font-bold leading-snug font-montserrat text-white ">
          {title}
        </h2>

        <p className="max-w-5xl font-inter text-white line-clamp-4">{desc}</p>
      
      </div>
    </section>
  );
};

export default Banner;

        // <div className={ `${visibile}` }>
        //   <Link  to="/contacts"  className={" btn-red px-12 py-3 font-inter"}>
        //     Let’s Talk
        //   </Link>
        // </div>
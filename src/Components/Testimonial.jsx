import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-16 px-6 md:px-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
          What people say about us
        </h2>
        <h1 className='text-7xl'>&ldquo;</h1>
      </div>

      {/* Testimonial Content */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-semibold mb-10 text-sm">
          AMBSI Bill Review services help reduce our claims liability by
          identifying errors, omissions, duplicate billing, and inappropriate<br/>
          charges. In the process, we can also identify potential fraud, waste,
          or abuse.
        </p>

        {/* User Info */}
        <div className="flex items-center justify-center space-x-4">
          <img
            src="/testmonial.png"
            alt="Mike Muller"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div className="text-left">
            <p className="font-bold text-gray-800">Mike Muller</p>
            <p className="text-gray-600 text-sm">Director, AAA Medical Group</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "PhysicianMeds simplified our entire billing process. Claims were filed quickly, reimbursements improved, and errors decreased. Their knowledgeable team saved us time and stress while increasing efficiency across our practice’s revenue cycle.",
    author: "Daniel Carter (Houston, TX)",
  },
  {
    text: "We switched to PhysicianMeds for billing, and it was the best decision. Transparent reporting, fast claim resolution, and excellent support staff made our practice operations smoother and significantly improved cash flow.",
    author: "Jessica Miller (Orlando, FL)",
  },
  {
    text: "PhysicianMeds delivers exceptional billing services. Their expertise in coding and claims management reduced denials dramatically. They’re responsive, professional, and trustworthy, exactly what any medical practice needs to stay financially healthy.",
    author: "Robert Anderson (Seattle, WA)",
  },
];

const WhatPeopleSay = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="md:w-[80%] mx-4 md:mx-auto my-16 flex flex-col md:flex-row items-center justify-center">
        {/* Review Box */}
        <div className="bg-darkblue text-white md:w-1/2 md:h-120 flex flex-col 
        justify-center items-center text-center p-12 md:p-[94px] rounded-tl-4xl md:rounded-bl-4xl">
          <h2 className="text-2xl md:text-4xl font-bold font-montserrat mb-6">
            What People Say About Us
          </h2>

          <div className="max-w-md transition-all duration-700 ease-in-out">
            <p className="italic mb-4">"{testimonials[activeIndex].text}"</p>
            <p className="font-semibold text-lg text-reddish">
              {testimonials[activeIndex].author}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-white opacity-50 hover:opacity-80"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Image Box */}
        <div className="md:w-1/2 ">
         <img src="p3.jpg" alt="A group of smiling doctors giving a thumbs up" 
         className="w-full h-full object-fit md:rounded-tr-4xl rounded-br-4xl shadow-xl" /> 
         </div>
      </div>
    </section>
  );
};

export default WhatPeopleSay;

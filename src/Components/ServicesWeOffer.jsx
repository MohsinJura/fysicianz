import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "Medical Billing", pageurl: "/services/amb", icon: "💡" },
  { title: "Medical Coding", pageurl: "/services/mc", icon: "🧠" },
  { title: "Practice Management", pageurl: "/services/pm", icon: "🚀" },
  { title: "Credential & Enrollment", pageurl: "/services/ce", icon: "📋" },
  { title: "Accounts Receivable", pageurl: "/services/arf", icon: "💰" },
  { title: "Denial Management", pageurl: "/services/dms", icon: "🚫" },
  { title: "Out-of-Network MB", pageurl: "/services/ofnmb", icon: "🌐" },
  { title: "Patient Billing", pageurl: "/services/pb", icon: "🧾" },
  { title: "Quality Payment Program", pageurl: "/services/qpp", icon: "📊" },
  { title: "Patient-Centered M-Home", pageurl: "/services/pcmh", icon: "🏠" },
  { title: "RCM Software", pageurl: "/services/rcms", icon: "🤖" },
  { title: "Virtual Assistants", pageurl: "/services/va", icon: "🎧" },
  { title: "Incentive Programs", pageurl: "/services/ip", icon: "🏆" },
  { title: "Medical Audit", pageurl: "/services/ma", icon: "🔍" },
  { title: "Digital Marketing", pageurl: "/services/dm", icon: "📣" },
  { title: "Practice Reporting", pageurl: "/services/pr", icon: "📈" },
];

const ServicesWeOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 4);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = services.length;
  const maxIndex = totalItems - itemsPerPage;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <section className="bg-transparent py-12">
      <div className="w-full text-center">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-cblue mb-4">
          Services We <emr>Offer</emr>
        </h2>
        <p className="mb-10 text-base md:text-lg font-inter">
          Empowering your healthcare practice with intelligent, secure, and efficient solutions. {' '}
          <Link to={'/services'} className="text-sm text-darkblue underline hover:text-darkred">Learn more</Link>
        </p>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-none w-full md:w-1/4 p-4">
                  <Link
                    to={service.pageurl}
                    className="bg-cblue/5 hover:border-darkred border border-transparent shadow-sm hover:shadow-md rounded-4xl
                    py-8 flex flex-col items-center justify-center text-center transition-all duration-300" 
                  > 
                    {/* Emoji Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">
                      {service.icon}
                    </div>
                    {/* Icon with animation */} 
                    {/* <div className="relative w-20 h-20 mb-4"> 
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-cblue/10 flex items-center justify-center"> 
                        <service.icon className="h-8 w-8" /> 
                      </div> 
                    </div> */}
                    <h3 className="text-lg font-inter font-semibold text-darkred">
                      {service.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-4 pb-2.5 text-4xl rounded-full bg-white hover:text-reddish text-cblue backdrop-blur transition-all duration-200"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-4 pb-2.5 text-4xl rounded-full bg-white hover:text-reddish text-cblue backdrop-blur transition-all duration-200"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;

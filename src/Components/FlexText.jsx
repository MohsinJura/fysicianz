import React from "react";

const FlexText = ({ 
  title, 
  highlight, 
  items = [], 
  side = "right"
}) => {
  return (
    <section className="w-full">
      <div className="md:w-[85%] mx-4 md:mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Capsule Box */}
        <div
          className={`flex flex-col md:flex-row ${
            side === "left" ? "md:flex-row-reverse" : ""
          } rounded-4xl overflow-hidden shadow-md shadow-gray-300`}
        >
          {/* Title Section */}
          <div className="md:w-1/3 text-white px-6 py-24 text-center flex items-center justify-center bg-gradient-to-br from-cyan-300 to-indigo-400">
            <h2 className="text-4xl font-extrabold font-montserrat leading-snug capitalize">
              {title}  <emr>{highlight}</emr>
            </h2>
          </div>

          {/* List Section */}
          <div className="md:w-2/3 px-6 md:px-10 py-8 bg-white">
            <ul className="list-disc pl-4 space-y-4 font-inter text-base md:text-lg text-gray-700 leading-relaxed md:text-justify">
              {items.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexText;

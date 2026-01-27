import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const RowBox = ({
  title1,title2,
  desc,
  points = [],
  bgLeft = "from-fuchsia-200 to-rose-200",
  bgRight = "from-cyan-200 to-indigo-100",
  lTitleColor = "text-cblue",
  rTitleColor = "text-reddish",
  titleSize = "text-2xl md:text-[28px]",
}) => {
  return (
    <div className="w-full px-2 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-lg">
        {/* Left Section */}
        <div
          className={`bg-gradient-to-br ${bgLeft} w-full md:w-1/2 px-7 md:px-12 py-11 flex flex-col justify-start text-center md:text-left`}
        >
          <h2 className={`${titleSize} font-bold font-inter ${lTitleColor} mb-4`} >
            {title1}
          </h2>
          <p className="font-montserrat leading-relaxed md:leading-8 md:text-justify">
            {desc}
          </p>
        </div>

        {/* Right Section */}
        <div
          className={`bg-gradient-to-br ${bgRight} w-full md:w-1/2 px-5 md:px-12 py-11 flex flex-col justify-center text-center md:text-left`}
        >
          <h3
            className={`text-xl md:text-[29px] font-semibold font-inter ${rTitleColor} mb-4`}
          >
            {title2}
          </h3>
          <ul className="space-y-3 font-montserrat text-sm md:text-base text-left">
            {points.map((item, i) => (
              <li
                key={i}
                className="flex items-start md:items-center gap-1 md:gap-3 leading-relaxed"
              >
                <CheckCircleIcon className="w-5 h-5 text-cblue mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RowBox;

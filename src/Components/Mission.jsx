import React from "react";
import { HeartPulse, BarChart3, ShieldCheck } from "lucide-react"; // professional icons

const Mission = () => {
  const missions = [
    {
      icon: <HeartPulse className="w-10 h-10 text-red-600" />,
      title: "Accurate & Transparent",
      desc: "Delivering precise, transparent medical billing that builds trust and supports sustainable practice management."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-indigo-600" />,
      title: "Optimize Revenue Cycles",
      desc: "Streamlining processes to maximize reimbursements, minimize denials, and ensure faster revenue flow."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
      title: "Sustainable Growth",
      desc: "Reducing administrative burdens while empowering healthcare providers with financial stability and growth."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-sky-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
          Our <em>Mission</em>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 font-inter text-lg leading-relaxed">
          At <span className="font-semibold text-darkred/80">PhysicianMeds</span>, 
          our mission is to strengthen the financial health of practices by improving 
          revenue management, enhancing resource utilization, and fostering long-term growth.
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white shadow-xl transition-all duration-300 rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-4 bg-sky-50 p-4 rounded-full">{mission.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{mission.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;

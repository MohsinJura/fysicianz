import React from 'react'
import { Link } from "react-router-dom";
const specialties = [
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


const Specialities = () => {
  return (
    <section>
        {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {specialties.map((item, i) => (
          <Link
            key={i}
            to={item.pageurl}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 hover:-translate-y-1"
          >
            <div className="bg-reddish/10 text-reddish p-3 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
              {item.icon} 
            </div>
            <h4 className="font-inter text-[15px] md:text-[16px] font-semibold text-darkblue text-center">
              {item.title}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Specialities
import React from "react";
import { ShieldCheck, Lock, Users, Bell, FileText, AlertTriangle, Cookie } from "lucide-react";
import Banner from "../Components/Banner";

const PolicyPage = () => {
  const commitments = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-cblue" />,
      title: "HIPAA Compliance",
      desc: "We follow national standards for PHI privacy, security, and data handling across all platforms.",
    },
    {
      icon: <Lock className="w-7 h-7 text-reddish" />,
      title: "Data Security",
      desc: "Encryption, access controls, and secure servers protect sensitive information at every stage.",
    },
    {
      icon: <Users className="w-7 h-7 text-cblue" />,
      title: "Responsible Access",
      desc: "Only authorized PhysicianMeds staff and trusted partners can access your data, strictly for billing and revenue cycle services.",
    },
    {
      icon: <Bell className="w-7 h-7 text-reddish" />,
      title: "SMS & Notifications",
      desc: "We may send appointment reminders, billing alerts, or service updates. Patients can opt out anytime via instructions in each message.",
    },
    {
      icon: <FileText className="w-7 h-7 text-cblue" />,
      title: "Patient Rights",
      desc: "You have the right to access, correct, restrict, or request deletion of your information at any time.",
    },
    {
      icon: <AlertTriangle className="w-7 h-7 text-reddish" />,
      title: "Transparency",
      desc: "We clearly communicate how your data is collected, used, and protected to maintain complete trust.",
    },
  ];

  return (
    <>
        <Banner 
            title={ <> PhysicianMeds <em>HIPAA</em> & <emr>Privacy Policy</emr> </>
            }
            desc={          
                <p className="text-base md:text-lg text-gray-100 font-montserrat">
                At PhysicianMeds, protecting your data is at the heart of everything we do.
                We strictly comply with HIPAA regulations to safeguard Protected Health Information (PHI)
                and ensure the privacy of both providers and patients.
                </p>
            }
            imgPath={'./bg20.jpg'}
        />

                                                                {/* policy page content */}
        <section>
            {/* Commitments Section */}
            <div className="max-w-6xl mx-auto px-5 py-16">
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-cblue mb-8 text-center">
                Our Commitments
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {commitments.map((item, index) => (
                    <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Breach Section */}
            <div className="bg-gradient-to-r from-cblue/10 to-indigo-100 py-16 px-5 text-center">
                <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-reddish mb-4">
                    In Case of a Breach
                </h2>
                <p className="text-gray-700 font-montserrat leading-relaxed">
                    If an incident occurs, PhysicianMeds will immediately notify affected individuals and
                    follow HIPAA breach protocols. Our priority is full transparency and swift resolution
                    to protect your trust and data integrity.
                </p>
                </div>
            </div>

            {/* Cookie Policy Section */}
            <div className="max-w-5xl mx-auto px-5 py-16">
                <div className="flex flex-col items-center text-center">
                <Cookie className="w-10 h-10 text-cblue mb-3" />
                <h2 className="text-2xl md:text-3xl font-bold font-inter text-cblue mb-3">
                    Cookie Policy
                </h2>
                <p className="text-gray-700 font-montserrat leading-relaxed max-w-3xl">
                    Our website uses cookies only to improve user experience. We never sell, share, or misuse your
                    information. Cookies help us personalize your experience, ensuring smooth navigation and better
                    service delivery.
                </p>
                </div>
            </div>
        </section>

    </>
  );
};

export default PolicyPage;

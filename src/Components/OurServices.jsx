import { Link, Links } from "react-router-dom";
import ServicesWeOffer from "./ServicesWeOffer";

export default function OurServices() {
  return (
    <section>
      <div className="md:w-[85%] mx-auto px-6 py-12">
        {/* Section Title */}
        {/* <div className="text-center mb-8">
          <span className="badge">Our Services</span>
        </div> */}

        <ServicesWeOffer />

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div className="text-center">
            <h3 className="text-[22px] md:text-3xl font-bold font-inter mb-4">
              Welcome to <em>Physician</em><emr>Meds</emr>
            </h3>
            <div className="md:h-60 overflow-hidden flex flex-col gap-4 md:text-justify mb-9">
              <p>
                PhysicianMeds is one of the leading companies in healthcare industry
                which provides state-of-the-art Revenue Cycle Management, billing
                services and comprehensive practice management for all types of
                medical practices and health care systems.
              </p>
              <p>
                At PhysicianMeds we strive for excellence. Our team of experts
                streamlines the billing and revenue cycle management process,
                maximizes reimbursement, reduces denials, ensures compliance, and
                ultimately improves the financial health of healthcare providers
                and healthcare systems.
              </p>
            </div>
            <Link to={'/abouts'}>
              <button className="btn-blue px-5 py-2.5 ">
              Learn More About Us
              </button>
            </Link>
          </div>

          {/* Right Column */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-inter mb-4">
              Why <em>Physician</em><emr>Meds</emr>
            </h3>
            <div className="md:h-60 overflow-hidden flex flex-col gap-4 md:text-justify mb-9">
              <p>
                We have dedicated teams of experienced professionals who are
                knowledgeable about the complex coding, billing, and reimbursement
                processes. By outsourcing PhysicianMeds, you can focus on your core
                competencies, such as patient care and practice management.
              </p>
              <p>
                Medical billing can be time-consuming and requires continuous
                training and staying updated with changing regulations. Offloading
                these tasks to us allows you to dedicate more time and resources
                to delivering quality healthcare services. We have processes in
                place to streamline the claims submission and payment collection
                process.
              </p>
            </div>
            <Link to={'/abouts'}>
              <button className="btn-blue px-5 py-2.5">
                Read More Here!
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

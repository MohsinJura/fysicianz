import React from "react";
import Banner from "../../Components/Banner";
import FlexPiCard from "../../Components/FlexPiCard";
import ConsultationForm from "../../Components/ConsultationForm";
import CTA from "../../Components/CTA";

const MedicalAudit = () => {
  return (
    <>
      <Banner
        title="Medical Audit"
        imgPath={'/bg15.jpg'}
        desc="Medical audits play a critical role in maintaining compliance, accuracy, and efficiency in billing, coding, and clinical documentation. At PhysicianMeds, our audit services help healthcare providers identify issues early, protect revenue, and stay aligned with industry regulations."
      />

      <FlexPiCard
        title={
          <>
            <emr>Medical Audit Services</emr> – Safeguarding Your Practice
          </>
        }
        imgurl="/f14.png" imgClass={'w-full h-full'}
        content={
          <>
            <h3 className="text-xl font-montserrat font-semibold mb-3">
              Key Features of Our Medical Audit Services
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-[17px] leading-relaxed mb-6">
                <li>
                    <strong>Clinical Documentation Review: </strong> Ensuring records support submitted codes 
                    and meet current guidelines.
                </li>
                <li>
                    <strong>Billing &amp; Coding Compliance: </strong> Detailed audits to reduce errors, 
                    denials, and overpayments.
                </li>
                <li>
                    <strong>Error Detection &amp; Risk Mitigation: </strong> Identifying discrepancies to 
                    prevent legal, financial, or compliance risks.
                </li>
            </ul>

            <h3 className="text-xl font-montserrat font-semibold mb-3">
                Benefits of Partnering with PhysicianMeds
            </h3>
            <ul className="list-disc ml-6 space-y-4 text-[17px] leading-relaxed mb-6">
                <li>
                    Greater accuracy and regulatory compliance.
                </li>
                <li>
                    Cost savings through reduced billing errors and recovered revenue.
                </li>
                <li>
                    Lower audit and penalty risks with proactive issue detection.
                </li>
            </ul>

            <h3 className="text-xl font-montserrat font-semibold mb-3">
            Why Choose PhysicianMeds?
            </h3>
            <p className="text-[17px]   leading-relaxed mb-6">
            Our expert auditors deliver actionable insights to optimize workflows, 
            maximize reimbursements, and maintain compliance. With tailored solutions 
            for practices of all sizes, we help you safeguard both your revenue and 
            reputation.
            </p>

          </>
        }
      />

      <ConsultationForm />
      <CTA />
    </>
  );
};

export default MedicalAudit;

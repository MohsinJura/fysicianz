import React from "react";
import Banner from "../../Components/Banner";
import FlexPiCard from "../../Components/FlexPiCard";
import ConsultationForm from "../../Components/ConsultationForm";
import CTA from "../../Components/CTA";

const VirtualAssistant = () => {
  return (
    <>
      <Banner
        title="Medical Virtual Assistants"
        imgPath={'/bg13.jpg'}
        desc="AI-driven assistants that enhance efficiency, streamline tasks, and support patient care."
      />

      <FlexPiCard
        title={
          <>
            <emr>Virtual Assistants</emr> – Smarter Healthcare Support
          </>
        }
        imgurl="/p12.jpg" imgClass={'w-full h-full md:w-400 md:h-150'}
        content={
          <>
            <p className="mb-6 text-[17px]  leading-relaxed">
              PhysicianMeds offers a wide range of services through medical virtual assistants designed to enhance efficiency for healthcare practices. Our AI-driven assistants streamline administrative tasks, support providers, and improve patient care.
            </p>

            <h3 className="text-xl font-montserrat font-semibold mb-3">
              Key Services
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-[17px]  leading-relaxed mb-6">
              <li>
                <strong>Patient Scheduling & Appointment Management: </strong> Automates scheduling, rescheduling, and cancellations to keep clinics running smoothly.
              </li>
              <li>
                <strong>Automated Follow-Ups & Reminders: </strong> Sends automated reminders for follow-ups, procedures, and upcoming visits.              </li>              
              <li>
                <strong>Medical Records Management: </strong> Maintains and updates accurate patient records for easy access.
              </li>              
              <li>
                <strong>Insurance Verification & Billing Assistance: </strong> Verifies insurance coverage and supports billing processes to reduce administrative workload.
              </li>              
              <li>
                <strong>Prior Authorization Support: </strong> Handles prior authorizations with payers and manages appeals for denied claims.              </li>
              <li>
                <strong>Telehealth Setup & Technical Support</strong> Facilitates virtual visits with patient onboarding and technical assistance.
              </li>
              <li>
                <strong>Patient Interaction & Inquiry Handling</strong> Manages basic patient inquiries, providing essential information and guidance.
              </li>
            </ul>
          </>
        }
      />

      <ConsultationForm />
      <CTA />
    </>
  );
};

export default VirtualAssistant;

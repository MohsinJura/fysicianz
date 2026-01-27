import React from "react";
import Banner from "../../Components/Banner";
import FlexPiCard from "../../Components/FlexPiCard";
import ConsultationForm from "../../Components/ConsultationForm";
import CTA from "../../Components/CTA";

const IncentiveProgram = () => {
  return (
    <>
      <Banner
        title="Incentive Programs"
        imgPath={'/bg14.jpg'}
        desc="At PhysicianMeds, our Incentive Programs are built to enhance performance, engagement, and loyalty across healthcare staff, patients, and partners. We design solutions that align with your organizational goals while driving measurable results."
      />

      <FlexPiCard
        title={
          <>
            <emr>Incentive Programs</emr> – Driving Motivation & Loyalty
          </>
        }
        imgurl="/f13.png"
        content={
          <>
            <h3 className="text-xl font-montserrat font-semibold mb-3">
              Key Features
            </h3>
            <ul className="list-disc ml-6 space-y-4 text-[17px]  leading-relaxed mb-6">
            <li>
                <strong>Custom Program Design –</strong> Tailored incentive models aligned
                with your healthcare practice objectives and performance metrics.
            </li>
            <li>
                <strong>Employee Incentives –</strong> Boost staff morale and productivity
                with recognition, rewards, and performance-based bonuses.
            </li>
            <li>
                <strong>Patient Loyalty Programs –</strong> Encourage retention with
                referral rewards, wellness milestones, and exclusive patient benefits.
            </li>
            <li>
                <strong>Partner Incentives –</strong> Strengthen collaborations with payers
                and partners through performance-driven rewards.
            </li>
            <li>
                <strong>Sales & Service Incentives –</strong> Motivate healthcare teams with
                commission structures, milestone recognition, and achievement-based rewards.
            </li>
            <li>
                <strong>Program Management –</strong> Comprehensive program setup,
                execution, monitoring, and ongoing optimization.
            </li>
            <li>
                <strong>Technology Integration –</strong> Seamless integration with
                existing systems, including automated reward distribution and mobile access.
            </li>
            <li>
                <strong>Analytics & Reporting –</strong> Leverage data insights to track
                success, measure ROI, and continuously improve engagement.
            </li>
            </ul>
          </>
        }
        desc={
          <>
            <p className="text-xl text-cblue font-bold  italic text-center">
            “PhysicianMeds Incentive Programs driving <emr> motivation, loyalty, and measurable success </emr> in healthcare.”    
            </p>
          </>
        }
      />

      <ConsultationForm />
      <CTA />
    </>
  );
};

export default IncentiveProgram;

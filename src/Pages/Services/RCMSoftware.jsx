import React from "react";
import Banner from "../../Components/Banner";
import FlexPiCard from "../../Components/FlexPiCard";
import ConsultationForm from "../../Components/ConsultationForm";
import CTA from "../../Components/CTA";

const RCMSoftware = () => {
  return (
    <>
      <Banner
        title="RCM Software"
        imgPath={'/bg12.jpg'}
        desc="Advanced AI-powered revenue cycle management to streamline workflows, minimize errors, and maximize revenue."
      />

      <FlexPiCard
        title={
          <>
            <emr>AI-Powered RCM Solution</emr> 
          </>
        }
        imgurl="/f11.png" imgClass={'w-full h-full'}
        content={
          <>
            <p className="mb-6 text-[17px]  leading-relaxed">
              In today’s fast-paced healthcare environment, efficient Revenue Cycle Management (RCM) is the backbone of financial success. PhysicianMeds offers an advanced AI-powered RCM solution designed to streamline workflows, minimize errors, and maximize revenue for healthcare providers.
            </p>

            <h3 className="text-xl font-montserrat font-semibold mb-3">
              Key Features
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-[17px]  leading-relaxed">
              <li>
                <strong>Automated Billing & Coding –</strong> AI-driven algorithms simplify billing and coding, reducing human errors and ensuring accurate claims submission.
              </li>
              <li>
                <strong>Claims Processing & Denial Management –</strong> Our system detects discrepancies, resolves issues faster, and reduces denials with predictive analytics that proactively address challenges.
              </li>
              <li>
                <strong>Enhanced Payment Collection –</strong> AI insights improve collection strategies, reducing delays and strengthening cash flow.
              </li>
            </ul>

            <h3 className="text-xl font-montserrat font-semibold mb-3">
              Benefits
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-[17px]  leading-relaxed">
              <li>
                <strong>Accuracy & Efficiency –</strong> Automated billing and coding speed up claims processing and improve reimbursement timelines.
              </li>
              <li>
                <strong>Cost-Effective –</strong> By lowering manual effort, our AI solution reduces administrative costs and increases profitability.
              </li>
              <li>
                <strong>Proactive Management –</strong> Real-time insights and predictive analytics prevent revenue disruptions before they occur.
              </li>
              <li>
                <strong>Customization & Scalability –</strong> Seamlessly integrates with existing systems, tailored to your needs, and scalable for growing practices.
              </li>
            </ul>
          </>
        }
        desc={
          <>
            <h1 className="text-xl font-montserrat font-semibold mb-3">Why partner with PhysicianMeds?</h1>
            <p className="text-[17px]  leading-loose">
              •	Boost financial performance with streamlined revenue cycles<br/>
              •	Improve patient satisfaction through faster and more accurate billing<br/>
              •	Free up providers to focus on delivering quality patient care while AI manages RCM complexities
            </p>
          </>
        }
      />

      <ConsultationForm />
      <CTA />
    </>
  );
};

export default RCMSoftware;

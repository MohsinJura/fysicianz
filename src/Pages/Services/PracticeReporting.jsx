import React from "react";
import Banner from "../../Components/Banner";
import FlexPiCard from "../../Components/FlexPiCard";
import ConsultationForm from "../../Components/ConsultationForm";
import CTA from "../../Components/CTA";

const PracticeReporting = () => {
  return (
    <>
      <Banner
        title="Practice Reporting"
        imgPath={'/bg17.jpg'}
      />

      <FlexPiCard
        title={
          <>
            <emr>Practice Reporting</emr> – Data-Driven Insights
          </>
        }
        imgurl="/p7.jpg" imgClass={'w-full h-full'}
        content={
          <>
            <p className="mb-6 text-[17px]  leading-relaxed">
              PhysicianMeds provides a comprehensive suite of reports designed to give healthcare practices actionable insights into financial performance, operational efficiency, and revenue cycle management. Our reporting solutions offer a clear view of your practice’s strengths and areas for improvement.
            </p>

            <h3 className="text-xl text-cblue font-montserrat font-semibold mb-3">
              Report Types
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-[17px]  leading-relaxed mb-6">
            <li>
                <strong>Revenue Report –</strong> Breaks down total revenue by payer, provider, 
                or service, helping you identify profitable areas.
            </li>
            <li>
                <strong>Accounts Receivable (AR) Report –</strong> Tracks outstanding balances 
                and AR aging to monitor cash flow and collections efficiency.
            </li>
            <li>
                <strong>Payer Mix Report –</strong> Analyzes revenue distribution across payers, 
                supporting better contract negotiations.
            </li>
            <li>
                <strong>Denial Analysis Report –</strong> Highlights claim denial trends, 
                allowing quick corrective actions to reduce revenue loss.
            </li>
            <li>
                <strong>Claims Rejection Report –</strong> Details rejected claims and identifies 
                root causes to improve submission accuracy.
            </li>
            <li>
                <strong>Days in AR Report –</strong> Measures average collection time, helping 
                optimize revenue cycle performance.
            </li>
            <li>
                <strong>Quality Measures Report –</strong> Monitors performance on quality 
                metrics, supporting compliance and value-based care.
            </li>
            <li>
                <strong>Compliance Audit Report –</strong> Ensures billing and coding practices 
                align with regulations, minimizing risks.
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

export default PracticeReporting;

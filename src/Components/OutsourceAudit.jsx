import React from 'react'
import RowBox from "./RowBox";

const OutsourceAudit = () => {
  return (
    <section>
      <div className="md:w-[90%] mx-4 md:mx-auto py-12">
        
        {/* First Row */}
        <RowBox
          title1="Outsource Medical Billing"
          title2="Outsourcing medical billing helps:"
          desc="We offer Medical Billing Services to practices of all sizes. PhysicianMeds takes care of all aspects of the revenue cycle process to ensure your practice avoids claim denials. As a leading medical billing company in the USA, we stand out among the top providers in the industry."
          points={[
            "Streamline the billing process for faster payments.",
            "Reduce billing errors and rejections, leading to fewer claim denials.",
            "Provide access to specialized billing expertise and technology.",
            "Enable healthcare providers to focus on patient care rather than administrative tasks.",
          ]}
          bgLeft="from-sky-100 to-blue-300"
          bgRight="from-red-100 to-pink-300"
          lTitleColor="text-reddish"
          rTitleColor="text-cblue"
          titleSize="text-2xl md:text-4xl"
        />

        {/* Second Row */}
        <RowBox
          title1="Why Are Medical Billing Audits Important?"  title2="Medical billing audits can help:"
          desc="Medical billing audits are crucial because they help identify errors and inconsistencies in billing. Regular audit services provided by a reputable medical billing company ensure compliance with regulations, reduce the risk of fraudulent billing, and strengthen your revenue cycle."
          points={[
            "Ensure compliance with regulations and reduce financial risks.",
            "Classify errors and discrepancies in billing processes.",
            "Identify areas for process improvement.",
            "Provide a clear picture of the financial health of the practice.",
            "Increase transparency and accountability in billing practices.",
          ]}
          bgLeft="from-fuchsia-200 to-rose-200"
          bgRight="from-cyan-200 to-indigo-100"
          lTitleColor="text-cblue"
          rTitleColor="text-reddish"
          titleSize="text-[22px] md:text-[28px]"
        />

      </div>
    </section>
  );
};

export default OutsourceAudit;

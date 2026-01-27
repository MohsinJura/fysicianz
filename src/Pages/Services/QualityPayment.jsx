import React from 'react'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'
import CTA from '../../Components/CTA'

const QualityPayment = () => {
  return (
    <>
      <Banner title={"Quality Payment Program (QPP) Services"} imgPath={"/bg10.jpg"} />

      <FlexPiCard
        title={ <emr> QPP Services </emr> }
        imgurl={"/f8.png"}
        content={
        <p className='max-w-7xl text-[17px] '>
            Additionally, we leverage advanced billing software and practice management systems to automate reminders through email, text, or phone calls, notifying patients of outstanding balances. Each reminder clearly highlights the amount due, payment deadlines, and payment options. We also maintain detailed records of every follow-up activity covering dates, times, methods, and any patient agreements or arrangements, such as updated statements or insurance coordination ensuring accountability and accurate tracking of patient communications.
            <br/> <br/>
            We also conduct in-depth performance analysis across all QPP categories Quality, Promoting Interoperability, Improvement Activities, and Cost to highlight strengths and pinpoint improvement areas. Using advanced data analytics and reporting tools, we track progress, monitor performance, and identify opportunities to optimize results. This includes updating clinical workflows, enhancing care coordination, and adopting evidence-based practices. We encourage continuous quality improvement activities and actively engage clinicians in the process to boost outcomes. Additionally, we help you maximize the use of certified EHR technology to streamline documentation, support reporting, enable data exchange, and strengthen care coordination. Our ongoing guidance ensures you stay aligned with evolving requirements, feedback, and performance benchmarks.
        </p>
        }
      />

      <ConsultationForm />
      <CTA />
    </>
  )
}

export default QualityPayment

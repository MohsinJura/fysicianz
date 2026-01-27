import React from 'react'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'
import CTA from '../../Components/CTA'

const DanialManagement = () => {
  return (
    <>
        <Banner title={"Denial Management"} imgPath={'/bg8.jpg'} />
        
        <FlexPiCard 
          title={'Denial Management Services'} 
          imgurl={'/p6.jpg'}imgClass={'w-full h-104'}
          content={<p className='max-w-7xl'>At PhysicianMeds, we know that even with a clean claim submission process, denials can still occur. That’s why our denial management services are designed to reduce revenue loss and strengthen your revenue cycle. We track and categorize denials based on common causes such as coding errors, missing documentation, eligibility issues, or timely filing. Our experts carefully review diagnosis codes, procedure codes, and modifiers to ensure all documentation is accurate and supports medical necessity. We also stay up-to-date with payer-specific appeal guidelines, submitting appeals within the required timeframe and providing strong supporting evidence to overturn denials. In addition, we monitor ERAs (Electronic Remittance Advices) to quickly identify denials, take corrective action, and prevent future revenue disruptions. By tracking key performance indicators such as denial rates, resolution times, and revenue impact, we continuously refine our approach to keep your practice financially strong.</p>} 
        />

        <FlexPiCard 
          title={<h1 className='pb-6'>Minimize Medical Billing <emr>Denials</emr></h1>} 
          imgurl={'/f4.png'} imgClass={" md:h-88"}
          content={
            <ul className='md:w-2xl text-[15px]  space-y-4'>
              <p className='leading-relaxed'><span className="font-bold">Identifying Denial Reasons – </span>  We analyze the root cause behind each denial to determine corrective action.</p>
              <p className='leading-relaxed'><span className="font-bold">Categorizing Denials – </span> Denials are categorized and routed to the appropriate teams for resolution.</p>
              <p className='leading-relaxed'><span className="font-bold">Resubmitting Claims – </span> Corrected claims are promptly resubmitted for insurance processing.</p>
              <p className='leading-relaxed'><span className="font-bold">Developing a Tracking Mechanism – </span> We monitor the progress of resubmitted claims with regular follow-up.</p>
              <p className='leading-relaxed'><span className="font-bold">Building a Preventive Mechanism – </span> We create checklists of top denial reasons and corrective strategies to reduce recurrence.</p>
              <p className='leading-relaxed'><span className="font-bold">Monitoring Future Claims Before Submission – </span> Our team performs a second-level review based on denial trends to prevent future issues.</p>
            </ul>
          }
        />

        <ConsultationForm />
        <CTA/>
      
    </>
  )
}

export default DanialManagement

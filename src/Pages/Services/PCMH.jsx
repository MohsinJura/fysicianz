import React from 'react'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'
import CTA from '../../Components/CTA'

const PCMH = () => {
  return (
    <>
      <Banner title={"Patient-Centered Medical Home (PCMH)"} imgPath={"/bg11.jpg"} />

      <FlexPiCard
        title={<emr>PhysicianMeds Services</emr>}
        imgurl={"/f9.png"} imgPath={'w-full h-full'}
        content={
         <p className='max-w-7xl text-[17px] '>
            PhysicianMeds provides efficient and reliable Patient-Centered Medical Home (PCMH) services by aligning billing practices with PCMH principles and optimizing workflows to support coordinated, patient-centered care. Our team is well-versed in the core principles of PCMH comprehensive care, patient-centeredness, coordinated care, accessibility, and quality & safety and understands their direct impact on billing, reimbursement, and compliance. Since PCMH emphasizes preventive care and chronic disease management, PhysicianMeds ensures your billing processes accurately document and secure reimbursement for preventive services such as wellness visits, screenings, and immunizations.
            <br/> <br/>
            PCMH also requires careful tracking and reporting of quality measures to demonstrate high-quality care delivery. We capture and manage the necessary data to support quality reporting requirements and performance improvement initiatives. Additionally, we educate patients about the PCMH model, highlighting the benefits of coordinated care and their role in health management through scheduling, care plan adherence, and engagement in their own wellness journey. To keep your practice aligned with evolving standards, PhysicianMeds continuously monitors PCMH processes, identifies areas for improvement, and adapts your workflows in line with updated PCMH guidelines and payer requirements.
            <span className="italic font-bold">“PhysicianMeds helps practices succeed with <emr>patient-centered, quality-driven care</emr> under the PCMH model.”</span>
        </p>
        }
      />

      <ConsultationForm />
      <CTA />
    </>
  )
}

export default PCMH

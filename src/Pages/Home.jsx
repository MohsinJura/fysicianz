import React from 'react'
import Hero from '../Components/Hero';
import OurServices from '../Components/OurServices';
import OutsourceAudit from '../Components/OutsourceAudit';
import BeingDoctor from '../Components/BeingDoctor';
import MedicalPractice from '../Components/MedicalPractice';
import ConsultationForm from '../Components/ConsultationForm';
import WhatPeopleSay from '../Components/WhatPeopleSay';
import CTA from '../Components/CTA';
import FlexText from '../Components/FlexText';
 
const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      
      <FlexText title='why are we ' highlight={'different'} 
        items={[
          'Our tailored billing solutions allow healthcare providers to see the complete picture of their Revenue Cycle Process.',
          'We help you submit clean claims with accurate codes. As a result, you get reimbursements on time.',
          'Our highly experienced, HIPAA Compliant Medical Billers and results-oriented approach allow us to deliver excellent results to help practices stay ahead of the competition.',
          'We help you maximize revenue and reduce compliances and costs while steering through the ever-changing healthcare industry.'
        ]
        } />

      <OutsourceAudit />
      <MedicalPractice />
      {/* <BeingDoctor /> */}
      <ConsultationForm />
      <WhatPeopleSay />
      <CTA />
    </>
  )
};
export default Home;
import React from 'react'
import CTA from '../../Components/CTA'
import Banner from '../../Components/Banner'
import CardAnimation from '../../Components/CardAnimation'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'

import CodingData from '../../data/CodingData.json';

const CodingServices = () => {
  return (
    <>
      <Banner title={'Medical Coding Services'} 
        imgPath={'/bg9.jpg'} 
        desc={'At PhysicianMeds, we provide reliable and accurate medical coding services to support healthcare providers in maintaining compliance, reducing claim denials, and maximizing reimbursements. Our certified coders stay current with the latest guidelines from CMS, AMA, and other leading organizations, ensuring every claim is processed according to industry standards.'}
      />

      <CardAnimation title={'Our Medical Coding Solutions'} cardData={CodingData} />

      <FlexPiCard 
        title={<h1>Why Choose <emr>PhysicianMeds?</emr></h1>} 
        desc={<p className='max-w-4xl mx-auto'>At PhysicianMeds, our mission is simple: deliver accurate, compliant, and efficient medical coding services that help healthcare providers focus on patient care while achieving financial stability.</p>}
        imgurl={'/s3.png'} imgClass={'h-60'}
        content={<ul className='list-disc text-xl  leading-12'>
          <li>Certified coding experts with deep industry knowledge</li>
          <li>Up-to-date with CMS, AMA, and specialty-specific guidelines</li>
          <li>Services tailored to individual practice needs</li>
          <li>Improved claim accuracy and faster reimbursements</li>
        </ul>} 
      />

      <ConsultationForm />
      <CTA />
    </>
  )
}

export default CodingServices

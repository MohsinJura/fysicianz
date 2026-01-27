import React from 'react'
import Banner from '../Components/Banner'
import AboutSection from '../Components/AboutSection'
import FlexText from '../Components/FlexText'
import ConsultationForm from '../Components/ConsultationForm'
import CTA from '../Components/CTA'
import Mission from '../Components/Mission'
import OfficeTimings from '../Components/OfficeTimings'

const AboutUs = () => {
  return (
    <>
      <Banner title={'@PhysicianMeds Wellness & Care.'} 
      desc={'Empowering healthcare professionals with smarter, faster, and compliant billing solutions. We turn complex medical billing into a seamless, secure, and trusted experience.'}
      imgPath={'/bg2.png'} visibile='block'  />
      <AboutSection />
      <Mission />
      <OfficeTimings />
      <FlexText title='Our ' highlight={'Vision'} 
        items={[
          'To redefine medical billing and revenue cycle management by delivering innovative, results-driven solutions that empower healthcare providers to achieve financial stability while focusing on exceptional patient care.',
          'PhysicianMeds aims to go beyond traditional billing, leveraging technology and expertise to minimize denials, maximize collections, and transform practice performance.', 
          'Our vision is to support providers in overcoming administrative challenges, ensuring profitability, and creating long-term sustainability in an evolving healthcare landscape.'
        ]
        } />
      <ConsultationForm />
      <CTA />

    </>
  )
}

export default AboutUs

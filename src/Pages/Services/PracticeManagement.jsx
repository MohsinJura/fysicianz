import React from 'react'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'
import CTA from '../../Components/CTA'

const PracticeManagement = () => {
  return (
    <div className="bg-back">
        <Banner 
            title={"Practice Management Services"} 
            desc={'PhysicianMeds has an experienced management team dedicated to streamlining and optimizing your medical practice operations.'}
            imgPath={"/bg7.jpg"}
        />

        <FlexPiCard 
            title={<emr>PM Services</emr>}
            imgurl={'/f10.png'} imgClass={'w-full h-full'}
            content={<div className='md:w-3xl'>
                <span className='text-lg font-montserrat font-bold'>Our Practice Management Services include:</span>
                <ul className='list-disc ml-8 mt-3 text-[18px] space-y-4 leading-relaxed'>
                    <li>Efficient staff hiring and onboarding</li>
                    <li>Strategic marketing support</li>
                    <li>Comprehensive billing & revenue cycle management</li>
                    <li>SEO and social media growth strategies</li>
                    <li>Detailed practice audits for performance optimization</li>
                    <li>Minimizing overhead to improve profitability</li>
                    <li>Day-to-day staff supervision and workflow management</li>
                    <li>Enhancing and optimizing medical services offered</li>
                </ul>
            </div>}
            desc={<p className='text-lg italic mt-5'>
                “PhysicianMeds helps practices run <emr>smarter, leaner, and more</emr> profitably.”
            </p>}
        />

      <ConsultationForm />
      <CTA />
    </div>
  )
}

export default PracticeManagement

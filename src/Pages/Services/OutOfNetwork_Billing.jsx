import React from 'react'
import CTA from '../../Components/CTA'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'

const OutOfNetwork_Billing = () => {
  return (
    <div className='bg-back'>
      <Banner 
        title={'Out-of-Network Medical Billing Services'} 
        imgPath={'/bg3.jpg'} 
      />

      <FlexPiCard 
        title={<h1>Our <emr>Out-of-Network</emr> Billing Process</h1>} 
        imgurl={'/f5.png'}  imgClass={'w-full h-full'}
        content={
            <div className='md:w-2xl mt-4'>
                <p className='  pb-3'>At PhysicianMeds, we specialize in helping healthcare providers manage out-of-network medical billing with accuracy and transparency. Our team ensures clear communication with patients, accurate documentation, and timely claim submission to maximize reimbursements while minimizing confusion.<br />With PhysicianMeds, providers gain a trusted partner for navigating complex out-of-network billing, reducing revenue loss, and ensuring patients receive transparent communication every step of the way.</p>
                <ul className='list-disc text-base ml-4 mt-1 space-y-3 leading-tight'>
                    <li><span className="font-bold">Insurance Verification – </span> Confirm out-of-network benefits upfront and set clear patient expectations.</li>
                    <li><span className="font-bold">Transparent Communication – </span> Explain costs, obtain consent, and provide itemized billing statements.</li>
                    <li><span className="font-bold">Accurate Documentation & Coding – </span> Maintain complete records and apply correct CPT/ICD codes to avoid denials.</li>
                    <li><span className="font-bold">Timely Claim Submission & Appeals – </span> Submit claims promptly, track progress, and file strong appeals for denied claims.</li>
                    <li><span className="font-bold">Dedicated Follow-Up – </span> Proactive monitoring of outstanding claims to reduce payment delays.</li>
                    <li><span className="font-bold">Negotiation Expertise – </span> Work with payers to secure fair reimbursement rates backed by data and proper documentation.</li>
                </ul>
                <h2 className='text-center mt-6 text-lg   md:text-xl font-bold italic'>"Let PhysicianMeds simplify your <emr>out-of-network billing</emr> today"</h2>
            </div>
        }
      />

      <ConsultationForm />
      <CTA />
    </div>
  )
}

export default OutOfNetwork_Billing

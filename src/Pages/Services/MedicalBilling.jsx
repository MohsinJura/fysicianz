import React from 'react'
import CTA from '../../Components/CTA'
import Banner from '../../Components/Banner'
import CardAnimation from '../../Components/CardAnimation'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'
import BillingData from '../../data/BillingData.json'

const MedicalBilling = () => {
  return (
    <>
      <Banner title={'Medical Billing Services'} imgPath={'/bg5.jpg'}
        desc={'At PhysicianMeds, we provide professional medical billing services that streamline your revenue cycle, reduce errors, and maximize reimbursements. Our billing experts and advanced systems handle every step of the process  from patient registration to claim submission and payment posting  so you can focus on patient care while we optimize your financial performance.'} />
            
      <CardAnimation 
        title={'Comprehensive Billing & RCM Solutions'}
        cardData={BillingData}
      />      
      
      <FlexPiCard 
        title={<>Benefits of PhysicianMeds <emr>Medical Billing Services</emr></>} 
        imgurl={'/s1.png'} imgClass={' h-60'}
        content={
          <ul className='text-[15px]  '>
            <p className='leading-tight'><span className='font-bold'>Fewer Claim Denials – </span> Detailed verification and coding accuracy reduce rejections.</p> <br/>
            <p className='leading-tight'><span className='font-bold'>Faster Reimbursements – </span> Quick claim submission improves payment cycles.</p> <br/>
            <p className='leading-tight'><span className='font-bold'>Lower Administrative Costs – </span> Efficient billing reduces overhead.</p> <br/>
            <p className='leading-tight'><span className='font-bold'>Scalable Solutions – </span> Perfect for solo practices and multi-location facilities.</p> <br/>
            <p className='leading-tight'><span className='font-bold'>Focus on Patient Care – </span> Free up time by outsourcing billing to trusted experts.</p>
          </ul>
        }  
      />

      <FlexPiCard 
        title={<h1 className='pb-6'>Why Choose <emr>PhysicianMeds </emr>for Medical Billing?</h1>} 
        imgurl={'/s2.png'} imgClass={'w-full h-72'}
        content={ <p className='max-w-7xl leading-relaxed text-lg'>
        At PhysicianMeds, we combine technology with expertise to deliver reliable medical billing solutions. Our team tracks key metrics like claim success rates, denial reasons, and reimbursement timelines to identify trends and continuously improve performance. <br /><br/>
        By partnering with PhysicianMeds, healthcare providers gain a trusted billing partner that ensures compliance, improves revenue, and reduces administrative burdens. From eligibility verification to payment posting, every step of your billing cycle is handled with precision, confidentiality, and care.
      </p> } />

      <ConsultationForm />
      <CTA />

    </>
  )
}

export default MedicalBilling

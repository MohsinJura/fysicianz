import React from 'react'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'
import CTA from '../../Components/CTA'

const PatientBilling = () => {
  return (
    <>
        <Banner title={'Patient Billing Services'} imgPath={'/bg4.jpg'} />
        <FlexPiCard 
            title={<emr>PB Services</emr>} 
            imgurl={'/f7.png'} imgClass={'w-full h-full'}
            content={<div className='md:w-2xl'>
                <p className='  pb-3'>PhysicianMeds offers reliable patient statement services by generating accurate and itemized statements that clearly display services provided, associated charges, insurance payments, and any outstanding balances. We carefully review each statement for accuracy before delivery, minimizing confusion and potential disputes. Our structured follow-up schedule ensures patients are billed on time, with priority placed on higher-value or urgent accounts. To improve reach, statements are delivered through multiple channels including traditional mail, email, patient portals, or secure messaging platforms. We also provide clear instructions on available payment methods to make the process simple and transparent.</p>
                <span className='text-xl font-montserrat font-bold'>Patient Statement Generation Services:</span>
                <ul className='list-disc ml-8 mt-2 text-lg space-y-4'>
                    <li className='leading-snug'><span className='font-bold'>Electronic Statements: </span> Creation and secure delivery of digital statements directly to patients.</li>
                    <li className='leading-snug'><span className='font-bold'>Printed Statements: </span> Generating printed statements within your practice management system for onward mailing.</li>
                </ul>
              </div>
            }
            desc={
            <p>
             Additionally, we leverage advanced billing software and practice management systems to automate reminders through email, text, or phone calls, notifying patients of outstanding balances. Each reminder clearly highlights the amount due, payment deadlines, and payment options. We also maintain detailed records of every follow-up activity covering dates, times, methods, and any patient agreements or arrangements, such as updated statements or insurance coordination ensuring accountability and accurate tracking of patient communications.
            </p>}
        />

        <ConsultationForm />
        <CTA />

    </>
  )
}

export default PatientBilling
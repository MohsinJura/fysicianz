import React from 'react'
import CTA from '../../Components/CTA'
import Banner from '../../Components/Banner'
import ConsultationForm from '../../Components/ConsultationForm'
import FlexPiCard from '../../Components/FlexPiCard'

const AccountsReceivable = () => {
  return (
    <section>
        <Banner title={'Accounts Receivable (AR) Follow-Up Services'} imgPath={'/bg18.jpg'} />

        <FlexPiCard 
            title={<emr>AR Follow-Up Services</emr>}
            imgurl={'/f2.png'} imgClass={'w-full h-full '}
            content={<div className='md:w-3xl'>
                <span className='text-lg font-montserrat font-bold'>Our AR Follow-Up Process:-</span>
                <ul className='list-disc ml-8 mt-3 text-[18px] space-y-7 leading-relaxed'>
                    <li><span className='font-bold'>Tracking Claim Status: </span> We follow up with insurance companies via phone calls and portals to monitor claim progress and resolve pending cases. </li>
                    <li><span className='font-bold'>Denial Management: </span>Our team reviews denial reasons, communicates with payers, and suppspanes additional information when required.</li>
                    <li><span className='font-bold'>Resubmission of Claims: </span>Denied claims are corrected and resubmitted quickly to secure payment from both primary and secondary insurance.</li>
                    <li><span className='font-bold'>Resolving Unpaid Claims: </span>We take timely and effective action to resolve unpaid claims, ensuring maximum collections and reduced outstanding balances.</li>
                </ul>
            </div>}
            desc={<p className='text-lg'>PhysicianMeds provides reliable accounts receivable (AR) follow-up services to ensure timely payments and reduce outstanding balances. Our team regularly reviews detailed Aging Reports to categorize unpaid claims by age, helping us prioritize older accounts that require immediate action. We thoroughly analyze claim denials and rejections, correct errors, and resubmit claims promptly. By actively contacting insurance payers through calls and online portals, we track the status of pending or denied claims and provide the necessary information to avoid further delays. In addition, we continuously monitor AR performance metrics, including average days in AR, aging ratios, and collection rates, to identify trends and implement strategies that strengthen your overall revenue cycle management.</p>}
        />

        <ConsultationForm />
        <CTA />
    </section>
  )
}

export default AccountsReceivable
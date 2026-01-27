import React from 'react'
import Banner from '../../Components/Banner'
import FlexPiCard from '../../Components/FlexPiCard'
import ConsultationForm from '../../Components/ConsultationForm'
import CTA from '../../Components/CTA'

const EnrollmentServices = () => {
  return (
    <>
        <Banner
            title={'Credentialing and Enrollment Services'}
            imgPath={'/bg6.jpg'}
        />

        <FlexPiCard 
            title={<h1 className='text-reddish'>c&es</h1>}
            imgurl={'/p25.jpg'} imgClass={'w-full h-full'}
            content={<div className='md:w-2xl'>
                <p className=' pb-3'>At PhysicianMeds, we provide efficient credentialing and enrollment services to help healthcare providers join major insurance networks and secure the best contracted rates. Our team manages the entire process — from verifying current credentialing status to initiating new enrollments with payors when needed. We also track and update professional licenses, certifications, and credentials, ensuring everything remains current and compliant. With PhysicianMeds handling credentialing, providers can focus on patient care while we streamline the path to faster reimbursements.</p>
                <span className='text-xl font-montserrat font-bold'>Our credentialing and enrollment services:</span>
                <ul className='list-disc ml-8 mt-2 text-lg'>
                    <li className='leading-10'>EDI/ERA Setup for Electronic Transactions</li>
                    <li className='leading-10'>IPA Enrollments</li>
                    <li className='leading-10'>Re‐credentialing/Revalidation</li>
                    <li className='leading-10'>License renewals</li>
                    <li className='leading-10'>Group and Individual NPI registration</li>
                    <li className='leading-10'>Hospital Privileges</li>
                    <li className='leading-10'>Accreditation</li>
                    <li className='tracking-tight'>Enrollment with all Commercial and Government Payers, Contract Renegotiation.</li>
                </ul>
              </div>}
            />

            <ConsultationForm />
            <CTA />

    </>
  )
}

export default EnrollmentServices
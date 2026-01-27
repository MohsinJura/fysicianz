import React from "react";
import Banner from "../../Components/Banner";
import FlexPiCard from "../../Components/FlexPiCard";
import ConsultationForm from "../../Components/ConsultationForm";
import CTA from "../../Components/CTA";

const DigitalMarketing = () => {
  return (
    <>
      <Banner
        title="Digital Marketing Services"
        imgPath={'/bg16.jpg'}
      />

      <FlexPiCard
        title={
          <>
            <emr>Digital Marketing</emr> Services for Healthcare Providers
          </>
        }
        imgurl="/f15.png" imgClass={'w-full h-full'}
        content={
          <>
            <p className="mb-6 text-[17px]  leading-relaxed">
            At PhysicianMeds, we specialize in healthcare digital marketing solutions that enhance online visibility, boost patient engagement, and help medical practices grow. Our tailored strategies ensure your practice builds a strong digital presence while attracting the right patients.
            </p>
            <h3 className="text-xl font-montserrat font-semibold mb-3">
                Our Core Digital Marketing Services
            </h3>
            <ol className="list-decimal ml-6 mb-5 space-y-2 text-[17px]  leading-relaxed">
            <li>
                <strong>SEO for Healthcare Providers –</strong> We optimize your website with 
                proven SEO strategies to improve search rankings, increase traffic, and drive 
                more patient inquiries and appointments.
            </li>
            <li>
                <strong>Social Media Marketing &amp; Management –</strong> From Facebook to 
                LinkedIn, we manage your social platforms with engaging content, educational 
                posts, and interactive campaigns to strengthen patient relationships.
            </li>
            <li>
                <strong>Local Marketing –</strong> We implement location-based strategies like 
                local SEO, geo-targeted ads, and optimized listings to attract patients from 
                your immediate area.
            </li>
            <li>
                <strong>Website Development &amp; Optimization –</strong> Our team designs 
                mobile-friendly, user-focused websites that highlight your services, build 
                credibility, and convert visitors into patients.
            </li>
            <li>
                <strong>Online Reputation Management –</strong> We monitor and manage online 
                reviews, resolve negative feedback, and promote positive patient experiences 
                to ensure a trustworthy brand image.
            </li>
            </ol>

            <h3 className="text-xl font-montserrat font-semibold mb-3">
            Why Choose PhysicianMeds?
            </h3>
            <ul className="list-disc ml-6 mb-6 space-y-2 text-[17px]  leading-relaxed">
            <li>
                <strong>Boost Visibility &amp; Traffic –</strong> Advanced SEO and local 
                strategies to grow patient reach.
            </li>
            <li>
                <strong>Stronger Engagement –</strong> Social media management that builds 
                trust and loyalty.
            </li>
            <li>
                <strong>Practice Growth –</strong> Optimized websites and online reputation 
                for better conversions.
            </li>
            </ul>

          </>
        }

      />

      <ConsultationForm />
      <CTA />
    </>
  );
};

export default DigitalMarketing;

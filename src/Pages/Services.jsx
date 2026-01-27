import React from "react";
import Specialities from "../Components/Specialities";
import Banner from "../Components/Banner";
import ConsultationForm from "../Components/ConsultationForm";
import CTA from "../Components/CTA";


const Services = () => {
  return (
    <>
      <Banner
        title={ <em> Versatile Range of{" "} <emr>Medical Billing Specialties</emr>{" "} to Meet Your Dynamic Needs </em>}
        // desc={'PhyscianMeds has a portfolio of expertise in versatile specialties of the medical billing industry. With decades of experience in medical billing, PM is simply unmatched in claiming high-end expertise in various specialties. Clients around the globe trust PM for its uncompromising quality services and dynamic specialties.'}
        imgPath={'/bg19.jpg'} desc={''}
      />
      <Specialities />
      <ConsultationForm />
      <CTA />
    </>
  );
};

export default Services;

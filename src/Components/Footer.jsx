import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { CgInstagram } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { LiaLinkedinIn } from 'react-icons/lia';
import LinksBox from './LinksBox';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
  const sections = [
    {
      title: "Services",
      links: [
        { name: "Medical Billing", path: "/services/amb" },
        { name: "Medical Coding", path: "/services/mc" },
        { name: "Credential & Enrollment", path: "/services/ce" },
        { name: "Accounts Receivable", path: "/services/arf" },
        { name: "Denial Management", path: "/services/dms" },
    ],
    },
    {
      title: "our company",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/abouts" },
        { name: "Contact", path: "/contacts" },
        { name: "Privacy Policy", path: "/privacy" },
      ],
    },
  ];

  return (
    <footer>
      <div className="w-screen bg-darkblue text-Bsilk md:px-9 px-5 py-9">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 justify-between items-start py-8">
          <div className="mx-12 md:mx-32 col-span-2 md:col-span-2">
            <img src='/logoo.png' />
          </div>
          {sections.map((section, index) => (
            <LinksBox key={index} title={section.title} links={section.links} />
          ))}
          <div className="col-span-2 lg:col-span-2 md:max-w-sm">
            <h4 className="text-cblue font-montserrat font-bold mb-4 uppercase">Weekly Newsletter</h4>
            <p className="text-sm font-inter mb-4">
              Subscribe to our newsletter and get the latest content right in your inbox.
            </p>
            <form className="flex rounded-full overflow-hidden" >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 focus:outline-none bg-gray-700 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="btn py-3 px-6 hover:bg-darkred bg-reddish"
              >
                Subscribe
              </button>
            </form>
            <div className='flex space-x-2 my-2 ml-2'>
              <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'><FaXTwitter size={20} color='black' /></div>
              <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'><FaLinkedinIn size={20} color='blue' /></div>
            </div>
          </div>
        </div>

        {/* <div className="w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-center">
            All Rights Reserved © 2025 PhysicianMeds. Developed by Devloprz.
          </span>
          <div className="flex space-x-4 my-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white"><LiaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white"><BsTwitterX /></a>
            <a href="#" className="text-gray-400 hover:text-white"><CgInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><GrYoutube /></a>
          </div>
        </div> */}
      </div>
        {/* Footer */}
        <hr className="h-1 bg-gradient-to-r from-rose-500 via-lime-500 to-fuchsia-600" />
        <div className="bg-cblue text-white py-8 text-center text-xs md:text-base font-montserrat">
          © {new Date().getFullYear()} <emb>Physician</emb><emr>Meds.</emr> All Rights Reserved. 
         <span> Developed by <span className="font-extrabold text-transparent bg-clip-text animate-rainbowSlide"> DevLoprz</span></span>
        </div>
    </footer>
  );
};

export default Footer;

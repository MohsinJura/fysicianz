import React from 'react';
import Banner from '../Components/Banner';

const ContactUs = () => {
  return (
    <>
      <Banner title={'Let’s Work Together!'}
       desc={'We would love to see how we can help you solve your problems in the best stress-free methods!'}
       imgPath={'/bg1.jpg'}
        />
      <div className='p-10'>
        <h2 className="text-4xl font-bold font-montserrat text-cblue mb-4 text-center">Contact Us</h2>

        <div className="flex flex-col md:flex-row justify-center px-10 md:px-24 py-10 gap-14">
          {/* Left Form Section */}
          <div className="w-full md:w-1/2">
            <form className="space-y-6"
              action="mailto:info@physicianmeds.com"
              method="POST"  encType="text/plain"
            >
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-1.5 border border-gray-300 rounded-sm placeholder:text-gray-600 text-lg font-lora"
              />
              <input
                type="text"
                placeholder="Company*"
                className="w-full p-1.5 border border-gray-300 rounded-sm placeholder:text-gray-600 text-lg font-lora"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full p-1.5 border border-gray-300 rounded-sm placeholder:text-gray-600 text-lg font-lora"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-1.5 border border-gray-300 rounded-sm placeholder:text-gray-600 text-lg font-lora"
              />
              <select
                className="w-full p-2 border border-gray-300 rounded-sm text-gray-600 text-lg font-lora"
              >
                <option>Medical Billing Service</option>
                <option>Revenue Cyle Management</option>
                <option>Danial Management</option>
                <option>AR Services</option>
                <option>Coding Services</option>
              </select>
              <input
                type="text"
                placeholder="Monthly Collections*"
                className="w-full p-1.5 border border-gray-300 rounded-sm placeholder:text-gray-600 text-lg font-lora"
              />
              <textarea
                placeholder="Message"
                className="w-full p-1.5 border border-gray-300 rounded-sm placeholder:text-gray-600 text-lg font-lora"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="btn-red font-montserrat px-5 py-2 "
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Contact Info Section */}
          <div className="w-full md:w-1/2 space-y-12">
            <div className='flex items-center gap-5'>
              <div className='w-16 h-16'>
                <img src='/call.png'  />
              </div>
              <div className='flex flex-col'>
                <h3 className="text-2xl font-bold">Call us at</h3>
                <p className="text-sm font-sog">
                  (xxx) xxx xxxx 
                </p>
              </div>
            </div>

            <div className='flex items-center gap-5'>
              <div className='w-16 h-16'>
                <img src='/email.png'  />
              </div>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-sm font-sog">info@physicianmeds.com</p>
              </div>
            </div>

            <div className='flex items-center gap-5'>
              <div className='w-16 h-16'>
                <img src='/location.png'  />
              </div>
              <div>
                <h3 className="text-xl font-bold">Address</h3>
                <p className="text-sm font-sog"> lahore </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default ContactUs;

import React from 'react';

const BeingDoctor = () => {
  return (
    <section>
      <div className="md:w-[85%] mx-4 md:mx-auto my-16 antialiased">
          <div className="flex flex-col md:flex-row items-center justify-center rounded-4xl shadow-xl overflow-hidden">

            <div className="bg-Bwhite md:w-1/2 p-5 md:p-9">
              <div className="px-5 py-6 md:p-8 border border-gray-300 rounded-4xl">
                <h2 className="text-2xl md:text-4xl font-bold font-montserrat mb-4 ">Being A Doctor</h2>
                <p className="opacity-80 font-inter md:text-justify mb-6">
                  I have to take care of my billing. So I can get my payments on time. Similarly, I need assistance to get payments for the work I do. In addition, my practice workflow needs to be seamless. Likewise, I want to reduce Claim Rejections and Denials. As a result, my practice should get every dollar it deserves with the help of a trusted medical billing company. Therefore, I can focus on my patients in a better way.
                </p>
                <button className="btn-blue px-4 py-2">
                  Let's Connect
                </button>
              </div>
            </div>

            <div className="md:w-1/2 h-full">
              <img
                src="/p4.jpg"
                alt="A female doctor smiling"
                className="w-full h-full object-fit md:rounded-tr-4xl rounded-br-4xl overflow-hidden"
              />
            </div>

          </div>
      </div>
    </section>
  );
};

export default BeingDoctor;

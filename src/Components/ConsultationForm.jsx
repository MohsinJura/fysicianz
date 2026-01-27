import React from 'react'

const ConsultationForm = () => {
  return (
    <section>
        <div className="md:w-[85%] mx-4 md:mx-auto my-14 md:my-30">
            <div className="text-center my-8">
                <h2 className="text-2xl md:text-4xl font-bold font-montserrat">
                    Schedule Your <emr>Free</emr> <em>Consultation Today</em>
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12 lg:p-16 max-w-4xl mx-auto">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    action="mailto:info@physicianmeds.com"
                    method="POST"
                    encType="text/plain"
                >
                    <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                    />
                    <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                    />
                    <input
                    type="text"
                    placeholder="Practice Name"
                    className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                    />
                    <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                    />
                    <input
                    type="text"
                    placeholder="Job Function"
                    className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                    />
                    <input
                    type="url"
                    placeholder="Website"
                    className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                    />
                    <div className="md:col-span-2">
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none focus:ring-1 focus:ring-cblue/20"
                        ></textarea>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600 mb-4">
                    By submitting your information, you consent to receive SMS messages from <strong>PhysicianMeds</strong> regarding your inquiry. Message frequency may vary. Message & data rates may apply. Reply STOP to opt-out or HELP for assistance. For more information, please review our Privacy Policy.
                    </p>
                    {/* <div className="flex justify-center items-center gap-2 mb-6">
                    <span className="text-xs text-gray-500">protected by reCAPTCHA</span>
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" className="h-6" />
                    </div> */}
                    <button type="submit" className="btn-blue px-5 py-2.5" > Send Message</button>
                </div>

            </div>

        </div>
    </section>
  )
}

export default ConsultationForm
import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section>
        <div className="md:w-[85%] mx-4 md:mx-auto py-16">
            <div className="bg-Bwhite rounded-4xl p-8 md:py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold font-montserrat mb-4">
                    Wait Before You Go...
                </h2>
                <h3 className="text-xl md:text-2xl font-bold font-inter text-cblue mb-4">
                    Get Our Tips Directly to Your Inbox!
                </h3>
                <p className="text-base font-inter mb-6 max-w-3xl mx-auto">
                    PhysicianMeds streamlines medical billing and revenue cycle management for practices nationwide.
                </p>
                <Link to="/contacts">
                    <button className="btn-red px-8 py-3 mt-4">
                        Send Inquiry
                    </button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CTA
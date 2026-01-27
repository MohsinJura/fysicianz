import React from 'react'
// Replaced react-icons/fa with a self-contained SVG to fix the compilation error.
const CheckCircleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.815a.75.75 0 0 0-1.22-.872l-3.236 4.536L9.584 12.35a.75.75 0 0 0-1.15-1.026l-1.928 2.222.951 1.1a.75.75 0 0 0 1.137.078l.024-.025 3.324-3.844a.75.75 0 0 0-.108-.052Z"
      clipRule="evenodd"
    />
  </svg>
);

const MedicalPractice = () => {
  return (
    <section>
        <div className="md:w-[85%] mx-4 md:mx-auto bg-darkblue text-white p-6 md:p-12 my-16 rounded-4xl">

          <h2 className="text-[22px] md:text-4xl font-bold font-montserrat text-center mb-6">
            Medical Practices Who Can Use Our Services
          </h2>
          <hr className='md:hidden' />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:text-lg font-inter mt-6 md:mt-10">
            <div>
              <ul className="space-y-7">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Medical practices of all sizes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Solo Physicians</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Independent Medical Practice Groups</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Medical Clinics</span>
                </li>
              </ul>
            </div>


            <div>
              <ul className="space-y-7">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>In-home health services providers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Laboratories</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Freestanding Emergency Centers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Hospitals</span>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-7">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Non-Emergency Medical Transportation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Physician Groups</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Hospital-owned Physician</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-cblue mr-2" />
                  <span>Urgent Cares</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default MedicalPractice
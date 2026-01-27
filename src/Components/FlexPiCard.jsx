import React from 'react';

const FlexPiCard = ({bgColor, title, imgurl, desc, content, imgClass}) => {
  return (
    <section className={` ${bgColor}`}>
      <div className='md:w-[80%] mx-8 md:mx-auto py-16 '>

        <h2 className="text-2xl md:text-4xl font-bold font-montserrat uppercase text-center mb-6">{title}</h2>
        <div className='w-full flex flex-col md:flex-row justify-center 
        items-start gap-8 md:gap-16'>
            <div className='leading-loose md:text-justify'>
                {content}
            </div>
            <div className={`${imgClass}`}>
                <img src={imgurl} alt="Healthcare Services" className="w-full h-full object-cover rounded-2xl overflow-hidden"/>
            </div>
        </div>
        <div className='font-inter md:text-justify leading-loose mt-6'> {desc} </div>

      </div>
    </section>
  )
}
export default FlexPiCard;




const CardAnimation = ({ title, cardData }) => {
  return (
    <section>
      <div className="md:w-[75%] mx-4 md:mx-auto text-center py-12">

        <div className="badge mb-4 "> {title} </div>

        <div>
          <ul className="list-none grid grid-cols-1 gap-0 ">
            {cardData.map((card, index) => (
              <li key={index} className="sticky top-0"
                style={{ paddingTop: `${(index + 1) * 3}em` }}
              >

                <div className={`${card.backColor} w-full md:h-[430px] flex flex-col md:flex-row rounded-2xl overflow-hidden p-2 md:p-6 gap-6`}>

                  {/* Left Content */}
                  <div className="md:w-1/2 p-6 md:p-12 flex flex-col gap-5">

                    <h2 className="text-xl md:text-2xl font-inter font-bold"> 
                        {card.title}{" "} <span className="text-white"> {card.subtitle} </span> 
                    </h2>

                    <p className="text-xl font-light text-white md:text-justify">
                        {card.description} 
                    </p>
                    
                  </div>

                  {/* Right Image */}
                  <div className="w-full md:w-1/2 h-60 md:h-full flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={`${card.title} Image`}
                      className=" w-full h-full rounded object-fit"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
export default CardAnimation;
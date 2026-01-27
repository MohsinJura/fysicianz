import React from 'react'
import Banner from '../Components/Banner'

const Blogs = () => {
  return (
    <div>
      <Banner
        title={'Insights & Resources'}
        desc={'Explore expert articles, industry trends, and best practices in healthcare and technology.'}
        imgPath={'/bg21.jpg'}
      />

      <div className="flex items-center justify-center py-20 px-6">
        <div className="w-[80%] text-center bg-white shadow-xl rounded-2xl p-10">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-4xl font-bold">
            🚀
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Blogs Coming Soon
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            We’re crafting insightful articles, tips, and resources for you. 
            Stay tuned — our blogs will be live shortly!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blogs

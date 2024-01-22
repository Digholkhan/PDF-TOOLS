import React from 'react'
import Tools from '../Tools/Tools'
import { Link } from 'react-router-dom'


const OurTools = () => {
  return (
    <div className='pt-32 pb-12'>  
        <div>
            <h1 className='text-center text-7xl capitalize  pb-6 '>Tools for everyone, our tools</h1>
            <p className='text-center text-xl text-gray-700 w-[700px] mx-auto pb-14'>Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly.</p>
              <div className='py-4'>
                <h2 className='text-center text-4xl capitalize  pb-4'>Dont know what you need?</h2>
                <p className='text-center pb-8 text-gray-700  text-lg capitalize'>just upload your files here</p>
                <div className='text-center'>
                  <Link to='/drop'>
                    <button className='p-4 px-12 bg-blue-500 focus:ring-4 text-white text-lg font-medium rounded-lg hover:bg-blue-700'>Upload Your File</button>
                  </Link>
                </div>
              </div>
          </div>
          <Tools></Tools>
    </div>
  )
}

export default OurTools
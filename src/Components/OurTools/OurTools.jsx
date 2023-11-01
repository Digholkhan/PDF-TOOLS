import React from 'react'
import Tools from '../Tools/Tools'
import { Link } from 'react-router-dom'


const OurTools = () => {
  return (
    <div className='pt-32 pb-12'>
        <div>
            <h1 className='text-center text-7xl capitalize  pb-14 '>Tools for everyone, our tools</h1>
              <div className='py-4'>
                <h2 className='text-center text-4xl capitalize  pb-8'>Dont know what you need?</h2>
                <div className='text-center'>
                  <Link to='/drop'>
                    <button className='py-4 px-20 bg-blue-500 focus:ring-4 text-white text-lg font-medium rounded-lg hover:bg-blue-700'>Upload Your File</button>
                  </Link>
                </div>
                <p className='text-center pt-4 text-gray-700  text-lg capitalize'>just upload your files here</p>
              </div>
          </div>
          <Tools></Tools>
    </div>
  )
}

export default OurTools
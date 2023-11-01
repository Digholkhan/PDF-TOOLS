import React, { Children } from 'react'

const Tool = ({children,heading}) => {
  return (
    <div>
        <div className='text-center  hover:bg-blue-300 border-2 border-gray-300 py-8 px-8 group duration-200 '>
                <div className='w-20 h-20 mx-auto mb-4 group-hover:scale-110 duration-200'>
                    {children}
                </div>
                <h1 className='text-2xl capitalize'>{heading}</h1>
                <p className='w-40  text-gray-600 text-justify text-base  pt-2 '>Convert files from and to PDF easily with our free PDF converter</p>
               </div>
        </div>
  )
}

export default Tool
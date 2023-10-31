import React from 'react'
import Container from '../Container'
import {FiUpload} from 'react-icons/fi'
import Flex from '../Flex'

const Drop = () => {
  return (
    <div className='py-20 bg-blue-500'>
        
        <Container>
        <h1 className='text-5xl  text-center pb-20 font-bold text-white uppercase'>Convert to PDF</h1>
        <div class="flex items-center justify-center w-full border-dashed border-2 border-gray-200 rounded-md  outline outline-gray-300 outline-offset-4">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-300 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 duration-200 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center py-10">
                    
                    <Flex className='py-10'>
                    <FiUpload className='text-6xl text-gray-500'/>
                    </Flex>
                    <div className='pb-10'>
                        <input class="" type="file" name='Choose'/>
                    </div>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">PDF, PPTX, WORD , PNG, JPG </p>
                </div>
                

                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div>
        <p className='text-xl capitalize pt-10 text-gray-200  text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quaerat dicta rem eum aliquid doloribus quae! Quae placeat ipsam exercitationem voluptates sequi accusantium dolores laboriosam. Ipsam, quo numquam eius amet optio et molestiae ducimus rem, rerum aperiam aut iure veniam at animi quae dignissimos. Modi voluptatibus fuga dolores excepturi.</p>
        </Container>

    </div>
  )
}

export default Drop
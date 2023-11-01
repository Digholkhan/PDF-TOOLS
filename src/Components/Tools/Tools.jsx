import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Tool from '../../Tool'


const Tools = () => {
  return (
    <div className='pb-20'>
        <Container>
          
          <div className='pb-12 pt-8 w-[800px] mx-auto'>           
            <div class="text-sm font-medium text-center  text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul class="flex justify-center ">
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent  rounded-t-lg hover:text-blue-600 hover:font-bold hover:border-blue-600 duration-200 ease-linear">All Tools</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent  rounded-t-lg hover:text-blue-600 hover:font-bold hover:border-blue-600 duration-200 ease-linear">PDF Tools</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4  border-b-2 border-transparent rounded-t-lg 
                         hover:text-blue-600 hover:font-bold  hover:border-blue-600 duration-200 ease" aria-current="page">Image processing Tools</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent  rounded-t-lg hover:text-blue-600 hover:font-bold hover:border-blue-600 duration-200 ease-linear">Networking Tools</a>
                    </li>
                </ul>
            </div>
          </div>
            <Flex className='gap-x-8 justify-center flex-wrap gap-y-10'>
              
               <Link to='/drop'>
               <Tool heading='PDF Converter'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#F23030"></path><rect x="7.5" y="7.5" width="6" height="8" stroke="white"></rect><rect x="18.5" y="16.5" width="6" height="8" stroke="white"></rect><path d="M16 10L15.6464 9.64645L15.2929 10L15.6464 10.3536L16 10ZM22 10H22.5V9.5H22V10ZM18.3536 8.35355L18.7071 8L18 7.29289L17.6464 7.64645L18.3536 8.35355ZM17.6464 12.3536L18 12.7071L18.7071 12L18.3536 11.6464L17.6464 12.3536ZM16 10.5H22V9.5H16V10.5ZM21.5 10V15H22.5V10H21.5ZM16.3536 10.3536L18.3536 8.35355L17.6464 7.64645L15.6464 9.64645L16.3536 10.3536ZM15.6464 10.3536L17.6464 12.3536L18.3536 11.6464L16.3536 9.64645L15.6464 10.3536Z" fill="white"></path><path d="M16 22L16.3536 22.3536L16.7071 22L16.3536 21.6464L16 22ZM9 22H8.5L8.5 22.5H9L9 22ZM13.6464 23.6464L13.2929 24L14 24.7071L14.3536 24.3536L13.6464 23.6464ZM14.3536 19.6464L14 19.2929L13.2929 20L13.6464 20.3536L14.3536 19.6464ZM16 21.5L9 21.5L9 22.5L16 22.5V21.5ZM9.5 22L9.5 17L8.5 17L8.5 22H9.5ZM15.6464 21.6464L13.6464 23.6464L14.3536 24.3536L16.3536 22.3536L15.6464 21.6464ZM16.3536 21.6464L14.3536 19.6464L13.6464 20.3536L15.6464 22.3536L16.3536 21.6464Z" fill="white"></path></svg>
                </Tool>    
               </Link>
               <Link to='drop'>
                  <Tool heading='Merge PDF'>
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#7961F2"></path><path d="M13 21H8V7H19V11" stroke="white"></path><rect x="13.5" y="11.5" width="11" height="13" stroke="white"></rect><path d="M19 15V21" stroke="white"></path><path d="M16 18H22" stroke="white"></path></svg>
                  </Tool>
               </Link>
                <Link to='drop'>
                <Tool heading='Compress PDF'>
                   <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#F23030"></path><path d="M7.68718 7.68718L15.8787 9.73507L16 9.76539L16.1213 9.73507L24.3128 7.68718L22.2649 15.8787L22.2346 16L22.2649 16.1213L24.3128 24.3128L16.1213 22.2649L16 22.2346L15.8787 22.2649L7.68718 24.3128L9.73507 16.1213L9.76539 16L9.73507 15.8787L7.68718 7.68718Z" stroke="white"></path></svg>
                  </Tool>
               
               </Link>
               <Link to='/drop'>
               <Tool heading='split PDF'>
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#7961F2"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M9.38925 24.7847C11.2743 25.4574 13.3599 24.5013 14.0474 22.6493L16 17.3898L17.9526 22.6493C18.6401 24.5013 20.7257 25.4574 22.6108 24.7847C24.4958 24.112 25.4666 22.0653 24.7791 20.2133C24.0915 18.3612 22.006 17.4052 20.1209 18.0779C19.2467 18.3898 18.5691 18.9972 18.1624 19.7437L16.6442 15.6544L19.8571 7L19.1194 7.37144C18.575 7.64549 18.1561 8.1114 17.9466 8.67569L16 13.9191L14.0534 8.67569C13.8439 8.1114 13.425 7.64549 12.8806 7.37144L12.1429 7L15.3558 15.6544L13.8376 19.7437C13.4309 18.9972 12.7533 18.3898 11.8791 18.0779C9.99404 17.4052 7.9085 18.3612 7.22094 20.2133C6.53338 22.0653 7.50417 24.112 9.38925 24.7847ZM9.80423 23.6669C11.061 24.1153 12.4513 23.478 12.9097 22.2433C13.3681 21.0086 12.7209 19.6441 11.4641 19.1957C10.2074 18.7472 8.81706 19.3846 8.35869 20.6193C7.90032 21.854 8.54751 23.2184 9.80423 23.6669ZM22.1958 23.6669C23.4525 23.2184 24.0997 21.854 23.6413 20.6193C23.1829 19.3846 21.7926 18.7472 20.5359 19.1957C19.2791 19.6441 18.6319 21.0086 19.0903 22.2433C19.5487 23.478 20.939 24.1153 22.1958 23.6669Z"></path></svg> 
                </Tool>
               </Link>
               <Link to='/drop'>
                 <Tool heading='excel to PDF'>
                 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#00CC44"></path><path d="M13.6106 15.5714L7 25H11.6726L15.8938 18.7731L20.0354 25H25L18.3894 15.5966L24.469 7H19.9027L16.0531 12.7479L12.3363 7H7.50442L13.6106 15.5714Z" fill="white"></path></svg>
                 </Tool>
               </Link>
               <Link to='/drop'>
                 <Tool heading='PPT to PDF'>
                   <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#FF8000"></path><path d="M12.4148 15.4706V10.0756H15.8453C16.3515 10.0756 16.8389 10.1092 17.3076 10.1765C17.7762 10.2437 18.1886 10.3782 18.5448 10.5798C18.901 10.7647 19.1822 11.0336 19.3884 11.3866C19.6134 11.7395 19.7258 12.2017 19.7258 12.7731C19.7258 13.3445 19.6134 13.8067 19.3884 14.1597C19.1822 14.5126 18.901 14.7899 18.5448 14.9916C18.1886 15.1765 17.7762 15.3025 17.3076 15.3697C16.8389 15.437 16.3515 15.4706 15.8453 15.4706H12.4148ZM8 7V25H12.4148V18.5462H17.0545C18.3105 18.5462 19.379 18.3866 20.2601 18.0672C21.1412 17.7311 21.8535 17.2941 22.3972 16.7563C22.9596 16.2185 23.3626 15.605 23.6063 14.916C23.8688 14.2101 24 13.4958 24 12.7731C24 12.0336 23.8688 11.3193 23.6063 10.6303C23.3626 9.94118 22.9596 9.32773 22.3972 8.78992C21.8535 8.2521 21.1412 7.82353 20.2601 7.5042C19.379 7.16807 18.3105 7 17.0545 7H8Z" fill="white"></path></svg>
                 </Tool>
               </Link>
               <Link to='/drop'>
                 <Tool heading='word to PDF'>
                 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#3D99F5"></path><path d="M23.0874 25L28 7H24.0597L21.0661 19.4034H21.0149L17.8934 7H14.1322L10.9595 19.2521H10.9083L8.01706 7H4L8.83582 25H12.9041L15.9488 12.7479H16L19.0959 25H23.0874Z" fill="white"></path></svg>
                 </Tool>
               </Link>
              
               <Link to='/drop'>
                <Tool heading='JPG to PDF'>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#FFB700"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.33323 10L18.6666 19.2969L22.6058 15.373L32 23.5469V27L22.7273 19.0085L18.6666 23.0534L9.33323 13.7565L0 23.0156V19.2969L9.33323 10Z" fill="white"></path><circle cx="25" cy="7" r="4" fill="white"></circle></svg>
                </Tool>
               </Link> 

               <Link to='/drop'>
                <Tool heading='edit PDF'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#0FC0C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15 13.7778L22.7778 6L25 8.22222L17.2222 16H15V13.7778Z" fill="white"></path><path d="M20 7.5H7.5V24.5H21.5V14" stroke="white"></path><path d="M9 16.5H14" stroke="white"></path><path d="M9 22.5H14" stroke="white"></path><path d="M11.5 16.5V22.5" stroke="white"></path></svg>
                </Tool>
               </Link>

               <Link to='/drop'>
                <Tool heading='PDF scanner'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#0055FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 8L21 11H25C25.5523 11 26 11.4477 26 12V23C26 23.5523 25.5523 24 25 24H7C6.44772 24 6 23.5523 6 23V12C6 11.4477 6.44772 11 7 11H11L13 8H19ZM18.4648 9H13.5352L11.5352 12H7V23H25V12H20.4648L18.4648 9ZM16 13C18.4853 13 20.5 15.0147 20.5 17.5C20.5 19.9853 18.4853 22 16 22C13.5147 22 11.5 19.9853 11.5 17.5C11.5 15.0147 13.5147 13 16 13ZM16 14C14.067 14 12.5 15.567 12.5 17.5C12.5 19.433 14.067 21 16 21C17.933 21 19.5 19.433 19.5 17.5C19.5 15.567 17.933 14 16 14ZM22.5 13C23.3284 13 24 13.6716 24 14.5C24 15.3284 23.3284 16 22.5 16C21.6716 16 21 15.3284 21 14.5C21 13.6716 21.6716 13 22.5 13Z" fill="white"></path></svg>
                </Tool>
               </Link>
               <Link to='/drop'>
                <Tool heading='number pages'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#0FC0C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.948 17V16.063H12.0346V13.1732H11.0976V12.4567C11.6409 12.3543 11.9874 12.2126 12.3417 12H13.1921V16.063H14.1291V17H10.948Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0541 21V20.3509L19.6174 19.8154C20.5623 18.9061 21.187 18.2163 21.187 17.6306C21.187 17.1515 20.9165 16.8887 20.4915 16.8887C20.136 16.8887 19.8655 17.1283 19.6182 17.391L19 16.7805C19.4869 16.2628 19.9428 16 20.6461 16C21.6121 16 22.2689 16.6182 22.2689 17.5611C22.2689 18.3879 21.4961 19.2689 20.7002 20.1036C20.9474 20.0726 21.2875 20.0417 21.5193 20.0417H22.5085V21H19.0541Z" fill="white"></path><rect x="7.5" y="7.5" width="10" height="13" stroke="white"></rect><path d="M18 11.5H24.5V24.5H14.5V20" stroke="white"></path></svg>
                </Tool>
               </Link>
               <Link to='/drop'>
                <Tool heading='e sign PDF'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#E667E6"></path><path d="M23.4722 14.1939L16 26.0616L8.52982 14.1972L9.48205 9.5H22.5856L23.4722 14.1939Z" stroke="white"></path><path d="M16 17.6318V25.5002" stroke="white"></path><path d="M9.33713 9.50205L7.73549 5.49795H24.2645L22.6629 9.50205H9.33713Z" stroke="white" stroke-width="0.995907"></path><circle cx="16" cy="15" r="3" stroke="white"></circle></svg>
                </Tool>
               </Link> 
               <Link to='/drop'>
                <Tool heading='Protect PDF'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#FF5975"></path><path d="M15.7888 7.61318L16 7.534L16.2112 7.61318L17.2307 7.99551L20.3244 9.15566L23.4182 10.3158L24.4377 10.6981L24.4943 10.7194C24.3596 16.4023 22.2126 19.8326 20.1128 21.85C19.0361 22.8844 17.9634 23.5551 17.1626 23.9662C16.7624 24.1716 16.4311 24.3117 16.2027 24.3997C16.1259 24.4292 16.0608 24.4528 16.0087 24.4711C15.9558 24.4507 15.8896 24.4243 15.8113 24.3914C15.5818 24.295 15.2494 24.143 14.848 23.9242C14.0447 23.4864 12.9691 22.7833 11.8899 21.7261C9.78492 19.6641 7.64168 16.2331 7.50585 10.7193L7.56228 10.6981L8.58181 10.3158L11.6756 9.15566L14.7693 7.99551L15.7888 7.61318Z" stroke="white"></path></svg>
                </Tool>
               </Link> 
               <Link to='/drop'>
                <Tool heading='Delete Pages'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#0FC0C5"></path><path d="M11.5 9.5V6.5H20.5V9.5" stroke="white"></path><path d="M7 9.5H25" stroke="white"></path><path d="M10.5 24.5L9.5 11.5H22.5L21.5 24.5H10.5Z" stroke="white"></path><path d="M14.5 14V21" stroke="white"></path><path d="M17.5 14V21" stroke="white"></path></svg>
                </Tool>
               </Link> 
                              
            </Flex>
        </Container>
    </div>
  )
}

export default Tools
import React from 'react';
import Link from 'next/link';
import {
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
  } from "react-icons/ai";

const Footer = ({darkMode}) => {
  
  return (
    <footer id="footer"  className={`bg-neutral-400 ${darkMode ? 'dark:bg-gray-800' : ''} text-white text-center -mx-10 sticky top-[100vh]`}>
        
      <div className='py-8'>
        <ul className='items-center justify-center sm:text-xl'>
          <li className='py-2 sm:py-3 md:py-4 lg:py-5'>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/about">
                About
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/treatments">
                Treatments
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/pricing">
                Pricing
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/mobile">
                Mobile
            </Link>
          </li>
          <li className='py-2'>
            <Link href="/contact">
                Contact
            </Link>
          </li>
        </ul>
      </div>

      <p className='py-2 text-sm sm:text-md md:text-lg lg:text-xl'>
        &copy; Milena Flores | All rights reserved
      </p>

      <div className="text-3xl flex justify-center gap-10 py-2 text-white">
        <Link
          href="https://www.linkedin.com/in/milena-flores-4307b6175/"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://www.instagram.com/massageinmanchester/"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
        <Link 
            href="https://www.facebook.com/milenamassage1" 
            target="_blank"
        >
          <AiFillFacebook />
        </Link>
      </div>
      
      <p className='mt-6 text-xs sm:text-md md:text-lg lg:text-xl'>
        Designed and developed by <br />
        <a href="https://github.com/h-chagas">Hugo Chagas</a>
      </p>
    </footer>
  )
}

export default Footer
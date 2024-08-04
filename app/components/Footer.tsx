import Link from 'next/link';
import React from 'react'

const links = [
  { name: "FACEBOOK", href: "/" },
  { name: "TWITTER", href: "/Wavy" },
  { name: "INSTAGRAM", href: "/Straight" },
  { name: "PINTEREST", href: "/Teens" },
];

export const Footer = () => {
  return (
    <footer className='md:flex md:flex-col justify-center items-center bg-purple-100 py-8 px-8 md:px-32 maxContainer text-gray-700 '>
      <div className='md:flex justify-center items-center gap-5 mb-10'>
        <Link href="/">
          <h1 className="headerFont font-bold">
            Beauty<span className="text-[#B444FF]">Glow</span>
          </h1>
        </Link>
        
        <div className='text-[14px]'>
          <h4 className='font-bold'>Customer Services</h4>
          <p>About Us</p>
          <p>Terms & Condition</p>
          <p>FAQ</p>
          <p>Privacy and Policy</p>
        </div>
      </div>
      <div className='flex  max-sm:flex-col-reverse gap-5 md:gap-20 text-[12px]'>
        <p>&Copy 2024 BEAUTYGLOW. All Rights Reserved. Reliance Retail Ltd.</p>
        <div className='flex gap-4'>
        {
          links.map((link, index) =>(
            <div key={index} className='text-[10px]'>
              <Link href={link.href}> 
                <p>{link.name}</p>
              </Link>
            </div>
          ))
        }
      </div>
      </div>
      
    </footer>
  )
}

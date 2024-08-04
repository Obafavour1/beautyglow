import React from 'react'
import Image from 'next/image'
import security from "../assests/security.svg"
import transparency from "../assests/trans.svg"
import shipping from "../assests/shipping.svg"
import certified from "../assests/certified.svg"


export const MidPage = () => {
  return (
    <section className='py-3 md:h-[300px] maxContainer px-32'>
      <h2 className='font-jos w-[50vw] md:text-[28px] '>What we offer</h2>
      <div className='grid md:grid-cols-4 gap-3 text-[12px] place-content-center md:h-[300px] '>
        
        <div className='card'>
          <Image src={certified} alt='' width={40} height={40} />
          <h3>Certified</h3>
          <p>Available certificate of authenticity</p>
        </div>
        <div className='card'>
          <Image src={security} alt='' width={40} height={40} />
          <h3>Secure</h3>
          <p>Certified market since 2024</p>
        </div>
        <div className='card'>
          <Image src={shipping} alt='' width={40} height={40} />
          <h3>Shipping</h3>
          <p>Free, Fast and reliable worldwide</p>
        </div>
        <div className='card'>
          <Image src={transparency} alt='' width={40} height={40} />
          <h3>Transparent</h3>
          <p>Hassle Free return policy</p>
        </div>
      </div>
    </section>
  )
}

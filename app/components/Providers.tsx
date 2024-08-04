"use client";

import { CartProvider  } from "use-shopping-cart"
import { ReactNode } from "react"

export default function CartProviders ({children}:{children: (ReactNode)[]}) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe= {process.env.BEAUTY_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/error"
      currency="USD"
      billingAddressCollection={true} 
      shouldPersist={true}
      language="en-US"    
    >

     {children}
    </CartProvider>
  )
}

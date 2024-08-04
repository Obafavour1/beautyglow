"use client"
import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps ={
  children: ReactNode
}

type CartItems ={
  key:number
  quantity:number
}

export type ShoppingCartContext = {
  getItemQuantity: (key:any) => number
  increaseQuantity: (key:number) => void
  decreaseQuantity: (key:number) => void
  removeFromCart: (key:number) => void
}

const ShoppingCartContext = createContext({});

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
  const [cartItems, setCartitems] =useState<CartItems[]>([])

  function getItemQuantity(key:any){
    return cartItems.find(item => item.key === key)?.quantity || 0
  }
  
  function increaseQuantity(key:number, quantity:number){
    setCartitems(currItems => {
      if (currItems.find(item => item.key=== key) ==null) {
        return [...currItems, {key, quantity:1}]
      }else{
        return currItems.map(item =>{
          if (item.key===key) {
            return{...item,quantity: item.quantity + 1}
          }else{
            return item
          }
        })
      }
    })
  }

  function decreaseQuantity(key:number, quantity:number){
    setCartitems(currItems => {
      if (currItems.find(item => item.key=== key)?. quantity === 1) {
        return currItems.filter (item => item.key !== key)
      }else{
        return currItems.map(item =>{
          if (item.key === key) {
            return{...item,quantity: item.quantity - 1}
          }else{
            return item
          }
        })
      }
    }
      
    )
  }

  function removeFromCart(key:number){
    setCartitems(currItems =>{
      return currItems.filter(item => item.key !== key)
    })
  }

  return (
    <ShoppingCartContext.Provider value={{getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart}}>
    {children}
    </ShoppingCartContext.Provider>

  )
}
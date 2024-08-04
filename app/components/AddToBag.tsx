"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { urlFor } from "../lib/sanity";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
  key:any;
};

//  interface ShoppingCartContext   {
//   getItemQuatity: (key:any)
// };

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  key
}: ProductCart) {

  // const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
    key
  };

  // const {getItemQuantity:{}}  = useShoppingCart()
  // const quantity = getItemQuantity(key)

  
  return (
   <div>
      <Button
      onClick={() => {
        // addItem(product), handleCartClick();
      }}>
      Add To Cart
    </Button>

    {/* <div>
      <button onClick={()=> increaseQuantity(data._id)}>-</button>
      <div>quantity</div>
      <button onClick={()=> decreaseQuantity(data._id)}>+</button>

    </div> */}
   </div>
  );
}
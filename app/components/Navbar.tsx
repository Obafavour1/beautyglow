'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cart from "../assests/cart.svg"
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { HamIcon, MenuIcon, LogOutIcon, LogInIcon } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Human Hair", href: "/Human " },
  { name: "Synthetic", href: "/Synthetic " },
  // { name: "Blend", href: "/Human "},
  { name: "Services", href: "/Services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const pathname = usePathname();
  // const { handleCartClick } = useShoppingCart();
  return (
    <header className=" w-screen flex justify-center items-center">
      <div className="fixed top-2 z-50  border-[1px] bg-white shadow-md rounded-md py-2 md:mx-auto w-[95%] md:w-[80%]">
        <div className="flex  items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="headerFont font-bold">
              Beauty<span className="text-[#B444FF]">Glow</span>
            </h1>
          </Link>

          <nav className="hidden text-[18px] font-concert gap-12 lg:flex 2xl:ml-16">
            {links.map((link:{name:string; href:string}, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    className=" font-semibold text-[#B444FF]"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[16px] font-semibold text-gray-600 transition duration-100 hover:text-[#B444FF]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              variant={"none"}
              // onClick={()=> handleCartClick()}
              className=" "
            >
              <Image src={cart} alt='cart' width={40} height={50}/>
              {/* // <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              //   Cart
              // </span> */}
            </Button>
          </div>

          <div onClick={()=> setOpen(!open)} className=" md:hidden">
            <Button
              variant={"none"}
              // onClick={()=> handleCartClick()}
              className=" "
            >
              <MenuIcon className="text-purple-700"/>
              {/* <Image src={cart} alt='cart' width={40} height={50}/> */}
              {/* // <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              //   Cart
              // </span> */}
            </Button>

            <div className={`${open ? "visible w-60%" : "invisible"} `}>
              <div className={` md:hidden  flex flex-col pl-5 transition-all top-0 right-0 ${open ? " w-[60%] translate-x-0" :"w-[100%] translate-x-full"} fixed duration-300 bg-purple-950 h-screen pt-5 gap-10`}>
              <div  className="flex justify-between">
                <div>

                </div>
                <LogOutIcon className="mr-8 text-white" />
              </div>
              <div className="flex flex-col gap-8">
                {links.map((link:{name:string; href:string}, idx) => (
                  <div key={idx} className="">
                    {pathname === link.href ? (
                      <Link
                        className=" font-semibold text-[#B444FF]"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[16px] font-semibold text-gray-400 transition duration-100 hover:text-[#B444FF]"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              </div>
              
              
            </div>
          </div>

          
        </div>
      </div>
    </header>
  );
}
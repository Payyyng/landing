import React from "react";
import Image from "next/image";
import Logo from "@/assets/payyng_logo.png";
import Link from "next/link";
import Button from '@/components/button/button'

function NavBar() {
  return (
    <div className="px-5 md:px-20">
      <div className="flex justify-between items-center py-5">
        <Link href="#">
          <Image src={Logo} width={100} height={100} alt="Payyng Logo" />
        </Link>
        <div className="flex justify-center items-center ">

         <a href="https://6wrqf0my2ix.typeform.com/to/YGTXOmIc">
         <button className=" mx-5 hover:bg-black ease-in-out duration-300 hover:text-white hover:border-white text-secondary font-bold py-2 px-2 md:px-6 rounded border-secondary border-2">
            Get the app
        </button>
         </a>   


            <a href="https://6wrqf0my2ix.typeform.com/to/YGTXOmIc">
                <Button text="Contact us" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import Iphone from "@/assets/iphone_image.png";
import Grouped from "@/assets/Grouped.png";
import {RiAccountBoxFill} from "react-icons/ri";
import {MdAccountBalanceWallet} from "react-icons/md";
import Apple2 from "@/assets/appstore_2.png"
import Google2 from "@/assets/googleplay_2.png"
import Iphone2 from "@/assets/Img.png"

function Registration() {
  return (
    <section className="py-10 px-5 md:px-40">
      <p className=" text-primary font-bold text-4xl">
        Registration takes less <br /> than 3 minutes
      </p>
      <p className="md:text-2xl text-[#999999] leading-6 pb-10">
        Sign up by following these steps
      </p>

      <div className="flex justify-evenly w-full items-center">
        <div className="md:flex hidden flex-col items-center w-1/3" data-aos="zoom-out-down">
          <div className="flex ">
            <div className=" bg-primary p-2  rounded font-bold text-md text-xl h-10">
              <BsDownload color="white" size={20} />
            </div>

            <div>
              <p className="text-primary ml-3 font-bold text-md text-xl ">
                Download
              </p>

              <p className="text-[#999999] pl-3 pt-5 text-md">
              Our app is available for both iOS and Android devices, so you can easily download it to your smartphone or tablet.
              </p>
            </div>
          </div>

          {/* //Number 2 Here */}

          <div className="flex mt-20">
            <div className=" bg-primary p-2  rounded font-bold text-md text-xl h-10">
              <RiAccountBoxFill color="white" size={20} />
            </div>

            <div>
              <p className="text-primary ml-3 font-bold text-md text-xl ">
              Create your account
              </p>

              <p className="text-[#999999] pl-3 pt-5 text-md">
              Simply follow the prompts on the app to create your account. Creating an account on Payyng takes less than a minute.
              </p>
            </div>
          </div>
        </div>

        {/* THE MIDDLE APPLICATION HERE  */}

        <div className="md:w-1/3 flex flex-col relative justify-center items-center w-full object-cover bg-[url('/src/assets/Img.png')]" data-aos="zoom-in-up" >
          <Image
            className="object-cover  h-90 justify-center items-center flex pointer-events-none"
            src={Iphone}
            alt="Payyng Application Interface"
          />

          <Image
            className="absolute top-0 right-[-15px]  h-20 w-20"
            src={Grouped}
            alt="Payyng Application Interface"
          />

          <Image
            className="absolute bottom-20 left-[-80px] h-20 w-20"
            src={Grouped}
            alt="Payyng Application Interface"
          />

          <div className="mt-10 flex justify-evenly items-center">

            <a href="https://6wrqf0my2ix.typeform.com/to/YGTXOmIc">
          <Image
              className="h-12 w-40 mr-2 cursor-pointer "
              src={Google2}
              alt="Payyng Application Interface"
             />

             </a>

        <a href="https://6wrqf0my2ix.typeform.com/to/YGTXOmIc">
            <Image
              className="h-12 w-40 cursor-pointer"
              src={Apple2}
              alt="Payyng Application Interface"
             />

        </a>
        
          </div>
        </div>

        <div className="md:flex hidden flex-col items-center w-1/3" data-aos="zoom-out-right">
          <div className="flex ">
            <div className=" bg-primary p-2  rounded font-bold text-md text-xl h-10">
              <BsDownload color="white" size={20} />
            </div>

            <div>
              <p className="text-primary ml-3 font-bold text-md text-xl ">
                Create account
              </p>

              <p className="text-[#999999] pl-3 pt-5 text-md">
                Sign up by providing your name, phone number and email address
              </p>
            </div>
          </div>

          {/* //Number 2 Here */}

          <div className="flex mt-20">
            <div className=" bg-primary p-2  rounded font-bold text-md text-xl h-10">
              <MdAccountBalanceWallet color="white" size={20} />
            </div>

            <div>
              <p className="text-primary ml-3 font-bold text-md text-xl ">
              Start managing your finances on the go 
              </p>

              <p className="text-[#999999] pl-3 pt-5 text-md">
              You can easily make payments, track your transactions, and manage your finances on the go. International transactions also made easy and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;

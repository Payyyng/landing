import React from "react";
import NavBar from "../header/navBar";
import Image from "next/image";
import WorldBackground from "@/assets/world_background.png";
import Argentina from "@/assets/Argentina.png";
import USA from "@/assets/USA.png";
import UK from "@/assets/UK.png";
import Nigeria from "@/assets/Nigeria.png";
import Googleplay from "@/assets/googleplay.png";
import Appstore from "@/assets/appstore.png";
import Mastercard from "@/assets/Mastercard.png";
import Visa from "@/assets/Visa.png";
import Paypal from "@/assets/Paypal.png";
import Applepay from "@/assets/Applepay.png";
import Paystack from "@/assets/Paystack.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import {FaCcStripe, FaStripe, FaCcPaypal, FaCcMastercard } from 'react-icons/fa'
import {SiWise} from "react-icons/si";
import {TbBrandVisa } from 'react-icons/tb'
import {RiVisaFill} from 'react-icons/ri'
import {SiDiscover} from 'react-icons/si'

function Hero() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    showArrows: false,
    autoPlay: true,
    showThumbs: false,
    infiniteLoop: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" bg-tertiary overflow-y-hidden">
        <NavBar />
        <div className="flex py-10 md:py-20 md:flex-row flex-col justify-between items-center px-3 md:px-20">
          <div className="flex flex-col justify-center md:pr-20">
            <h1 className="md:text-5xl text-3xl mt-20 font-bold  " data-aos="zoom-in-right">
              Send money to <br />{" "}
              <span className="text-secondary"> anyone, anywhere</span>
            </h1>
            <p className="md:text-2xl pt-7 text-[#999999] leading-6">
              Payy.ng allows you send money to anyone, anywhere, with just a few
              taps. You can send money to friends and family, pay for services,
              or even make international transfers.
            </p>

            <div className="flex my-10"data-aos="fade-up"
     data-aos-duration="3000">
              <Link href="https://6wrqf0my2ix.typeform.com/to/YGTXOmIc">
                <Image
                  className="mr-5"
                  src={Googleplay}
                  width={150}
                  height={50}
                  alt="Google Play Payyng"
                />
              </Link>

              <Link href="https://6wrqf0my2ix.typeform.com/to/YGTXOmIc">
                <Image
                  src={Appstore}
                  width={150}
                  height={50}
                  alt="App Store Payyng"
                />
              </Link>
            </div>
          </div>

          <div className="w-full h-full relative pointer-events-none">
            <Image
              src={WorldBackground}
              width={500}
              height={500}
              alt="World Background"
            />

            <div>
              <div className="absolute top-60 right-[180px] animate-pulse">
                <Image src={Argentina} width={25} height={25} alt="Argentina" />
              </div>

              <div className="absolute top-20 left-40 animate-pulse">
                <Image src={USA} width={25} height={25} alt="USA" />
              </div>

              <div className="absolute bottom-40 right-[280px] animate-pulse">
                <Image src={UK} width={25} height={25} alt="UK" />
              </div>

              <div className="absolute top-40 right-20 animate-pulse">
                <Image src={Nigeria} width={25} height={25} alt="Nigeria" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="md:px-20 mt-44 p-5 bg-white">
            <Slider {...settings}>
              <FaCcMastercard size={100} color="black" />
              <RiVisaFill size={100} color="black" />
              <FaStripe size={100} color="black" />
              <FaCcPaypal size={100} color="black" />
              <SiWise size={100} color="black" />
              <SiDiscover size={100} color="black" />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

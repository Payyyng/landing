import React from "react";
import { BsFillSendCheckFill, BsCurrencyExchange } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import {MdSecurity} from "react-icons/md";
import {SiFastapi, SiKashflow} from "react-icons/si";
import { motion, useTransform, useViewportScroll } from "framer-motion"




function KeyFeatures() {

  return (
    <motion.div
     className="py-20 px-5 md:px-20">
      <p className="text-center text-primary font-bold text-4xl">
        Our Key Features
      </p>
      <p className="md:text-2xl text-center text-[#999999] leading-6 py-7">
        The payment solution that simplifies your financial transactions. Our
        key features include:
      </p>

      {/* //Three Cards on a row */}
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start md:space-x-10 md:space-y-0 space-y-10 pt-10">
        
        
        <motion.div
        
        className="flex flex-col items-center lg:w-1/3 p-5" data-aos="zoom-in">
          <div className="p-6 rounded-full bg-primary ">
            <BsFillSendCheckFill size={60} className="text-white" />
          </div>
          <p className="text-center text-primary font-bold text-xl pt-5">
          Lightning-fast Payments
          </p>
          <p className="text-center text-[#999999] leading-6 animate__backInDown pt-2">
          Say goodbye to waiting around for transactions to go through, with Payyng you can make and receive payments in seconds.
          </p>
        </motion.div>


        <motion.div  
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
    className="flex flex-col items-center lg:w-1/3" data-aos="zoom-in">
          <div className="p-6 rounded-full bg-secondary ">
            <BsCurrencyExchange size={60} className="text-white" />
          </div>
          <p className="text-center text-primary font-bold text-xl pt-5">
            Multi-Currency Support
          </p>
          <p className="text-center text-[#999999] leading-6 pt-2">
          Make payments in multiple currencies, from and to anywhere in the world.          </p>
        </motion.div>

        <div className="flex flex-col items-center lg:w-1/3" data-aos="zoom-in">
          <div className="p-6 rounded-full bg-black ">
            <MdSecurity size={60} className="text-white" />
          </div>
          <p className="text-center text-primary font-bold text-xl pt-5">
          Top-notch Security
          </p>
          <p className="text-center text-[#999999] leading-6 pt-2">
          Rest easy knowing that your financial information is always safe and secure with our advanced security measures.
          </p>
        </div>
      </div>

            {/* //Three Cards on a row */}
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start md:space-x-10 md:space-y-0 space-y-10 pt-10">
        <div className="flex flex-col items-center lg:w-1/3 " data-aos="zoom-in">
          <div className="p-6 rounded-full bg-[#800080] ">
            <SiFastapi size={60} className="text-white" />
          </div>
          <p className="text-center text-primary font-bold text-xl pt-5">
          Fast and Easy Setup
          </p>
          <p className="text-center text-[#999999] leading-6 pt-2">
          Set up your Payyng account in minutes, link your preferred payment method and start transacting immediately
          </p>
        </div>

        <div className="flex flex-col items-center lg:w-1/3" data-aos="zoom-in">
          <div className="p-6 rounded-full bg-[#FF0000] ">
            <FaFileInvoice size={60} className="text-white" />
          </div>
          <p className="text-center text-primary font-bold text-xl pt-5">
            Split Bill Payment
          </p>
          <p className="text-center text-[#999999] leading-6 pt-2">
          Say goodbye to awkward conversations about who owes what and the headache of trying to collect payments. With Payyng, splitting a bill is a breeze. 
            </p>
        </div>

        <div className="flex flex-col items-center lg:w-1/3" data-aos="zoom-in">
          <div className="p-6 rounded-full bg-[#FFA500] ">
            <SiKashflow size={60} className="text-white" />
          </div>
          <p className="text-center text-primary font-bold text-xl pt-5">
          Exchange
          </p>
          <p className="text-center text-[#999999] leading-6 pt-2">
          Enjoy hassle-free currency exchange without the need for complicated procedures or hefty fees.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default KeyFeatures;

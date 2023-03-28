import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/hero/hero";
import KeyFeatures from "@/components/home/keyfeatures";
import Registration from "@/components/home/registration";
import SendAndReceive from "@/components/home/sendAndreceive";
import Faq from "@/components/home/faq";
import FooterImg from "@/assets/Footer.png";
import Footer from "@/components/home/footer";
import { motion, useScroll } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
import {useEffect} from 'react'


export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect (() => {
    window.scrollTo(0, 0);
  }, [])



  return (
    <>
      <Head>
        <title>
          Payyng - The payment solution that Simplifies Your Financial Life
        </title>
        <meta
          name="description"
          content="Say goodbye to the stress of managing your finances on the go with Payyng - the mobile application that simplifies your financial life in just four easy steps. Download Payyng today and start managing your payments, tracking transactions, and automating your finances with ease."
        />
        <meta
          name="keywords"
          content="Payyng, mobile application, financial management, payments, transactions, automatic payments, reminders, simplify finances, financial life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Payyng - The payment solution that Simplifies Your Financial Life"
        />
        <meta
          property="og:description"
          content="Say goodbye to the stress of managing your finances on the go with Payyng - the mobile application that simplifies your financial life in just four easy steps."
        />
        <meta property="og:image" content="../assets/payyng_logo.png" />
        <meta property="og:url" content="https://payyng.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:image" content="../assets/payyng_logo.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:site_name" content="Payyng - Payyng - The payment solution that Simplifies Your Financial Life "/>
  <meta name="twitter:card" content="../assets/payyng_logo.png"/>
  <meta name="twitter:image:alt" content="Say goodbye to the stress of managing your finances on the go with Payyng - the mobile application that simplifies your financial life in just four easy steps."/>




      </Head>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-2 right-0 w-full bg-secondary origin-top-left"></motion.div>
      <main>
        <header>
          <Hero />
        </header>

        <KeyFeatures />
        <Registration />
        <SendAndReceive />
        <Faq />

        <Image
          className="md:mb-40 mb-10 pointer-events-none" data-aos="zoom-in"
          src={FooterImg}
          alt="Payyng Website"
        />

        <Footer />
      </main>
    </>
  );
}

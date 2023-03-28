import React from 'react'
import Image from 'next/image'
import Woman from "@/assets/Woman.png"
import Woman2 from "@/assets/Woman2.png"
import Send from "@/assets/sent.png"
import Receive from "@/assets/Received.png"



function SendAndReceive() {
  return (
    <section className=' w-full bg-primary p-5 md:p-20'> 

    <div className="relative flex justify-between" >
      <Image 
      className="object-fit md:max-w-[600px]" data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      src={Woman}
      alt="Woman Using Payyng"
      />

      <Image 
      className="object-fit h-20 w-auto absolute md:right-[28rem] top-[200px]" data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      src={Send}
      alt="Send Money Using Payyng"
      />


    </div>

    <div className="relative flex justify-end flex-end"  data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      data-aos-easing="ease-in-sine">
      <Image 
      className="object-fit md:max-w-[700px] "
      src={Woman2}
      alt="Woman Using Payyng"
      />

      <Image 
      className="object-fit h-20 w-auto absolute md:right-[40rem] top-[200px]" data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      src={Receive}
      alt="Send Money Using Payyng"
      />


    </div>

    </section>
  )
}

export default SendAndReceive

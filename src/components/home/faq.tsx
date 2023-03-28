import React from "react";

function Faq() {
  return (
    <section className="p-5 md:p-20">
      <p className=" text-primary font-bold text-4xl">
        Frequently <br /> Asked Questions
      </p>

      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div
          className="md:w-1/2 w-full bg-primary rounded-xl p-5 my-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl text-white">What is Payy.ng?</p>
          <p className="text-[#CCCCCC] text-md pt-3">
            Payy.ng is a mobile money transfer service that allows you to send
            money to anyone, anywhere, with just a few taps. You can send money
            to friends and family, pay for services, or even make international
            transfers.
          </p>
        </div>

        <div
          className="md:w-1/2 w-ful rounded-xl p-5 md:m-5"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl text-primary">
            What types of payments can I make with Payyng?
          </p>
          <p className="text-[#999999] text-md pt-3">
            With Payyng, you can make all kinds of payments, including one-time
            payments, recurring payments, and even international payments.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div
          className="md:w-1/2 w-full bg-primary md:bg-white rounded-xl p-5 my-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl md:text-primary text-white">
            What currencies does Payyng support?
          </p>
          <p className=" md:text-[#999999] text-[#CCCCCC] text-md pt-3">
            Payyng supports a wide range of currencies to ensure that users can
            send and receive payments regardless of your location or currency
            preference. Some of the major currencies supported by Payyng include
            USD, EUR, GBP, JPY, AUD, CAD, CHF, HKD, SGD, and many others.
          </p>
        </div>

        <div
          className="md:w-1/2 w-ful bg-white md:bg-primary rounded-xl p-5 md:m-5"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl md:text-white text-primary">
            How do I receive payments with Payyng?
          </p>
          <p className="md:text-[#CCCCCC] text-[#999999] text-md  pt-3">
            Receiving payments with Payyng is just as easy as sending them.
            Simply provide your Payyng account information to the person or
            business that wants to pay you, and the funds will be transferred
            directly to your account.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div
          className="md:w-1/2 w-full bg-primary rounded-xl p-5 my-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl text-white">
            Can I send money internationally with Payyng?
          </p>
          <p className="text-[#CCCCCC] text-md pt-3">
            Yes, Payyng supports international payments in many currencies.
            However, fees and restrictions may apply depending on the
            recipient&apos;s location and payment method.
          </p>
        </div>

        <div
          className="md:w-1/2 w-ful rounded-xl p-5 md:m-5"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl text-primary">
            Is there a fee to use Payyng?
          </p>
          <p className="text-[#999999] text-md pt-3">
            Payyng charges a small fee for certain transactions, such as
            withdrawals to a bank account. However, sending and receiving
            payments between Payyng users is generally free.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div
          className="md:w-1/2 w-full bg-primary md:bg-white rounded-xl p-5 my-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl md:text-primary text-white">
            {" "}
            How long does it take for payments to go through?
          </p>
          <p className=" md:text-[#999999] text-[#CCCCCC] text-md pt-3">
            Payments initiated on Payyng are usually processed within a few
            minutes, although some transactions may take longer depending on the
            recipient&apos;s bank and payment method.
          </p>
        </div>

        <div
          className="md:w-1/2 w-ful bg-white md:bg-primary rounded-xl p-5 md:m-5"
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
          <p className="font-bold text-2xl md:text-white text-primary">
            How do I contact Payyng customer support?
          </p>
          <p className="md:text-[#CCCCCC] text-[#999999] text-md  pt-3">
            If you have any questions or issues with Payyng, our customer
            support team is available 24/7 via email or live chat on our
            website.You can send an email to support@payyng.com and one of our
            support representatives will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Faq;

"use client"

import React from "react";
import { useState, useContext } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import NavBar from '@/components/NavBar'
import { HomeContext } from "@/context/HomeContext.jsx";
import ShopNav from "@/components/ShopNav";
import InputArea from "@/components/InputArea";
import Locations from "@/components/Locations.jsx";
import { STREETS } from "@/streets.js";
import { useRouter } from "next/navigation";


export default function Verification() {
  const router= useRouter()

  const [
    RegisteredAddress,
    setRegisteredAddress
  ] = useState(true);

  const { 
    getTotalCartAmount,
    addressInputOpen,
    addressInputClose,
    location,
    addressClick, } = useContext(HomeContext);

  // const navigate = useNavigate();
  const payableAmount = getTotalCartAmount();
  const KEY = "FLWPUBK_TEST-d0838725990649edd81198e11c5b468f-X";

  const config = {
    public_key: KEY,
    tx_ref: Date.now(),
    amount: payableAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    redirect_url: "/ordersuccessful",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "John Doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "../src/assets/foodbag.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <NavBar />
      <div className="mx-[20px] lg:mx-[100px] mt-[80px] font-Poppins">
        <ShopNav
          width="w-[178px]"
          textDisplay="text-primary-very-light-grey"
          displayVendors="hidden"
        />
        <div className="mt-[20px]">
          <p className="text-[20px] lg:text-[30px] font-medium">Verification</p>
          <p className="text-[14px] lg:text-base font-normal text-primary-red">
            Confirm address & Phone Number
          </p>
        </div>

        <div className={`${RegisteredAddress ? 'block' : 'hidden'} mt-[42px] flex justify-between items-center`}>
          <div className="">
            <p className="text-sm sm:text-base lg:text-[20px] font-medium">
              Delivery Address
            </p>
            <p className="text-[10px] sm:text-sm lg:text-[16px] font-normal text-primary-grey mt-[5px]">
              Deliver to <span className="font-semibold text-[12px]">{location}</span> 
            </p>
          </div>
          <div
            className="flex items-center justify-center w-[20px] h-[20px] outline outline-[2px] outline-primary-red rounded-[12px]"
            onClick={() => setRegisteredAddress(!RegisteredAddress)}
          >
            <button
              className={`w-[14px] h-[14px] p-[3px] bg-primary-red rounded-[8px] ${
                RegisteredAddress ? "block" : "hidden"
              } `}
            ></button>

          </div>
        </div>

        <div className={`${RegisteredAddress ? "hidden" : "block"} mt-[40px]`}>
          <div
            className="mt-[20px] lg:mt-[80px]"
            onMouseLeave={addressInputClose}
          >
            <p className="text-[12px] sm:text-[16px] lg:text-[20px] font-medium text-black ">
              Where are you?
            </p>
            <div className="flex justify-between items-center w-full border-[1px] mt-[10px] shadow-xl rounded-[5px] bg-white">
              <input
                className="text-[13px] font-normal w-full h-[50px] lg:h-[60px] mx-[10px] p-[5px] sm:text-base lg:text-[20px] outline-none"
                placeholder="Select your delivery address"
                value={location}
                onChange={(e) => e.currentTarget.value}
                onClick={addressInputOpen}
              />
              <i
                className={`${
                  addressClick ? "hidden" : "block"
                } fa fa-chevron-down text-primary-red px-[8px] lg:px-[20px] w-auto`}
              ></i>
              <i
                className={`${
                  addressClick ? "block" : "hidden"
                } fa fa-chevron-up text-primary-red px-[8px] lg:px-[20px] w-auto`}
              ></i>
            </div>
            <div
              className={`${
                addressClick ? "block" : "hidden"
              } flex flex-col gap-[12px] lg:gap-[16px] mt-[10px] py-[15px] w-full text-left sm:w-[300px] border rounded-lg shadow-2xl`}
            >
              {STREETS.map((street) => {
                return <Locations data={street} key={street.id} />;
              })}
            </div>
          </div>
        </div>

        <InputArea
          myProps="mt-[30px] lg:mt-[30px] w-full shadow-xl"
          head="More Info"
          type="text"
          placeholder="Additional Info For Delivery Man"
          inputprops="w-full"
        />

        <InputArea
          myProps="mt-[30px] lg:mt-[30px] w-full shadow-xl"
          head="Phone Number"
          type="tel"
          mnlength="10"
          mxlength="11"
          placeholder="+234"
          inputprops="w-full"
        />

        <div className="border-b-[1px] mt-[30px]"></div>

        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                if (response.status === "completed") {
                }
                console.log(response);
                closePaymentModal();
              },
              onClose: () => {
                router.push("/orderfailed");
              },
            });
          }}
          className="w-full sm:w-[500px] lg:w-[809px] h-[50px] sm:h-[60px] flex items-center justify-center  rounded-[5px] sm:mx-auto mt-[49px] mb-[33px] lg:mt-[60px] text-base font-semibold text-white bg-primary-red"
        >
          Proceed to Payment
        </button>
      </div>
    </>
  );
}

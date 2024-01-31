"use client";

import React from "react";
import { useState, useContext } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import NavBar from "@/components/NavBar";
import { HomeContext } from "@/context/HomeContext.jsx";
import ShopNav from "@/components/ShopNav";
import SetLocation from "@/components/SetLocation";
import InputArea from "@/components/InputArea";
import { useRouter } from "next/navigation";

export default function Verification() {
  const router = useRouter();

  const [RegisteredAddress, setRegisteredAddress] = useState(true);

  const {
    getTotalCartAmount,
    addressInputClose,
    location,
    currentUser,
    alternateNum,
    setAlternateNum,
    showAlternateNum,
    setShowAlernateNum,
    additionalInfo,
    setAdditionalInfo
  } = useContext(HomeContext);

  const payableAmount = getTotalCartAmount();

  const config = {
    public_key: "FLWPUBK_TEST-d0838725990649edd81198e11c5b468f-X",
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
      <div className="mx-[20px] mt-[80px] font-Poppins lg:mx-[200px]">
        <ShopNav
          width="w-[178px]"
          textDisplay="text-primary-very-light-grey"
          displayVendors="hidden"
        />
        <div className="mt-[20px]">
          <p className="text-[20px] font-medium lg:text-[30px]">Verification</p>
          <p className="text-[14px] font-normal text-primary-red lg:text-base">
            Confirm address & Phone Number
          </p>
        </div>

        <div
          className={`${RegisteredAddress ? "block" : "hidden"} mt-[42px] flex items-center justify-between`}
        >
          <div className="">
            <p className="text-sm font-medium sm:text-base lg:text-[20px]">
              Delivery Address
            </p>
            <p className="mt-[5px] text-[10px] font-normal text-primary-grey sm:text-sm lg:text-[16px]">
              Deliver to{" "}
              <span className="text-[12px] font-semibold">{location}</span>
            </p>
          </div>
          <div
            className="flex h-[20px] w-[20px] items-center justify-center rounded-[12px] outline outline-[2px] outline-primary-red"
            onClick={() => setRegisteredAddress(!RegisteredAddress)}
          >
            <button
              className={`h-[14px] w-[14px] rounded-[8px] bg-primary-red p-[3px] ${
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
            <p className="text-[12px] font-medium text-black sm:text-[14px] lg:text-[18px] ">
              Where are you?
            </p>
            <SetLocation />
          </div>
        </div>

        <div className="mt-[30px] text-[14px] font-medium sm:text-base lg:mt-[30px] lg:text-[20px]">
          <label>More Info</label>
          <textarea
            className=" mt-[8px] h-[50px] w-full  rounded-[5px] border-[1px] p-[10px] shadow-xl outline-none lg:h-[60px]"
            value={`${additionalInfo.info}`}
            mnlength="10"
            mxlength="11"
            placeholder="Additional location info for delivery man"
            onChange={(e) => setAdditionalInfo({...additionalInfo, info: e.target.value})}
          />
        </div>

        <div className="mt-[30px] text-[14px] font-medium sm:text-base lg:mt-[30px] lg:text-[20px]">
          <label>Profile Number</label>
          <input
            className=" mt-[8px] h-[50px] w-full  rounded-[5px] border-[1px] p-[10px] shadow-xl outline-none lg:h-[60px]"
            value={`0${currentUser.phonenumber}`}
            type="tel"
            mnlength="10"
            mxlength="11"
            placeholder="+234"
            readOnly
          />
        </div>
        {!showAlternateNum && (
          <div className="mt-4 flex items-center justify-center text-xs font-medium text-primary-green">
            <button
              className="flex items-center justify-center md:text-base "
              onClick={() => setShowAlernateNum(true)}
            >
              <span className="mr-1 text-[24px]">+</span> Add Another Number
            </button>
          </div>
        )}

        {showAlternateNum && (
          <div className="mt-[30px] text-[14px] font-medium sm:text-base lg:mt-[30px] lg:text-[20px]">
            <label>Alternate Number</label>

            <input
              className=" mt-[8px] h-[50px] w-full  rounded-[5px] border-[1px] p-[10px] shadow-xl outline-none lg:h-[60px]"
              head="Alternate Number"
              type="tel"
              mnlength="10"
              mxlength="11"
              placeholder="+234"
              value={alternateNum.num}
              onChange={(e) =>
                setAlternateNum({ ...alternateNum, num: e.target.value })
              }
            />
          </div>
        )}

        <div className="mt-[30px] border-b-[1px]"></div>

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
          className="mb-[33px] mt-[29px] flex h-[50px] w-full items-center justify-center rounded-[5px]  bg-primary-red text-base font-semibold text-white sm:mx-auto sm:h-[60px] sm:w-[500px] md:text-xl lg:mt-[60px] lg:w-[809px]"
        >
          Proceed to Payment
        </button>
      </div>
    </>
  );
}

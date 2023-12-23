"use client"

import React from "react";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext.jsx";
import Interests from "./Interests.jsx";
import HomeServe from "./HomeServe.jsx";
import Locations from "./Locations.jsx";
import { STREETS } from "../streets.js";
import ff from "../../public/assets/fast-food1.png";
import hf from "../../public/assets/healthy-food 1.png";
import drinks from "../../public/assets/mai-thai 1.png";
import fork from "../../public/assets/fork 1.png";
import ffColored from "../../public/assets/fast-food-colored.svg";
import hfColored from "../../public/assets/healthy-food-colored.svg";
import mtColored from "../../public/assets/mai-thai-colored.svg";
import fkColored from "../../public/assets/fork-colored.svg";
import TypeIt from "typeit-react";

export default function HomeMenu() {
  const {
    addressInputOpen,
    addressInputClose,
    addressClick,
    visibility,
    location,
  } = useContext(HomeContext);

  return (
      <div
        className={`${
          visibility ? "fixed" : "static"
        } pt-[80px] lg:mt-[70px] mx-[20px] sm:mx-[40px] lg:mx-[100px] font-Poppins text-primary-grey`}
      >
        <div className="sm:text-center">
          <p className="text-[20px] sm:text-[28px] lg:text-[40px] font-semibold ">
            chowChow
          </p>
          <p className="text-[12px] sm:text-[15px] lg:text-[20px] font-normal">
            Anything food, we got you covered!
          </p>
        </div>
        <div
          className="mt-[31px] lg:mt-[80px]"
          onMouseLeave={() => addressInputClose()}
        >
          <div className="text-[12px] sm:text-[16px] lg:text-[20px] font-bold text-black ">
          <TypeIt
                options={{
                    strings: ["Where are you?"],
                    speed: 50,
                    waitUntilVisible: true,
                }}
            />
          </div>
          <div className={`flex justify-between items-center w-full border mt-[10px] shadow-xl rounded-[10px] ${location == "" ? 'bg-white' : 'bg-inherit'}`}>
            <input
              className={`text-[13px] font-normal w-full h-[50px] lg:h-[60px] p-[5px] mx-[10px] sm:text-base lg:text-[20px] outline-none  ${location == "" ? 'bg-white' : 'bg-inherit'}`}
              placeholder="Select your delivery address"
              value={location}
              onChange={(e) => e.currentTarget.value}
              onClick={() => addressInputOpen()}
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
              return <Locations data={street} key={street.id}/>;
            })}
          </div>
        </div>

        <div className="my-[30px] lg:my-[42px]">
          <p className="text-[12px] sm:text-[16px] lg:text-[20px]">
            Pick an interest
          </p>
          <div className="flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between mt-[10px] sm:mt-[20px] gap-[20px]">
            <Interests
              routte={location !== "" ? "/vendors" : ""}
              src={location !== "" ? ffColored : ff}
              head="Fast food"
              desc="All sorrows are less with bread."
              display="hidden"
            />
            <Interests
              src={location !== "" ? hfColored : hf}
              head="Vegetables & Fruits"
              desc="May not want it, but good for you."
              display="absolute bg-primary-red "
            />
            <Interests
            
              src={location !== "" ? mtColored : drinks}
              head="Drinks & Cocktails"
              desc="I feel sad for those who don't drink."
              display="absolute bg-primary-red"
            />
            <Interests
              src={location !== "" ? fkColored : fork}
              head="Restaurants"
              desc="All sorrows are less with bread."
              display="absolute bg-primary-red "
            />
          </div>

          <div className="border-b-[1px] mt-[30px]"></div>

          <div className="w-full text-center mt-[30px]">
            <p className="text-[20px] font-semibold text-primary-grey">
              How we serve you
            </p>
            <HomeServe />
          </div>
        </div>
      </div>
    
  );
}

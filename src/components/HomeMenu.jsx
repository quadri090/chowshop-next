"use client";

import React from "react";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext.jsx";
import Interests from "./Interests.jsx";
import HomeServe from "./HomeServe.jsx";
import SetLocation from "./SetLocation.jsx"
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
      } mx-[20px] pt-[80px] font-Poppins text-primary-grey sm:mx-[40px] lg:mx-[100px] lg:mt-[70px]`}
    >
      <div className="sm:text-center">
        <p className="text-[20px] font-semibold sm:text-[28px] lg:text-[40px] ">
          chowChow
        </p>
        <p className="text-[12px] font-normal sm:text-[15px] lg:text-[20px]">
          Anything food, we got you covered!
        </p>
      </div>
      <div
        className="mt-[31px] lg:mt-[80px]"
        onMouseLeave={() => addressInputClose()}
      >
        <div className="text-[12px] font-bold text-black sm:text-[16px] lg:text-[20px] ">
          <TypeIt
            options={{
              strings: ["Where are you?"],
              speed: 50,
              waitUntilVisible: true,
            }}
          />
        </div>
       <SetLocation/>


      </div>

      <div className="my-[30px] lg:my-[42px]">
        <p className="text-[12px] sm:text-[16px] lg:text-[20px]">
          Pick an interest
        </p>
        <div className="mt-[10px] flex flex-col gap-[20px] sm:mt-[20px] sm:grid sm:grid-cols-2 sm:grid-rows-2 ">
          <Interests
            routte={location !== "" ? "/vendors" : "/"}
            src={location !== "" ? ffColored : ff}
            head="Fast food"
            desc="All sorrows are less with bread."
            display="hidden"
          />
          <Interests
            routte="/"
            src={location !== "" ? hfColored : hf}
            head="Vegetables & Fruits"
            desc="May not want it, but good for you."
            display="absolute bg-primary-red "
          />
          <Interests
            routte="/"
            src={location !== "" ? mtColored : drinks}
            head="Drinks & Cocktails"
            desc="I feel sad for those who don't drink."
            display="absolute bg-primary-red"
          />
          <Interests
            routte="/"
            src={location !== "" ? fkColored : fork}
            head="Restaurants"
            desc="All sorrows are less with bread."
            display="absolute bg-primary-red "
          />
        </div>

        <div className="mt-[30px] border-b-[1px]"></div>

        <div className="mt-[30px] w-full text-center">
          <p className="text-[20px] font-semibold text-primary-grey">
            How we serve you
          </p>
          <HomeServe />
        </div>
      </div>
    </div>
  );
}

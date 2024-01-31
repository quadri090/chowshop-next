import React from "react";
import Locations from "./Locations.jsx";
import { STREETS } from "../streets.js";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext.jsx";

export default function SetLocation() {
  const { addressInputOpen, addressClick, location } = useContext(HomeContext);

  return (
    <>
      <div
        className={`mt-[10px] flex w-full items-center justify-between rounded-[10px] border shadow-xl ${location == "" ? "bg-white" : "bg-inherit"}`}
      >
        <input
          className={`mx-[10px] h-[50px] w-full p-[5px] text-[13px] font-normal outline-none outline-dashed sm:text-base lg:h-[60px] lg:text-[20px]  ${location == "" ? "bg-white" : "bg-inherit"}`}
          placeholder="Select your delivery address"
          value={location}
          onChange={(e) => e.currentTarget.value}
          onClick={() => addressInputOpen()}
          readOnly
        />

        <i
          className={`${
            addressClick ? "hidden" : "block"
          } fa fa-chevron-down w-auto px-[8px] text-primary-red lg:px-[20px]`}
        ></i>
        <i
          className={`${
            addressClick ? "block" : "hidden"
          } fa fa-chevron-up w-auto px-[8px] text-primary-red lg:px-[20px]`}
        ></i>
      </div>
      <div
        className={`${
          addressClick ? "block" : "hidden"
        } mt-[10px] grid h-48 w-full grid-cols-4 gap-y-6 overflow-y-scroll rounded-lg border py-6 text-left shadow-2xl sm:w-[500px] md:h-80 md:grid-cols-3 md:gap-12 md:px-6 lg:gap-[16px]`}
      >
        {STREETS.map((street) => {
          return <Locations data={street} key={street.id} />;
        })}
      </div>
    </>
  );
}

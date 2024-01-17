"use client";

import React from "react";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export default function Locations(props) {
  const { addressInputClose, setLocation } = useContext(HomeContext);
  const { streetName } = props.data;

  const setStreetname = (streetName) => {
    setLocation(streetName);
    addressInputClose();
  };

  return (
    <div
      className="hover:text-primary-red"
      onClick={() => {
        setStreetname(streetName);
      }}
    >
      <p
        className="ml-[10px] text-[13px] font-semibold hover:cursor-pointer lg:text-[16px]"
        id="streetInput"
      >
        {streetName}
      </p>
    </div>
  );
}

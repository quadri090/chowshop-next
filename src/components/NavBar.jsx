"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext.jsx";
import { FaUserCircle } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";

export default function NavBar() {
  const router = useRouter()
  const { getTotalItemsCount, currentUser, setCurrentUser } = useContext(HomeContext);
  const totalItemCount = getTotalItemsCount();
  const [profileDisplay, setProfileDisplay] = React.useState(false);

  const toggleOn = () => {
    setProfileDisplay(true);
  };

  const toggleOff = () => {
    setProfileDisplay(false);
  };

  const logOut = async () => {
    try {
      await axios.get("api/users/logout");
      setCurrentUser({
        username: "",
        phonenumber: "",
        email: "",
        _id: ""})
      router.push("/login")
    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <div className="w-screen fixed top-0 h-[48px] sm:h-[60px] px-[20px] sm:px-[30px] lg:px-[100px] lg:mb-[42px] flex justify-between items-center bg-zinc-200 rounded-b-3xl text-[12px] sm:text-[16px] font-normal font-Poppins z-10 leading-normal border-b-4 border-white">
      <div className="w-[85px] sm:w-[90px] h-[24px] sm:h-[30px] text-[16px] sm:text-[20px] font-semibold flex items-center justify-center">
        <Link href="/" className="text-primary-grey">
          chow<span className="text-primary-red">Chow</span>
        </Link>
      </div>
      <ul className="flex items-center justify-center gap-[20px] sm:gap-[30px] lg:gap-[50px]">
        <Link href="/cart">
          <li className="flex relative text-primary-light-grey">
            <i
              className="fa fa-shopping-cart text-[24px] md:text-[36px]"
              aria-hidden="true"
            ></i>
            <div className="absolute flex items-center justify-center left-[50%] w-[15px] md:w-[20px] h-[15px] md:h-[20px] bg-white rounded-full outline md:outline-1">
              {totalItemCount > 0 ? (
                <p className="text-[10px] font-bold">{totalItemCount}</p>
              ) : (
                <p className="text-[10px] font-bold">0</p>
              )}
            </div>
          </li>
        </Link>

        <Link
          href={currentUser.phonenumber === "" ? "/login" : ``}
          // className={` w-[64px] sm:w-[92px] h-[26px] sm:h-[40px] flex items-center justify-center rounded-[5px] text-primary-red font-medium border border-primary-red`}
        >
          {!profileDisplay && (
            <i
              className="fa fa-user text-[24px] text-primary-light-grey md:text-[36px]"
              aria-hidden="true"
              onClick={toggleOn}
            ></i>
          )}

          {profileDisplay && (
            <i
              className="fa fa-user text-primary-red text-[24px] md:text-[36px]"
              aria-hidden="true"
              onClick={toggleOff}
            ></i>
          )}
        </Link>
        {profileDisplay && (
          <div className="fixed top-[50px] sm:top-[60px] right-[20px] sm:right-[30px] lg:right-[80px] w-[140px] h-[120px] p-4  text-xs bg-zinc-200 rounded-xl shadow-xl">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-base" />
              <p>{currentUser.username}</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <FaPhoneSquareAlt className="text-base" />
              <p>0{currentUser.phonenumber}</p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 mx-auto text-red-600 text-sm font-medium">
              <SlLogout/>
              <button
                onClick={() => {logOut()}}
              >Logout</button>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

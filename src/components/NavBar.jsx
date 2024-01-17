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
  const router = useRouter();
  const { getTotalItemsCount, currentUser, setCurrentUser } =
    useContext(HomeContext);
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
        _id: "",
      });
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="fixed top-0 z-10 flex h-[48px] w-screen items-center justify-between rounded-b-3xl border-b-4 border-white bg-zinc-200 px-[20px] font-Poppins text-[12px] font-normal leading-normal sm:h-[60px] sm:px-[30px] sm:text-[16px] lg:mb-[42px] lg:px-[100px]">
      <div className="flex h-[24px] w-[85px] items-center justify-center text-[16px] font-semibold sm:h-[30px] sm:w-[90px] sm:text-[20px]">
        <Link href="/" className="text-primary-grey">
          chow<span className="text-primary-red">Chow</span>
        </Link>
      </div>
      <ul className="flex items-center justify-center gap-[20px] sm:gap-[30px] lg:gap-[50px]">
        <Link href="/cart">
          <li className="relative flex text-primary-light-grey">
            <i
              className="fa fa-shopping-cart text-[24px] md:text-[36px]"
              aria-hidden="true"
            ></i>
            <div className="absolute left-[50%] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-white outline md:h-[20px] md:w-[20px] md:outline-1">
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
              className="fa fa-user text-[24px] text-primary-red md:text-[36px]"
              aria-hidden="true"
              onClick={toggleOff}
            ></i>
          )}
        </Link>
        {profileDisplay && (
          <div className="fixed right-[20px] top-[50px] h-[120px] w-[140px] rounded-xl bg-zinc-200 p-4 text-xs  shadow-xl sm:right-[30px] sm:top-[60px] lg:right-[80px]">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-base" />
              <p>{currentUser.username}</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <FaPhoneSquareAlt className="text-base" />
              <p>0{currentUser.phonenumber}</p>
            </div>
            <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-sm font-medium text-red-600">
              <SlLogout />
              <button
                onClick={() => {
                  logOut();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

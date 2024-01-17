"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginModal from "@/components/LoginModal.jsx";
import { FaExclamationCircle } from "react-icons/fa";
// import HomeContext from "@/context/HomeContext.jsx";

export default function LogIn() {
  const inputClasses =
    "text-[14px] sm:text-base lg:text-[20px] font-medium h-[50px] p-[10px] border-[1px] mt-[0px] w-full sm:h-[60px] shadow-xl outline-primary-red rounded-[5px]";
  const router = useRouter();
  // const {
  //   isNotVisible,
  //   visibility
  //  } = useContext(HomeContext);

  const [user, setUser] = useState({
    phonenumber: "",
    password: "",
  });

  const [buttondisabled, setButtonDisabled] = React.useState(true);

  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(false);

  const [emptyField, setEmptyField] = React.useState(false);

  useEffect(() => {
    if (user.phonenumber.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
      setEmptyField(false);
    }
    if (error === true) {
      setEmptyField(false);
    }
  }, [user, error]);

  const checkButtonState = async () => {
    if (!buttondisabled) {
      const onLogin = async () => {
        try {
          setLoading(true);
          const res = await axios.post("/api/users/login", user);
          console.log("Login Successful", res.data);
          router.push("/profile");
        } catch (error) {
          setError(true);
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      };
      onLogin();
    } else if (buttondisabled) {
      setEmptyField(true);
      setError(false);
    }
  };

  return (
    <LoginModal>
      <div className="mx-[20px] my-[40px] flex-col justify-center  font-Poppins sm:mx-auto sm:flex sm:w-[400px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium">Sign In</p>
            <p className="text-[12px] text-primary-very-light-grey">
              Sign in to continue
            </p>
          </div>
          <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full border bg-[#fff] text-primary-red shadow-myBoxShadow sm:h-[40px] sm:w-[40px]">
            <Link href="/">
              <i className="fa fa-times text-[16px] font-extralight md:text-[24px]"></i>
            </Link>
          </div>
        </div>

        <div>
          {/* <div
            className="w-full md:w-[500px] lg:w-full h-[50px] sm:h-[60px] mt-[40px] flex items-center justify-center gap-[15px] rounded-[5px] sm:mx-auto bg-black text-white text-[14px] "
            onClick={() => {
              alert("shipping soon for devs");
            }}
          >
            <i className="fa fa-github fa-2x"></i>
            <button className=""> Sign in with GitHub </button>
          </div>

          <div className="mt-[20px] w-full flex items-center text-center">
            <div className="flex-grow border-b-[2px] h-[2px]"></div>
            <p className="w-[50px]">Or</p>
            <div className="flex-grow border-b-[2px] h-[2px]"></div>
          </div> */}

          <div className="mt-[30px]">
            <label htmlFor="phonenumber" className="text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phonenumber"
              type="tel"
              placeholder="+234"
              className={inputClasses}
              value={user.phonenumber}
              onChange={(e) =>
                setUser({ ...user, phonenumber: e.target.value })
              }
            />
          </div>

          <div className="mt-[30px]">
            <label htmlFor="phonenumber" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="*******"
              className={inputClasses}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className="mt-[10px]">
            <button
              className="text-[14px]"
              onClick={() => {
                alert("I know you ain't forgot shit!");
              }}
            >
              Forgot password?
            </button>
          </div>

          {error && (
            <div className="mt-[10px] flex items-center gap-2 font-medium text-red-500">
              <p className="text-sm">Phone Number or password incorrect</p>
              <FaExclamationCircle />
            </div>
          )}

          {emptyField && (
            <div className="mt-[10px] flex items-center gap-2 font-medium text-red-500">
              <p className="text-sm">Fields can not be empty</p>
              <FaExclamationCircle />
            </div>
          )}

          <div className={`${error || emptyField ? "mt-0" : "mt-[20px]"}`}>
            <button
              className="hover:bg-yellow-500` flex h-[50px] w-full items-center justify-center rounded-[6px] bg-primary-red text-base font-semibold text-white  sm:mx-auto sm:h-[60px] sm:w-full lg:w-full"
              onClick={() => checkButtonState()}
            >
              Login
            </button>
          </div>

          <div className="mt-[20px]">
            <p className="text-[14px]">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-primary-red">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LoginModal>
  );
}

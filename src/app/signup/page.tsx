"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginModal from "@/components/LoginModal.jsx";

export default function SignupPage() {
  const router = useRouter();

  const inputClasses =
    "text-[14px] sm:text-base lg:text-[20px] font-medium h-[50px] p-[10px] border-[1px] mt-[8px] w-full sm:h-[60px] shadow-xl outline-primary-red rounded-[5px]";

  const [user, setUser] = useState({
    username: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  const [buttondisabled, setButtonDisabled] = useState(true);

  const [loading, setLoading] = useState(false);

  const checkBeforeSignup = async () => {
    if (!buttondisabled) {
      const onSignup = async () => {
        try {
          setLoading(true);
          const res = await axios.post("/api/users/signup", user);
          console.log("Signup successful", res.data);
          router.push("/login");
        } catch (error: any) {
          console.log(`Signup failed\n${error.message}`);
        } finally {
          setLoading(false);
        }
      };
      onSignup();
    }
  };

  React.useEffect(() => {
    if (
      user.username.length > 0 &&
      user.phonenumber.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <LoginModal>
      <div className="mx-[20px] my-[40px] flex-col justify-center  font-Poppins sm:mx-auto sm:flex sm:w-[400px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium">
              {loading ? "Signing up" : "Sign Up"}
            </p>
            <p className="text-[12px] text-primary-very-light-grey">
              Sign Up to continue
            </p>
          </div>
          <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full border bg-[#fff] text-primary-red shadow-myBoxShadow sm:h-[40px] sm:w-[40px]">
            <Link href="/">
              <i className="fa fa-times text-[16px] font-extralight md:text-[24px]"></i>
            </Link>
          </div>
        </div>

        <div>
          <div className="mt-[20px]">
            <input
              type="text"
              placeholder="Username"
              className={inputClasses}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="mt-[20px]">
            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClasses}
              value={user.phonenumber}
              onChange={(e) =>
                setUser({ ...user, phonenumber: e.target.value })
              }
            />
          </div>

          <div className="mt-[20px]">
            <input
              type="email"
              placeholder="Email"
              className={inputClasses}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="mt-[20px]">
            <input
              type="text"
              placeholder="password"
              className={inputClasses}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className="mt-[20px]">
            <button
              className="hover:bg-yellow-500` flex h-[50px] w-full items-center justify-center rounded-[6px] bg-primary-red text-base font-semibold text-white  sm:mx-auto sm:h-[60px] sm:w-full lg:w-full"
              onClick={() => checkBeforeSignup()}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-[20px]">
            <p className="text-[14px]">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-primary-red">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LoginModal>
  );
}

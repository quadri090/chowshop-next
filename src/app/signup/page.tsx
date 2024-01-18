"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginModal from "@/components/LoginModal.jsx";
import { FaExclamationCircle } from "react-icons/fa";

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

  const [error, setError] = React.useState(false);

  const [emptyField, setEmptyField] = React.useState(false);

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
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      onSignup();
    } else if (buttondisabled) {
      setEmptyField(true);
      setError(false);
    }
  };

  React.useEffect(() => {
    if (
      user.username.length > 0 &&
      user.phonenumber.length >= 10 &&
      user.email.length > 0 &&
      user.password.length > 6
    ) {
      setButtonDisabled(false);
      setEmptyField(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <LoginModal>
      <div className="mx-[20px] my-[40px] flex-col justify-center font-Poppins sm:mx-auto sm:flex sm:w-[400px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium">
              {loading ? "Signing up" : "Sign Up"}
            </p>
            <p className="text-[12px] text-primary-very-light-grey">
              Sign Up to continue
            </p>
          </div>
          {loading ? (
            <div role="status" className="flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="inline h-8 w-8 animate-spin fill-primary-red text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex h-6 w-6 items-center justify-center rounded-full border bg-[#fff] text-primary-red shadow-myBoxShadow sm:h-[40px] sm:w-[40px]">
              <Link href="/">
                <i className="fa fa-times text-[16px] font-extralight md:text-[24px]"></i>
              </Link>
            </div>
          )}
        </div>

        <form action={() => checkBeforeSignup()}>
          <div className="mt-[20px]">
            <input
              type="text"
              placeholder="Username"
              className={inputClasses}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            {user.username.length < 3 && emptyField && (
              <div className="mt-[10px] flex items-center gap-2 font-medium text-red-500">
                <p className="text-xs">Username must be above 3 characters</p>
                <FaExclamationCircle />
              </div>
            )}
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
            {user.phonenumber.length < 11 && emptyField && (
              <div className="mt-[10px] flex items-center gap-2 font-medium text-red-500">
                <p className="text-xs">Invalid Phone number</p>
                <FaExclamationCircle />
              </div>
            )}
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
              type="password"
              placeholder="password"
              className={inputClasses}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
             {user.password.length > 2 && user.password.length < 6 && emptyField && (
              <div className="mt-[10px] flex items-center gap-2 font-medium text-red-500">
                <p className="text-xs">Password too short</p>
                <FaExclamationCircle />
              </div>
            )}
          </div>

          {emptyField && (
            <div className="mt-[20px] flex items-center gap-2 font-medium text-red-500">
              <p className="text-xs">Fields can not be empty</p>
              <FaExclamationCircle />
            </div>
          )}

          {error && (
            <div className="mt-[20px] flex items-center gap-2 font-medium text-red-500">
              <p className="text-xs">
                User Phonenumber or Email already exists
              </p>
              <FaExclamationCircle />
            </div>
          )}

          <div className={`${error || emptyField ? "mt-0" : "mt-[20px]"}`}>
            <button
              className="hover:bg-yellow-500` flex h-[50px] w-full items-center justify-center rounded-[6px] bg-primary-red text-base font-semibold text-white  sm:mx-auto sm:h-[60px] sm:w-full lg:w-full"
              // onClick={() => checkBeforeSignup()}
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
        </form>
      </div>
    </LoginModal>
  );
}

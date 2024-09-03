"use client";
import React, { useState } from "react";

const Page = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInFields = [
    {
      title: "username",
      image: "user.png",
      placeholder: "Username",
    },
    {
      title: "password",
      image: "password.png",
      placeholder: "Password",
    },
  ];

  const signUpFields = [
    {
      title: "fullname",
      image: "user.png",
      placeholder: "Fullname",
    },
    {
      title: "username",
      image: "user.png",
      placeholder: "Username",
    },
    {
      title: "password",
      image: "password.png",
      placeholder: "Password",
    },
    {
      title: "confirm password",
      image: "password.png",
      placeholder: "Confirm Password",
    },
  ];

  const renderFields = isSignIn ? signInFields : signUpFields;

  return (
    <section className="bg-teal-500">
      <div className="bg-teal-500 w-full min-h-screen"></div>
      <div className="sticky bottom-0 left-0 right-0 w-full bg-teal-50/75 px-12 py-4 rounded-t-3xl min-h-[40vh] font-normal transition-all duration-500 ease-in-out transform">
        <div className="flex justify-center items-center font-bold my-6">
          <button
            onClick={() => setIsSignIn(true)}
            className={`py-1 px-8 border-2 border-teal-500 rounded-l-lg transition-colors duration-300 ${
              isSignIn
                ? "bg-teal-500 text-white/90"
                : "bg-transparent text-teal-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`py-1 px-8 border-2 border-teal-500 rounded-r-lg transition-colors duration-300 ${
              !isSignIn
                ? "bg-teal-500 text-white/90"
                : "bg-transparent text-teal-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="flex flex-col justify-center items-center mt-14 space-y-6 transition-opacity duration-500 ease-in-out opacity-100">
          {renderFields.map((item, index) => (
            <div
              key={index}
              className="relative z-0 w-full group transition-transform transform duration-500"
            >
              <img
                src={`/images/sign/${item.image}`}
                className="absolute left-4 top-3.5"
                alt={item.title}
              />
              <input
                type={item.title.includes("password") ? "password" : "text"}
                name={item.title}
                id={item.title}
                className="block pt-3 pb-2.5 pl-12 pr-4 w-full bg-white/90 text-gray-900 outline-teal-500 rounded-lg font-semibold h-12"
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </div>

        <div className="my-6 space-y-8">
          {isSignIn && (
            <a href="/" className="text-teal-500 font-semibold text-sm">
              Forgot Password?
            </a>
          )}

          <button className="bg-teal-500 w-full text-center rounded-full py-3 text-white/90 font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="w-full text-center rounded-full py-2 text-teal-500 font-semibold"
          >
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;

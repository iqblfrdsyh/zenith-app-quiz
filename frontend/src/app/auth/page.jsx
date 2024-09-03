"use client";

import React, { useState } from "react";
import InputField from "@/components/inputField";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInFields = [
    {
      name: "username",
      image: "user.png",
      placeholder: "Username",
      type: "text",
    },
    {
      name: "password",
      image: "password.png",
      placeholder: "Password",
      type: "password",
    },
  ];

  const signUpFields = [
    {
      name: "fullname",
      image: "user.png",
      placeholder: "Fullname",
      type: "text",
    },
    ...signInFields,
    {
      name: "confirm-password",
      image: "password.png",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  const renderFields = isSignIn ? signInFields : signUpFields;

  return (
    <section className="bg-teal-500 min-h-screen flex flex-col justify-end">
      <div className="sticky bottom-0 left-0 right-0 w-full bg-teal-50/75 px-12 py-4 rounded-t-3xl min-h-[40vh] font-normal transition-all duration-500 ease-in-out">
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

        <form className="flex flex-col justify-center items-center mt-14 space-y-6">
          {renderFields.map((field, index) => (
            <InputField
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              image={field.image}
            />
          ))}

          <div className="my-6 space-y-8 w-full">
            {isSignIn && (
              <a href="/" className="text-teal-500 font-semibold text-sm">
                Forgot Password?
              </a>
            )}
            <button
              type="submit"
              className="bg-teal-500 w-full text-center rounded-full py-3 text-white/90 font-semibold"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <button
              type="button"
              onClick={() => setIsSignIn(!isSignIn)}
              className="w-full text-center rounded-full py-2 text-teal-500 font-semibold"
            >
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthPage;

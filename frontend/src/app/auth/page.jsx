"use client";

import InputField from "@/components/inputField";
import React, { useState } from "react";

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
      <div
        className={`sticky bottom-0 left-0 right-0 w-full bg-teal-50/75 px-12 pt-3 rounded-t-3xl font-normal ${
          isSignIn ? "pb-8" : "pb-4"
        }`}
      >
        <div
          className={`flex justify-center items-center font-bold mt-5 ${
            isSignIn ? "mb-10" : "mb-0"
          }`}
        >
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

        <form className={`flex flex-col justify-center items-center mt-6 ${isSignIn ? "space-y-6" : "space-y-3.5"}`}>
          {renderFields.map((field, index) => (
            <InputField
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              image={field.image}
            />
          ))}

          <div className={`w-full ${isSignIn ? "space-y-8 mt-4" : "space-y-3.5"}`}>
            {isSignIn && (
              <a href="/" className="text-teal-500 font-semibold text-sm">
                Forgot Password?
              </a>
            )}
            <button
              type="submit"
              className="bg-teal-500 w-full text-center rounded-full py-2.5 text-white/90 font-semibold mt-2"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <button
              type="button"
              onClick={() => setIsSignIn(!isSignIn)}
              className={`w-full text-center rounded-full text-teal-500 font-semibold`}
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

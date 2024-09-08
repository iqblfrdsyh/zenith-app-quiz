"use client";

import React, { useState } from "react";
import { Input, Button, Spinner } from "@nextui-org/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { auth } from "@/libs/api-libs";

const AuthAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsloading(true);

    const data = {
      username,
      password,
    };

    try {
      const response = await auth("user/signin", data);

      if (response.role === "admin") {
        setIsloading(false);
        Swal.fire({
          icon: "success",
          title: "Success Login",
        }).then(() => {
          router.push("/admin/dashboard");
          // console.log("Ok");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Anda tidak mempunyai akses admin!",
        });
      }
    } catch (error) {
      setIsloading(false);
      Swal.fire({
        icon: "error",
        title: error.message,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 rounded-sm">
      <div className="w-full max-w-md p-8 m-5 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              fullWidth
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <Input
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" fullWidth color="primary" disabled={isLoading}>
            {isLoading ? <Spinner color="default" size="sm" /> : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthAdmin;

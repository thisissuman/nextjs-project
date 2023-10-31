"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import axios from "axios";
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("sign up access", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("sign up failed" + error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">
        {loading ? "Processing" : "Signup"}
      </h1>
      <div className="w-full max-w-xs  border rounded-lg p-5">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2 mt-4"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2 mt-4"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={onSignup}
        >
          {buttonDisabled ? "No signup" : "Sign Up"}
        </button>
        <Link
          href="/login"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4 ml-10"
        >
          Visit Login
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
